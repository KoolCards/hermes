var place = new Object();
var coord = new Object();
var distance = [];
var place = "";
var pos = {};
var city = "";
var currDist = 999999;
var coordStorage = {};
var counter = 0;
var sigFinal = [];
var distFinal = [];
var tempStoring = [];
var printed = false;
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDAMLeODfBpBozqLcPSZ1EmzDRiL5ifbQQ",
    databaseURL: "https://hermes-d8ba0.firebaseio.com/"
};

firebase.initializeApp(config);

var database = firebase.database();

var name = "Vinay";
var places = [];


function scrape() {
    database.ref('/Cities').once('value').then(function (snapshot) {
        var res = snapshot.val();
        
        for (var ele in res) {
            if (ele == "San Jose") {
                console.log(res[ele]);
                for (var element in res[ele]) {
                    places.push(element);
                    getCoord(places[counter]);
                    counter = counter + 1;
                };
                
            }

        }
    })
}

scrape();

function getLevels () {
    database.ref('/Patients').once('value').then(function (snapshot) {
        var minNumber
        var res = snapshot.val();
        var signficance = 0;
        var counter1 = 0;
        for (var ele in res) {
            if (ele == "San Jose") {
                for (var element in res[ele]) {
                    significance = 0;
                    for (var user in res[ele][element]) {
                        var temp_store = res[ele][element][user];
                        console.log(temp_store);
                        signficance = temp_store * 10 + signficance;
                    }
                    sigFinal[counter1] = signficance;
                    console.log(sigFinal[counter1] + " " + counter1);
                    getBeds();
                    counter1++;
                };
               
            }

        }
    })
}
var counter6 = 0;
function getBeds() {
    database.ref('/Cities').once('value').then(function (snapshot) {
        var res = snapshot.val();
        for (var ele in res) {
            if (ele == "San Jose") {
                console.log(res[ele]);
                var counter6 = 0;
                for (var element in res[ele]) {
                    tempStoring[counter6] = res[ele][element];
                    console.log(tempStoring[counter6] + " " + counter6);
                    counter6++;
                };
            }
            scrapefinal();

        }
    })
}
var button_my_button = "#mainbutton";
var finalStore = [];
var hostName;
function scrapefinal() {
    
    var temp;
    var prevTemp = 9999;
    for (i = 0; i < 5; i++) {
        temp = sigFinal[i] / tempStoring[i] + console.log(distance[i]);
        
        finalStore[i] = temp;
        hostName = i;
    }
    finalStore.sort;
    console.log(finalStore);
    console.log(places[hostName]);
    $(button_my_button).click(function(){
        if (!printed) {
            alert("Our reccomended hospital is " + places[hostName]);
            printed = true;
        }
    })
};


function getCoord(name) {
  jQuery.getJSON({
        type: "GET",
        dataType: "json",
        'Access-Control-Allow-Origin':'*',
        url: "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + name + "&key=AIzaSyDtlPxyaQJlv02nIWYPjw-EFLOkOtbURsg",
        success: function (data) {
            var result = (data.results[0].geometry.location);
            coord.lat = result.lat;
            coord.long = result.lng
            console.log(result.lat);
            console.log(result.lng);
            getTimeDistance(coord.lat, coord.long, 37.3382, 121.8863);
           
        }
  });
};

var charCheck = 0;
function getTimeDistance(location1Lat, location1Long, location2Lat, location2Long) {
    jQuery.getJSON({
        type: "GET",
        dataType: "json",
        'Access-Control-Allow-Origin': '*',
        url: "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + location1Lat + "," + location1Long + "&destinations=" + location2Lat + "%2C-" + location2Long + "&key=AIzaSyDtlPxyaQJlv02nIWYPjw-EFLOkOtbURsg",
        success: function (data) {
 
            distance[charCheck] = (data.rows[0].elements[0].duration.value);
            console.log(distance[charCheck]);
            charCheck++;
            getLevels();
           
        }
    });
};

function convertPlace(latitude, longtitude) {
    jQuery.getJSON({
        type: "GET",
        dataType: "json",
        'Access-Control-Allow-Origin': '*',
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + longtitude + "&key=AIzaSyDtlPxyaQJlv02nIWYPjw-EFLOkOtbURsg",
        success: function (data) {
            var result = (data);
            place = result;
        }
    });
};

function initMap() {

    if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function (position) {

            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        }, function () {
           
        });
    }

    else {
        console.log("Im aids");
    }
}

function getCity(cityInput) {
    var size = places.size;
    
 }

getCity("name");