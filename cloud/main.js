Parse.Cloud.define('sendChatPush', function(request, response) {
  const query = new Parse.Query(Parse.Installation);
  query.equalTo('device_id', request.params.device_id);
  query.equalTo('chat_notific', true);
  Parse.Push.send({
    where: query,
    data: {
      alert: request.params.message
    }
  },
  { useMasterKey: true }
  )
  .then(function() {
     response.success('success');
  }, function(error) {
console.log("***** Eror: "+ error) 
 });
});

Parse.Cloud.define('sendOrderPush', function(request, response) {
  const query = new Parse.Query(Parse.Installation);
  query.equalTo('device_id', request.params.device_id);
  Parse.Push.send({
    where: query,
    data: {
      alert: request.params.message
    }
  },
  { useMasterKey: true }
  )
  .then(function() {
     response.success('success');
  }, function(error) {
console.log("***** Eror: "+ error) 
 });
});

Parse.Cloud.define('sendPushAdmin', function(request, response) {
 const query = new Parse.Query(Parse.Installation);
 query.equalTo('device_id',"09120396076");
 Parse.Push.send({
   where: query,
   data: {
     alert: request.params.message
   }
 },
 { useMasterKey: true }
 )
 .then(function() {
    response.success('success');
 }, function(error) {
console.log("***** Eror: "+ error) 
});
});

Parse.Cloud.define("setDeviceToken", function(request, response) {
  var installationId = request.params.installationId;
  var deviceToken = request.params.deviceToken;

  var query = new Parse.Query(Parse.Installation);
  query.get(installationId, {useMasterKey: true}).then(function(installation) {
      console.log(installation);
      installation.set("deviceToken", deviceToken);
      installation.save(null, {useMasterKey: true}).then(function() {
          response.success(true);
      }, function(error) {
          response.error(error);
      })
  }, function (error) {
      console.log("this is my error"+error);
  })
  //console.log("hiiizz");
});