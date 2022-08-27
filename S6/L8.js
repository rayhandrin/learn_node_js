const request = require('request')

const geocodeURL =
    'https://us1.locationiq.com/v1/search?key=pk.24dea6ff4f23788d54f69a3ef47746fc&q=ciwaruga%2C%20bandung&format=json'

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else { // Ada modifikasi pada bagian else if, sebab output json dari API yang saya gunakan berbeda
        const place_name = response.body[1].display_name.slice(0, 18)
        const latitude = response.body[1].lat
        const longitude = response.body[1].lon
        console.log("This is " + place_name +
            ", with latitude: " + latitude +
            " and longitude: " + longitude)
    }
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}
geocode('Philadelphia', (data) => {
    console.log(data)
})