const request = require('request')
const url_geocode = 'https://us1.locationiq.com/v1/search?key=pk.24dea6ff4f23788d54f69a3ef47746fc&q=California&format=json'
// API yang digunakan adalah alternatif dari Dark Sky API
// sehubungan dengan telah di-shut down-nya service mereka

request({ url: url_geocode, json: true }, (error, response) => {
    const latitude = response.body[0].lat
    const longitude = response.body[0].lon
    const place_name = response.body[0].display_name
    const url_weather_forecast = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + latitude + '%2C' + longitude + '?unitGroup=metric&include=current&key=RUNM2VAGTW8AW7B4UTGYQUFB6&contentType=json'

    request({ url: url_weather_forecast, json: true }, (error, response) => {
        console.log('We are at ' + place_name + '. ' +
            response.body.currentConditions.conditions + ". " + "It is currently " +
            response.body.currentConditions.temp + " celcius degrees with " +
            response.body.currentConditions.precip + " precipitation.")
    })
})