const coords  = require("./coord_helpers.js")
const purchaseCoords = (answers) => {

  // page#coords is an array of objects representing coordinates.
  // page1coords = coordinates for Page 1
  // Each object has three keys: text (column from database), x & y coordinates
  // If the column is a boolean, use the coords.boolCoords() function below and then
  // push it to the page#coords array.
  var page1coords = [
    { text: answers.BUYER_1, x_coord: 125, y_coord: 670 },
    { text: answers.DATE, x_coord: 390, y_coord: 704 },
    { text: answers.L6A, x_coord: 75, y_coord: 620 },
    { text: answers.L6B, x_coord: 425, y_coord: 620 },
    { text: answers.L7B, x_coord: 300, y_coord: 600 },
    { text: answers.L12, x_coord: 140, y_coord: 523 },
    { text: answers.L13A, x_coord: 105, y_coord: 507 },
    { text: answers.L13B, x_coord: 375, y_coord: 507 },
    { text: answers.L14, x_coord: 250, y_coord: 487 },
    { text: answers.L29, x_coord: 75, y_coord: 302 },
    { text: answers.L32, x_coord: 75, y_coord: 260 },
    { text: answers.L34, x_coord: 350, y_coord: 226 },
    { text: answers.L35, x_coord: 75, y_coord: 210 },
    { text: answers.L37, x_coord: 95, y_coord: 180 },
    { text: answers.L39, x_coord: 95, y_coord: 150 },
    { text: answers.L40, x_coord: 95, y_coord: 133 },
    { text: answers.L41, x_coord: 95, y_coord: 104 },
    { text: answers.L45, x_coord: 200, y_coord: 55 },
  ]
  page1coords.push(coords.checkCoords(answers.L7A, 282, 598))

  var page2coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L55, x_coord: 150, y_coord: 570 },
    { text: answers.L62B, x_coord: 130, y_coord: 463 },
    { text: answers.L63, x_coord: 545, y_coord: 447 },
    { text: answers.L64, x_coord: 310, y_coord: 430 },
    { text: answers.L77, x_coord: 125, y_coord: 225 },
  ]
  page2coords.push(coords.boolCoords(answers.L49, 185, 670, 25))
  page2coords.push(coords.boolCoords(answers.L53, 65, 605, 130))
  page2coords.push(coords.boolCoords(answers.L54, 112, 587, 47))
  page2coords.push(coords.checkCoords(answers.L57, 65, 537))
  page2coords.push(coords.checkCoords(answers.L58, 65, 522))
  page2coords.push(coords.checkCoords(answers.L59, 65, 508))
  page2coords.push(coords.checkCoords(answers.L60, 65, 495))
  page2coords.push(coords.checkCoords(answers.L61, 65, 480))
  page2coords.push(coords.checkCoords(answers.L62A, 65, 463))
  page2coords.push(coords.checkCoords(answers.L70, 65, 336))
  page2coords.push(coords.boolCoords(answers.L73, 83, 295, 125))
  page2coords.push(coords.checkCoords(answers.L76, 65, 242))

  var page3coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L118, x_coord: 75, y_coord: 322 },
    { text: answers.L133, x_coord: 310, y_coord: 120 },

  ]
  page3coords.push(coords.checkCoords(answers.L114, 65, 388))
  page3coords.push(coords.checkCoords(answers.L115, 65, 370))
  page3coords.push(coords.boolCoords(answers.L127, 65, 207, 58))

  var page4coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L141, x_coord: 435, y_coord: 675 },
    { text: answers.L145A, x_coord: 78, y_coord: 612 },
    { text: answers.L146, x_coord: 78, y_coord: 595 },
    { text: answers.L156, x_coord: 280, y_coord: 445 },
    { text: answers.L160B, x_coord: 90, y_coord: 364 },
    { text: answers.L161B, x_coord: 90, y_coord: 348 },
  ]
  page4coords.push(coords.boolCoords(answers.L145B, 318, 610, 83))
  page4coords.push(coords.boolCoords(answers.L159, 93, 390, 25))
  page4coords.push(coords.checkCoords(answers.L160A, 65, 364))
  page4coords.push(coords.checkCoords(answers.L161A, 65, 345))
  page4coords.push(coords.boolCoords(answers.L170, 410, 212, 58))
  page4coords.push(coords.boolCoords(answers.L172, 185, 178, 25))
  page4coords.push(coords.boolCoords(answers.L178, 93, 93, 47))

  var page5coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L184, x_coord: 425, y_coord: 673 },
    { text: answers.L192, x_coord: 210, y_coord: 565 },
    { text: answers.L215E, x_coord: 430, y_coord: 212 },
    { text: answers.L217E, x_coord: 398, y_coord: 175 },
  ]
  page5coords.push(coords.checkCoords(answers.L198, 65, 460))
  page5coords.push(coords.checkCoords(answers.L201, 65, 420))
  page5coords.push(coords.checkCoords(answers.L210, 65, 294))
  page5coords.push(coords.checkCoords(answers.L215A, 134, 210))
  page5coords.push(coords.checkCoords(answers.L215B, 324, 210))
  page5coords.push(coords.checkCoords(answers.L215C, 360, 210))
  page5coords.push(coords.checkCoords(answers.L215D, 404, 210))
  page5coords.push(coords.checkCoords(answers.L217A, 131, 172))
  page5coords.push(coords.checkCoords(answers.L217B, 298, 172))
  page5coords.push(coords.checkCoords(answers.L217C, 333, 172))
  page5coords.push(coords.checkCoords(answers.L217D, 375, 172))
  page5coords.push(coords.boolCoords(answers.L219, 462, 133))


  var page6coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L251, x_coord: 365, y_coord: 280 },
    { text: answers.L252, x_coord: 365, y_coord: 260 },
    { text: answers.L258B, x_coord: 125, y_coord: 175 },
    { text: answers.L264, x_coord: 125, y_coord: 93 },
    { text: answers.L266, x_coord: 125, y_coord: 57 },
  ]
  page6coords.push(coords.boolCoords(answers.L226, 65, 675, 115))
  page6coords.push(coords.boolCoords(answers.L228, 65, 637, 376))
  page6coords.push(coords.boolCoords(answers.L231, 65, 585, 136))
  page6coords.push(coords.boolCoords(answers.L233, 65, 547, 136))
  page6coords.push(coords.boolCoords(answers.L239, 396, 453))
  page6coords.push(coords.boolCoords(answers.L250, 400, 300, 25))
  page6coords.push(coords.checkCoords(answers.L257A, 65, 190))
  page6coords.push(coords.checkCoords(answers.L257B, 65, 190))
  page6coords.push(coords.checkCoords(answers.L257C, 360, 190))
  page6coords.push(coords.checkCoords(answers.L257D, 480, 190))
  page6coords.push(coords.checkCoords(answers.L258A, 65, 173))


  var page7coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L271B, x_coord: 120, y_coord: 664 },
  ]
  page7coords.push(coords.checkCoords(answers.L270, 65, 677))
  page7coords.push(coords.checkCoords(answers.L271A, 65, 660))


  var page8coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
  ]
  page8coords.push(coords.checkCoords(answers.L359, 313, 155))
  page8coords.push(coords.checkCoords(answers.L360, 215, 142))

  var page9coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L389B, x_coord: 280, y_coord: 348 },
    { text: answers.L390, x_coord: 200, y_coord: 320 },
    { text: answers.L394A, x_coord: 68, y_coord: 242 },
    { text: answers.L395, x_coord: 68, y_coord: 215 },
    { text: answers.L396A, x_coord: 68, y_coord: 188 },
    { text: answers.L397, x_coord: 68, y_coord: 161 },
    { text: answers.COMPANY_1, x_coord: 70, y_coord: 218 },
  ]
  page9coords.push(coords.boolCoords(answers.L371A, 130, 654, 35))
  page9coords.push(coords.boolCoords(answers.L371B, 275, 654, 35))
  page9coords.push(coords.boolCoords(answers.L373, 110, 621, 50))
  page9coords.push(coords.boolCoords(answers.L377, 118, 555, 57))
  page9coords.push(coords.boolCoords(answers.L379, 215, 518, 27))
  page9coords.push(coords.checkCoords(answers.L388A, 65, 370))
  page9coords.push(coords.boolCoords(answers.L388B, 370, 370, 58))
  page9coords.push(coords.boolCoords(answers.L389A, 83, 345, 55))
  page9coords.push(coords.checkCoords(answers.L391, 65, 300))
  page9coords.push(coords.checkCoords(answers.L394B, 282, 242))
  page9coords.push(coords.checkCoords(answers.L394C, 363, 242))
  page9coords.push(coords.checkCoords(answers.L394D, 445, 242))
  page9coords.push(coords.checkCoords(answers.L394E, 513, 242))
  page9coords.push(coords.checkCoords(answers.L396B, 282, 186))
  page9coords.push(coords.checkCoords(answers.L396C, 363, 186))
  page9coords.push(coords.checkCoords(answers.L396D, 445, 186))
  page9coords.push(coords.checkCoords(answers.L396E, 513, 186))


  var page10coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: "sig_path", x_coord: 380, y_coord: 448 },
  ]
  page10coords.push(coords.checkCoords(answers.L403, 65, 652))
  page10coords.push(coords.checkCoords(answers.L404, 65, 632))

  var page11coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 708 },
    { text: answers.L454, x_coord: 110, y_coord: 584 },
  ]

  var page12coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 708 },
    { text: "sig_path", x_coord: 375, y_coord: 483 },
    { text: "sig_path", x_coord: 395, y_coord: 135 },
  ]
  page12coords.push(coords.boolCoords(answers.L494, 155, 578, 25))

  var page13coords = [
    { text: "sig_path", x_coord: 56, y_coord: 135 },
    {text:answers.DATE, x_coord: 225 , y_coord: 134},
  ]

  return [page1coords, page2coords, page3coords, page4coords, page5coords, page6coords, page7coords, page8coords, page9coords, page10coords, page11coords, page12coords, page13coords]

}

module.exports = purchaseCoords
