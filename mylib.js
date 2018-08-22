var a = 33
var b = 4

function add(x, y) {
  return x + y
}

module.exports = {
  func: add,
  sum: add(a, b)
}
