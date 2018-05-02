  var FCM = require('fcm-node');
    var serverKey = 'AAAAsLWdkkE:APA91bFsQG7RzgaAglL-6km5vj0xgzHemlHsO8_co8x3sCbbVVm4zYJGOpmjSnEJ7ccBN4azLqHcSOh9GIfjS-WKnr3LTguivbpjCguIPu9SsC8QGqMs3E39N8AjOZppWsslfFtb0bF_'; //put your server key here
    var fcm = new FCM(serverKey);

    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: '/topics/topicExample', 
        
        notification: {
            title: 'Title of your push notification', 
            body: 'Body of your push notification' 
        },
        
        data: {  //you can send only notification or only data(or include both)
            my_key: 'my value',
            my_another_key: 'my another value'
        }
    };
    
    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });