const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://us1.locationiq.com/v1/search?key=pk.24dea6ff4f23788d54f69a3ef47746fc&q=' + address + '&format=json'

    request({ url: url }, (error, response) => {
        const data = JSON.parse(response.body)

        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.error === "Unable to geocode") {
            callback('Unable to find location. Try another search.', undefined)
        }
    })
}

const forecast = (latitude, longitude, callback) => {
    const url1 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + latitude + '%2C' + longitude + '?unitGroup=metric&include=current&key=RUNM2VAGTW8AW7B4UTGYQUFB6&contentType=json'

    request({ url: url1, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to for services!', undefined)
        }

        console.log('We are at ' + response.body.currentConditions.resolvedAddress + '. ' +
            response.body.currentConditions.conditions + ". " + "It is currently " +
            response.body.currentConditions.temp + " degrees with " +
            response.body.currentConditions.precip + " precipitation.")
    })
}

module.exports = geocode