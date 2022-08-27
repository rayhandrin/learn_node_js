const geocode = require('./my_module')

geocode('Jakarta', (error, data) => {
    if (error) {
        return console.log(error)
    }

    forecast(data[0].latitude, data[0].longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})