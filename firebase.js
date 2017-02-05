
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
    database.ref('/Cities').once('value').then(function (snapshot) {
        var res = snapshot.val();
        for (var ele in res) {
            if (ele == "San Jose") {
                console.log(res[ele]);
                for(var element in res[ele]){
                    console.log(element);
                };
                var places = [res[ele][Object.keys(res[ele])[0]]];
                console.log(places);
            }

        }
    })
}


scrape();
