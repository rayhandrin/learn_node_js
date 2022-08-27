const request = require('request')
const url =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bandung?unitGroup=metric&include=current&key=RUNM2VAGTW8AW7B4UTGYQUFB6&contentType=json'
// API yang digunakan adalah alternatif dari Dark Sky API
// sehubungan dengan telah di-shut down-nya service mereka

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.currentConditions.conditions + ". " + "It is currently " +
        response.body.currentConditions.temp + " degrees with " +
        response.body.currentConditions.precip + " precipitation.")
})