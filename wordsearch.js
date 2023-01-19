const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (let l of horizontalJoin) {
    if (l.search(word) > -1) {
      return true
    }
  }
  return false
}

module.exports = wordSearch