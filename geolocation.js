function initMap() {
                  // Try HTML5 geolocation

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

        var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
        };
            console.log(coordinates_to_address(pos.lat, pos.lng));
        }, function() {
            return pos;
        });
    } 
        
    else {
          // Browser doesn't support Geolocation
          console.log("Im aids");
    }
}
