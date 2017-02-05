function initMap() {
                  // Try HTML5 geolocation

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

        var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
        };
        console.log(pos);
        }, function() {
            console.log("Success");
        });
    } 
        
    else {
          // Browser doesn't support Geolocation
          console.log("Im aids");
    }
}


