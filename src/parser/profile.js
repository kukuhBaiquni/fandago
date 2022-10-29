const parser_profile = ($) => {
  const result = []
  $('.pi-item.pi-group.pi-border-color').each((_, el) => {
    const parrent = $(el).find('.pi-item.pi-data.pi-item-spacing.pi-border-color')
    parrent.find('.pi-data-value.pi-font').each((index, elm) => {
      /**
       * Category
       * 4 Features
       * 6 Best in
       * 13 Family
       * 18 Alternative Name
       */
      if (index === 4 || index === 6 || index === 13 || index === 18) {
        const txt = [...$(elm).contents()]
          .filter((e) => $(e).text().trim()).map((e) => ({
            text: $(e).text().trim(),
            url: $(elm).find('a').attr('href') || '',
          }))
        result.push({ text: txt })
      } else {
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
