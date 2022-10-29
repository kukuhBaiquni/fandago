/* eslint-disable no-undef */

const express = require('express')
const cheerio = require('cheerio')
const API = require('../helpers/API')
const parser_profile = require('../parser/profile')

const router = express.Router()

router.get('/', async (req, res) => {
  const getData = async () => {
    try {
      const html = await API({})
      const $ = cheerio.load(html)
      /**
     * Get Character Name
     */
      const charname = $('.pi-item.pi-item-spacing.pi-title.pi-secondary-background').text()

      /**
     * Get Basic Information
     */
      const profile = parser_profile($)
      return {
        charname,
        profile,
      }
    } catch (error) {
      return getData()
    }
  }
  const data = await getData()
  res.status(200).json({
    message: 'PONG!',
    data,
  })
})

module.exports = router
