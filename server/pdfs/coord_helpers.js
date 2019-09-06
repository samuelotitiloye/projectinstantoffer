// Function to handle booleans. Will place the X in the correct spot. If the
// column = false, the function adds the adjustment to the x_coord to push the X
// to the right box. If the adjustment is wrong, change the number.
const boolCoords = (bool, x_coord, y_coord, adjustment = 45) => {
  if (bool === null) {
    return { text: null }
  } else {
    if (!bool) {
      x_coord += adjustment
    }
    return { text: "X", x_coord: x_coord, y_coord: y_coord }
  }
}

const checkCoords = (bool, x_coord, y_coord) => {
  if (bool === null) {
    return { text: null }
  } else if (bool) {
    return { text: "X", x_coord: x_coord, y_coord: y_coord }
  } else {
    return { text: "" }
  }
}

module.exports = {
  boolCoords: boolCoords,
  checkCoords: checkCoords
}
