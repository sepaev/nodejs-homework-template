const getMaxId = contacts => {
  let maxId = 0
  contacts.forEach(({ id }) => {
    if (id > maxId) maxId = id
  })
  return maxId
}

module.exports = getMaxId
