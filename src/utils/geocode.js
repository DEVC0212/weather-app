const request = require('request')

const geocode = (city, callback) => {
    const url = 'https://api.geoapify.com/v1/geocode/search?text='+encodeURIComponent(city)+'&apiKey=d2fa543fd6684102915fcedfb4bdde3f';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].properties.lat,
                longitude: body.features[0].properties.lon,
                location: body.features[0].properties.city
            })
        }
    })
}

module.exports = geocode