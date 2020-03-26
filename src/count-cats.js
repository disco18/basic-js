module.exports = function countCats(matrix) {
  if (!matrix.length) return 0
  const result = matrix.join(',').split(',').filter(elem => /^\^\^$/.test(elem))
  return result.length
}