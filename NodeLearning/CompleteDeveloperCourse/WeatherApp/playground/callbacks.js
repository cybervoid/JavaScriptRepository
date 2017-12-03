var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Chuck'
  };
  //simulate a delay
  setTimeout(() => {
    callback(user);
  }, 3000);
};
uid = 10;


getUser(uid, (user) => {
//do something with data
  console.log(user);
});
