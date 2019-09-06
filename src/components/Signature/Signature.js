import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import SignatureCanvas  from 'react-signature-canvas';
import MediaQuery from 'react-responsive';
import './Signature.css'

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const styles = {
  Container: {
    marginTop: '10px',
  },
  button: {
    color: 'white',
  },
};

const theme = createMuiTheme({
  palette: {
    secondary: { main: '#1DB954' },
  },
});

class Signature extends Component {
  state = {
    id: this.props.match.params.id,
    answers:
    { SIGNATURE_BUYER_1: null }
  }
  sigPad = {}

  //this will clear the signature if a mistake was made when signing
  clearSig = () => {
    this.sigPad.clear();
  }

  //exit out of the signature page. return to the review page without saving.
  returnToReview = () => {
    this.props.history.push(`/listing/${this.state.id}`)
  }

  //this will save the signature once it has been trimmed
  handleClickToSaveSignature = () => {
    //POST_SIGNATURE action goes to the sagas with a generator function sendSignatureToDatabase
    this.setState({
      answers: {
        SIGNATURE_BUYER_1: this.sigPad.getTrimmedCanvas().toDataURL('image/PNG')
      },
    }, () => {
      this.props.dispatch({ type: 'SAVE_ANSWERS', payload: this.state });
    })

    swal({
      title: "Signature Saved!",
      text: "",
      icon: "success",
      button: "Ok",
    }).then(() => {
      this.props.history.push('/signed-documents')
    })
  }

  render() {
    const { SIGNATURE_BUYER_1 } = this.state;
    return (
      <>
      {/* <div>
                taco
            </div> */}
      <ThemeProvider theme={theme}>
        <div>
          <MediaQuery query="(orientation:portrait)">
            <div className="sig-canvas">
              <SignatureCanvas penColor="black"
                canvasProps={{ width: 390, height: 525, className: 'sigCanvas' }}
                ref={(ref) => { this.sigPad = ref }} />
              {
                SIGNATURE_BUYER_1 ? <img src={SIGNATURE_BUYER_1} alt="" /> : null
              }
            </div>
          </MediaQuery>
          <MediaQuery query="(orientation:landscape)">
            <div className="sig-canvas">
              <SignatureCanvas penColor="black"
                canvasProps={{ width: 800, height: 390, className: 'sigCanvas' }}
                ref={(ref) => { this.sigPad = ref }} />
              {
                SIGNATURE_BUYER_1 ? <img src={SIGNATURE_BUYER_1} alt="" /> : null
              }
            </div>
          </MediaQuery>
          <center>
            <Container style={styles.Container}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.returnToReview}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.clearSig}
                  >
                    Clear
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    style={styles.button}
                    onClick={this.handleClickToSaveSignature}
                  >
                    Confirm
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </center>
        </div>
      </ThemeProvider>
      </>
    )
  }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(Signature); 
