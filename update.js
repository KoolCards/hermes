// JavaScript source code
var config = {
    apiKey: "AIzaSyDAMLeODfBpBozqLcPSZ1EmzDRiL5ifbQQ",
    databaseURL: "https://hermes-d8ba0.firebaseio.com/"
};

firebase.initializeApp(config);

var database = firebase.database();
var hospital;
var addition;

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}


function determine() {
    hospital = window.location.search;
    hospital = hospital.substring(7);
    hospital = hospital.replace('+', ' ');
    hospital = hospital.replace('+', ' ');
    hospital = hospital.replace('+', ' ');
    hospital = hospital.replace('+', ' ');
    window.setTimeout(rename, 1000);
    
    console.log(hospital);
};
determine();

function rename() {
    document.getElementById('title').innerHTML = hospital;
}



function scrape2(name) {
    console.log(hospital);
    database.ref('/Patients').once('value').then(function (snapshot) {
        var res = snapshot.val();
        for (var ele in res) {
            if (ele == "San Jose") {
                console.log(res[ele]);
                var count = 0;
                for (var element in res[ele]) {
                    if (element == hospital) {
                        for (var user in res[ele][element]) {
                            var div = document.createElement('li');
                            div.className = 'li';
                            div.id = "div" + count;
                            var text = res[ele][element][user];
                            div.appendChild(document.createTextNode(user + " " + "(" + text + ")"));
                            document.getElementById('list').appendChild(div);
                            count++;
                        }
                    }
                    
                };
            }
            console.log(ele);
        }
    })
}

scrape2();