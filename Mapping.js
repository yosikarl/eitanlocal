var geocoder;
var map;

function codeAddress(addressEntry) {
    geocoder.geocode( { 'address': addressEntry.address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title:addressEntry.txt,
                icon:"https://sites.google.com/site/kipabots922/mapping/icons/"+addressEntry.icon
            });
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}

function initialize() {
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(31.89, 35.022)
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    geocoder = new google.maps.Geocoder();

    for (var i=0; i<addresses.length; i++) {
        codeAddress(addresses[i]);
    }
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&language=iw&' +
        'callback=initialize';
    document.body.appendChild(script);
}

window.onload = loadScript;
