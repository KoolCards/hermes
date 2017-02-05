function initMap() {
                  // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
        };
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
        }, function() {
            console.log('Im aids');
        });
    } 
        
    else {
          // Browser doesn't support Geolocation
          console.log("Im aids");
    }
}