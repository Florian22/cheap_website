var map;
var myLatLng = {lat: 45.382382, lng: -71.930603};
function genMap() {
		//45.382382, -71.930603
		var mapDiv = document.getElementById('map');
		map = new google.maps.Map(mapDiv, {
			center: myLatLng,
			zoom: 12,
			scrollwheel: false,
			scaleControl: false,
			draggable: false,
			mapTypeControl: false
		});
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: '1580 rue Prunier Sherbrooke'
		});
	}
function resize(){
	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter(myLatLng);
	});
}

