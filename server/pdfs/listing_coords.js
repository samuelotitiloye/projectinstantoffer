const coords = require("./coord_helpers.js")
const listingCoords = (answers) => {

  // page#coords is an array of objects representing coordinates.
  // page1coords = coordinates for Page 1
  // Each object has three keys: text (column from database), x & y coordinates
  // If the column is a boolean, use the coords.boolCoords() function below and then
  // push it to the page#coords array.
  var page1coords = [
    { text: "7", x_coord: 428, y_coord: 670 },
    { text: answers.DATE, x_coord: 390, y_coord: 689 },
    { text: answers.L3, x_coord: 350, y_coord: 652 },
    { text: answers.L4, x_coord: 200, y_coord: 630 },
    { text: answers.BUYER_1, x_coord: 120, y_coord: 597 },
    { text: answers.L7, x_coord: 140, y_coord: 577 },
    { text: answers.L8A, x_coord: 175, y_coord: 551 },
    { text: answers.L8C, x_coord: 475, y_coord: 551 },
    { text: answers.L12, x_coord: 340, y_coord: 487 },
    { text: answers.L13, x_coord: 105, y_coord: 468 }
  ]
  page1coords.push(coords.boolCoords(answers.L41, 507, 93))

  var page2coords = [
    { text: answers.L3, x_coord: 160, y_coord: 699 },
    { text: answers.L7, x_coord: 75, y_coord: 300 },
  ]

  page2coords.push(coords.boolCoords(answers.L54, 507, 575))
  page2coords.push(coords.boolCoords(answers.L63, 507, 454))
  page2coords.push(coords.boolCoords(answers.L71, 507, 345))
  page2coords.push(coords.boolCoords(answers.L72, 245, 321, 36))
  page2coords.push(coords.boolCoords(answers.L73, 326, 297, 38))


  var page3coords = [
    { text: answers.L3, x_coord: 160, y_coord: 699 },
    { text: answers.L115, x_coord: 300, y_coord: 400},
    { text: answers.L118, x_coord: 355, y_coord: 358},
    { text: answers.L119, x_coord: 80, y_coord: 340},
    { text: answers.L121, x_coord: 100, y_coord: 306},
    { text: answers.L131, x_coord: 110, y_coord: 173},
  ]

  var page4coords = [
    { text: answers.L3, x_coord: 160, y_coord: 699 },
    { text: answers.L148B, x_coord: 90, y_coord: 606 },
    { text: answers.L148C, x_coord: 275, y_coord: 606 },
    { text: answers.L150B, x_coord: 90, y_coord: 577 },
    { text: answers.L150C, x_coord: 275, y_coord: 577 },
    { text: answers.L152B, x_coord: 120, y_coord: 544 },
    { text: "x", x_coord: 65, y_coord: 370 },
    { text: "x", x_coord: 65, y_coord: 354 },
    { text: answers.L165A, x_coord: 80, y_coord: 333 },
  ]

  page4coords.push(coords.boolCoords(answers.L146, 254, 642, 47))
  page4coords.push(coords.boolCoords(answers.L148A, 20, 604))
  page4coords.push(coords.boolCoords(answers.L150A, 20, 575))
  page4coords.push(coords.boolCoords(answers.L152A, 20, 544))
  page4coords.push(coords.boolCoords(answers.L163, 65, 370))
  page4coords.push(coords.boolCoords(answers.L164, 65, 354))
  page4coords.push(coords.boolCoords(answers.L175, 260, 178, 28))


  var page5coords = [
    { text: answers.L3, x_coord: 160, y_coord: 701 },
    { text: answers.COMPANY, x_coord: 200, y_coord: 472 },
    { text: "sig_path", x_coord: 375, y_coord: 445},
    { text: answers.DATE, x_coord: 375, y_coord: 415 },
    { text: "x", x_coord: 65, y_coord: 524 },
    { text: "x", x_coord: 65, y_coord: 498 },
  ]
  page5coords.push(coords.boolCoords(answers.L196, 20, 524))
  page5coords.push(coords.boolCoords(answers.L198, 65, 498))

  var page6coords = [
    { text: answers.L3, x_coord: 160, y_coord: 702 },
    { text: answers.L237, x_coord: 110, y_coord: 621 },
    { text: "sig_path", x_coord: 420, y_coord: 492 },
    { text: answers.DATE, x_coord: 340, y_coord: 454 },
    { text: answers.BUYER_1_ADDRESS, x_coord: 340, y_coord: 415 },
    { text: answers.BUYER_1_PHONE, x_coord: 340, y_coord: 377 },
    { text: answers.BUYER_1_EMAIL, x_coord: 340, y_coord: 337 },
  ]

  var page7coords = [
    { text: "sig_path", x_coord: 50, y_coord: 134 },
    { text: answers.DATE, x_coord: 225 , y_coord: 134 },
  ]
  return [page1coords, page2coords, page3coords, page4coords, page5coords, page6coords, page7coords]
}

module.exports = listingCoords
