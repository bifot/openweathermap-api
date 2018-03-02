const rp = require('request-promise')

class OpenWeatherMap {
  constructor (key) {
    this.key = key
    this.baseUrl = 'https://api.openweathermap.org/data/2.5'
  }

  async getWeather (settings) {
    const { key, baseUrl } = this

    try {
      const response = await rp({
        baseUrl,
        url: '/weather',
        qs: {
          ...settings,
          appid: key
        },
        json: true
      })

      return response
    } catch (err) {
      throw err
    }
  }
}

module.exports = OpenWeatherMap
