const geocode = require('./my_module')

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})