var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Chuck'
  };
  callback(user);
};
uid = 10;


getUser(uid, (user) => {
//do something with data
  console.log(user);
});
