const request = require('request');
const yargs = require('yargs');
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .argv;

console.log(argv);
u = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ encodeURIComponent(argv.a)+'philadelphia';
console.log(u);
request({
  url: u,
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(response, undefined, 2));
  //console.log(`Address: ${body.results[0].formatted_address}`);
});
