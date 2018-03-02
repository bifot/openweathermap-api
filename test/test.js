const { expect } = require('chai')
const Weather = require('../')

const api = new Weather(process.env.OPEN_WEATHER_MAP_TOKEN)

it('get weather by name', async () => {
  const response = await api.getWeather({
    q: 'London'
  })

  expect(response).to.be.a('object')
  expect(response.cod).eq(200)
})

it('get weather by coordinates', async () => {
  const response = await api.getWeather({
    lat: 51.51,
    lon: -0.13
  })

  expect(response).to.be.a('object')
  expect(response.cod).eq(200)
})

it('get weather by zip', async () => {
  const response = await api.getWeather({
    zip: '94040,us'
  })

  expect(response).to.be.a('object')
  expect(response.cod).eq(200)
})
