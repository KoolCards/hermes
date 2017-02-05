// JavaScript source code
var config = {
    apiKey: "AIzaSyDAMLeODfBpBozqLcPSZ1EmzDRiL5ifbQQ",
    databaseURL: "https://hermes-d8ba0.firebaseio.com/"
};

firebase.initializeApp(config);

var database = firebase.database();


document.getElementById('buttonthing').onclick(add());

function add() {
    var name = document.getElementById('patientname').textContent;
    var severe = ocument.getElementById('severity').textContent;

    database.ref('/Patients/San Jose').set({
        name:severe
    })
}




