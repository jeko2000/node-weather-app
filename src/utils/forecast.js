const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ab551dcafae5ea782b52fe7fec820ef3&units=f&query=' + lat + ',' + lon
    request({url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            const forecastData = body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees.'
            callback(undefined, forecastData)
        }
    })
}

module.exports = forecast
