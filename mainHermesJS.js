<<<<<<< HEAD
var place = new Object();
=======
var coord = new Object();
var distance = new Object();
var place = "";
var pos = {};
<<<<<<< HEAD
var city = "";
=======
>>>>>>> origin/master
>>>>>>> origin/master

function getCoord(name) {
  jQuery.getJSON({
        type: "GET",
        dataType: "json",
        'Access-Control-Allow-Origin':'*',
        url: "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + name + "&key=AIzaSyAMOv2esR9diq2Dvq0s20ugZGLDWzmbA7Y",
        success: function (data) {
            var result = (data.results[0].geometry.location);
            coord.lat = result.lat;
            coord.long = result.lng
            console.log(result.lat);
            console.log(result.lng);
        }
  });
};


function getTimeDistance(location1Lat, location1Long, location2Lat, location2Long) {
    jQuery.getJSON({
        type: "GET",
        dataType: "json",
        'Access-Control-Allow-Origin': '*',
        url: "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + location1Lat + "," + location1Long + "&destinations=" + location2Lat + "%2C" + location2Long + "&key=AIzaSyAMOv2esR9diq2Dvq0s20ugZGLDWzmbA7Y",
        success: function (data) {
            distance.time = (data.rows[0].elements[0].duration.text.substring(0, 2));
            console.log(distance);
        }
    });
};

function convertPlace(latitude, longtitude) {
    jQuery.getJSON({
        type: "GET",
        dataType: "json",
        'Access-Control-Allow-Origin': '*',
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + longtitude + "&key=AIzaSyAMOv2esR9diq2Dvq0s20ugZGLDWzmbA7Y",
        success: function (data) {
            var result = (data);
            place = result;
        }
    });
<<<<<<< HEAD
};

convertPlace(37, -122);

//function initMap() {
//    // Try HTML5 geolocation

//    if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(function (position) {

//            var pos = {
//                lat: position.coords.latitude,
//                lng: position.coords.longitude
//            };
//        }, function () {
           
//        });
//    }

//    else {
//        // Browser doesn't support Geolocation
//        console.log("Im aids");
//    }
//}



=======
}

<<<<<<< HEAD
function getCity(cityInput) {
    
}

initMap();
=======
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        });
    }
    else {
        // Browser doesn't support Geolocation
    };
};
>>>>>>> origin/master
>>>>>>> origin/master
