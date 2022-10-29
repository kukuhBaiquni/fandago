const axios = require('axios')

const baseURL = 'https://grandchase.fandom.com/wiki/Elesis/Dimensional_Chaser'

const API = async (props) => {
  const {
    path,
  } = props
  const timeout = 1000 * 60 * 60
  const config = {
    timeout,
    baseURL,
    url: path || '',
    method: 'GET',
    retry: 3,
  }

  const response = await axios(config)
  return response.data
}

module.exports = API
