const roleInstances = (url) => {
  switch (url) {
  case 'https://static.wikia.nocookie.net/grandchase/images/c/cc/Rank-SS.png/revision/latest':
    return 'Assault'

  case 'https://static.wikia.nocookie.net/grandchase/images/e/ea/Type-Mage.png/revision/latest/scale-to-width-down/24':
    return 'Mage'

  default:
    return 'Unknown'
  }
}

module.exports = roleInstances
