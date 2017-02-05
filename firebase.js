
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyDAMLeODfBpBozqLcPSZ1EmzDRiL5ifbQQ",
    databaseURL: "https://hermes-d8ba0.firebaseio.com/"
};
  
firebase.initializeApp(config);

var database = firebase.database();

var name = "Vinay";

function writeUserData(name) {
  database.ref("/test123").set({
    username: name
  });
}

writeUserData(name);

function scrape(){
    database.ref('/Cities').once('value').then(function(snapshot) {
        console.log(snapshot.val())
    })
  };

scrape();