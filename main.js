const keys = require('./key').keys
const https = require('https');

// const options = {
//     host: 'https://api.apptivo.com',
//     path: `app/dao/v6/contacts?a=getConfigData&apiKey=${keys.api}&accessKey=${keys.access}`
//   };

https.get(`https://api.apptivo.com/app/dao/v6/contacts?a=getConfigData&apiKey=${keys.api}&accessKey=${keys.access}`, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
