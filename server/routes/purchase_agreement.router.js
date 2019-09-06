const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const generatePDF = require("../pdfs/generate_pdfs")
const path = require('path')
const fs = require('fs')
var base64Img = require('base64-img');

//GET route purchase_agreement 
router.post('/pdf/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM purchase_agreement WHERE id = ${req.params.id}`;
  pool.query(queryText)
    .then(result => {
      const answers = result.rows[0]

      const purchaseSignature_dir = path.join(__dirname, "../pdfs/purchaseSignature/")
      if (!fs.existsSync(purchaseSignature_dir) ) {
        fs.mkdirSync(purchaseSignature_dir);
      }
      const name = `${answers.BUYER_1 || ""}_purchaseSignature`
      const sig_path = purchaseSignature_dir + `${name}.png`

      var pdf_filename = `${answers.BUYER_1 || ""}'s Purchase Agreement`

      base64Img.imgSync(answers.SIGNATURE_BUYER_1, purchaseSignature_dir, name, function(err, filepath) {
        console.log(filepath);
        console.log(sig_path);
      });

      if (answers.L3) {
        pdf_filename += `for ${answers.L3}`
      }
      pdf_filename += ".pdf"
      generatePDF(pdf_filename, "purchase", answers, sig_path)
      pool.query(
        `update purchase_agreement set pdf_path = $1 where id = $2;`,
        [pdf_filename, req.params.id]
      )
      fs.unlinkSync(sig_path)
      res.send(pdf_filename)
    })
    .catch(error => {
      console.log('error generating purchase_agreement pdf:', error);
      res.sendStatus(500);
    })
});

//GET route listing_contract 
router.get('/pdf/:pdf_name', rejectUnauthenticated, (req, res) => {
  const pdf_path = path.join(__dirname, "../pdfs/signed_pdfs/", req.params.pdf_name)
  res.sendFile(pdf_path)
})

//GET route for signed purchase_agreement
router.get('/signedDocs', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM purchase_agreement WHERE "SIGNATURE_BUYER_1" IS not NULL`;
  pool.query(queryText)
    .then(result => {
      // console.log(result.rows);
      res.send(result.rows)
    })
    .catch(error => {
      console.log('error making SELECT for purchase_agreement contract:', error);
      res.sendStatus(500);
    })
});

// POST route purchase_agreement
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('PURCHASE POST SERVER', req.body)
  const querySave = `INSERT INTO purchase_agreement ("BUYER_1") VALUES ('${req.body.BUYER_1}') RETURNING "id";`
  pool.query(querySave)
    .then(({ rows }) => {
      res.send(rows[0]);
    }).catch(error => {
      console.log('error making INSERT for post purchase_agreement answers', error);
      res.sendStatus(500);
    })
})

//GET route for draft purchase_agreement
router.get('/drafts', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM purchase_agreement WHERE "SIGNATURE_BUYER_1" IS NULL`;
  pool.query(queryText)
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log('error making SELECT for purchase_agreement contract:', error);
      res.sendStatus(500);
    })
});

// GET route purchase_agreement
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('GET PURCHASE AGREEMENT  SERVER HIT');
  const queryText = `SELECT * FROM purchase_agreement ORDER by "id"`;
  pool.query(queryText)
    .then(result => {
      console.log(result.rows);
      res.send(result.rows)
    })
    .catch(error => {
      console.log('error making SELECT for purchase:', error);
      res.sendStatus(500);
    })
});

router.get('/answers/:id', rejectUnauthenticated, (req,res)=>{
  pool.query(` select * from purchase_agreement where "id" = $1;`,[req.params.id])//req.param.id
    .then((results)=>{
      console.log(results.rows)
      res.send(results.rows)
    }).catch((error)=>{
      console.log('error in purchase agreement',error)
    })
});

router.put('/update', rejectUnauthenticated, (req, res) => {
  // console.log('UPDATE purchase_agreement SERVER HIT',req.body)
  console.log(req.body)
  pool.connect((err, client, done) => {
    let alreadyErroredOut = false;
    // code to run if there is an error
    const shouldAbort = (err, res) => {
      if (err && !alreadyErroredOut) {
        alreadyErroredOut = true;
        console.error('Error in transaction', err.stack)
        client.query('ROLLBACK', err => {
          if (err) {
            console.error('Error rolling back client', err.stack)
          }
          // release the client back to the pool
          done()
          res.sendStatus(500);
        })
      }
    }
    if (err) {
      done()
      return res.sendStatus(500)
    } else {
      client.query('BEGIN').then(()=>{
        const updatePromises = Object.entries(req.body.answers).map(([lineNumber, answer])=>{
          return pool.query(`
                        update purchase_agreement
                        set "${lineNumber}" = $1
                        where id = $2;
                    `,[answer, req.body.id]).catch(err => shouldAbort(err, res))
        })
        Promise.all(updatePromises).then(() => {
          if(!alreadyErroredOut) {
            client.query('COMMIT').then(() => {
              done();
              res.sendStatus(200);
            }).catch(err=>{
              console.log('error committing action',err)
            })
          }
        })
      }).catch(err => shouldAbort(err, res));
    }
  })
})

// POST route purchase_agreement
router.post('/save', rejectUnauthenticated, (req, res) => {
  console.log('PURCHASE POST SERVER', req.body)
  const querySave = `INSERT INTO purchase_agreement VALUES(DEFAULT) RETURNING "id";`
  pool.query(querySave)
    .then(({ rows }) => {
      res.send(rows);
    }).catch(error => {
      console.log('error making INSERT for post purchase_agreement answers', error);
      res.sendStatus(500);
    })
})

//DELETE route purchase_agreement
router.delete('/delete/:id', rejectUnauthenticated, (req, res) => {
  console.log('delete/:id route hit for purchase_agreement')
  const queryDelete = `DELETE FROM purchase_agreement WHERE "id"=$1 returning pdf_path`;
  pool.query(queryDelete, [req.params.id])
    .then(response => {
      const pdf_path = path.join(__dirname, "../pdfs/signed_pdfs/", response.rows[0].pdf_path)
      if ( fs.existsSync(pdf_path) ) {
        fs.unlinkSync(pdf_path)
      }
      res.sendStatus(200)
    }).catch(error => {
      console.log('error making DELETE for purchase agreement', error);
      res.sendStatus(500);
    })
});

module.exports = router;
