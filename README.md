# Open Weather Map

API for openweathermap.com

## Install

```sh
$ npm i openweathermap-api -S
```

## Tests

```sh
$ npm test
```

## Usage

```javascript
// get weather by name
await api.getWeather({
  q: 'London'
})

// get weather by coordinates
await api.getWeather({
  lat: 51.51,
  lon: -0.13
})

// get weather by zip
await api.getWeather({
  zip: '94040,us'
})
```

## License

MIT.
