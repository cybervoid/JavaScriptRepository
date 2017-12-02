console.log('Starting app');


setTimeout(() => {
  console.log("inside callback timeout function")
}, 2000); //timeout after 2 seconds

setTimeout(() => {
  console.log("2nd set timeout")
}, 0); //timeout after 2 seconds

console.log('finishing up');
