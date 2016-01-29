/*global Twilio*/
// The variables was to find the id's from HTML and make it work by using the get element by id. 
var phoneNum = document.getElementById("phoneNum");
var texting = document.getElementById("texting");
var send = document.getElementById("send");
var drop = document.getElementById("drop");
var receive = document.getElementById("receive");
// This was to make the send button work. 
send.addEventListener("click", function(){

// This was to make the drop down value work    
    if (drop.value == "callAndSay"){
        Twilio.callAndSay(phoneNum.value, texting.value);
    }
    else if (drop.value == "sendMessage"){
        Twilio.sendMessage(phoneNum.value, texting.value);
    }
    else if (drop.value == "callAndPlay"){
        Twilio.callAndPlay(phoneNum.value, texting.value);
    }
});

// This was to make the user be able to receive messages.  

Twilio.listenForMessages(function (msg) {
     receive.innerHTML += msg.body + '<br>';
});