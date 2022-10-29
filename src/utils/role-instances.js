const roleInstances = (url) => {
  switch (url) {
  case 'https://static.wikia.nocookie.net/grandchase/images/e/ea/Type-Mage.png/revision/latest/scale-to-width-down/24':
    return 'Mage'

  case 'https://static.wikia.nocookie.net/grandchase/images/5/5a/Type-Ranged.png/revision/latest/scale-to-width-down/24':
    return 'Ranger'

  case 'https://static.wikia.nocookie.net/grandchase/images/5/5a/Type-Tank.png/revision/latest/scale-to-width-down/24':
    return 'Ranger'

  case 'https://static.wikia.nocookie.net/grandchase/images/5/5a/Type-Healer.png/revision/latest/scale-to-width-down/24':
    return 'Ranger'

  case 'https://static.wikia.nocookie.net/grandchase/images/5/5a/Type-Assault.png/revision/latest/scale-to-width-down/24':
    return 'Ranger'

  default:
    return 'Unknown'
  }
}

module.exports = roleInstances
