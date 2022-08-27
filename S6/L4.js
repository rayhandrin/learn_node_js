const request = require('request')
const url =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bandung?unitGroup=metric&include=current&key=RUNM2VAGTW8AW7B4UTGYQUFB6&contentType=json'
// API yang digunakan adalah alternatif dari Dark Sky API
// sehubungan dengan telah di-shut down-nya service mereka

request({ url: url }, (error, response) => {
    // Parse the response body from JSON string into JavaScript object
    const data = JSON.parse(response.body)
    // Will print the current temperature to the console

    console.log(data.currentConditions.conditions + ". " + "It is currently " +
        data.currentConditions.temp + " degrees with " +
        data.currentConditions.precip + " precipitation.")
})