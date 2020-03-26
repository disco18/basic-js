module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let result = []
  const len = members.length - 1
  for (let i = len; i >= 0; i--) {
    if (typeof members[i] !== 'string') continue
    const word = members[i]
    const char = word.replace(/\s|\t/g, '').substring(0, 1).toLocaleUpperCase()
    result.push(char)
  }
  return result.sort().join('')
};