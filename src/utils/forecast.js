const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f00cb7097c2c6c48ecf2a7194fa4e738&query=' + latitude + ',' + longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(
                undefined,
                'It is currently ' + body.current.temperature + ' degrees out. There is a ' +
                body.current.precip + '% chance of precipitation.'
            );
        }
    });
};

module.exports = forecast;
