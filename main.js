const keys = require('./key').keys
const https = require('https');
const axios = require('axios')


axios
  .post(`https://api.apptivo.com/app/dao/v6/customers?a=save&customerData=${keys.sampleData}&apiKey=${keys.api}&accessKey=${keys.access}`, sampleData)
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
