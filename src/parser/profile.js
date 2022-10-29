const parser_profile = ($) => {
  const result = {}
  $('.pi-item.pi-group.pi-border-color').each((_, el) => {
    const parrent = $(el).find('.pi-item.pi-data.pi-item-spacing.pi-border-color')
    parrent.find('.pi-data-value.pi-font').each((index, elm) => {
      /**
       * Category
       * 4 Features
       * 6 Best in
       */
      if (index === 4 || index === 6) {
        const txt = [...$(elm).contents()]
          .filter((e) => $(e).text().trim()).map((e) => ({
            text: $(e).text().trim(),
            url: $(elm).find('a').attr('href') || '',
          }))
        result.push({ text: txt })
      } else {
        if (index === 0) result.tier = $(elm).find('a').attr('href')
        if (index === 1) result.type = $(elm).find('a').attr('href')
        result.push({
          text: $(elm).text(),
          url: $(elm).find('a').attr('href'),
        })
      }
    })
  })

  return result
}

module.exports = parser_profile
