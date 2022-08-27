const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://us1.locationiq.com/v1/search?key=pk.24dea6ff4f23788d54f69a3ef47746fc&q=' + address + '&format=json'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.error === "Unable to geocode") {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body[1].lat,
                longitude: response.body[1].lon,
                location: response.body[1].display_name
            })
        }
    })
}

module.exports = geocode