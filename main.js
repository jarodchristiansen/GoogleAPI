  var map;
      function initMap() {
        Phoenix = {lat: 33.4484, lng: -112.0740};  
        Flagstaff = {lat: 35.1983, lng: -111.6513};
        Glendale = {lat: 34.1983, lng: -112.1860};

       let map = new google.maps.Map(document.getElementById('map'), 
        {zoom: 6.5, center: Phoenix});
        //Listen for click on map

        //Array of markers

        var Markers = [
        {
            title:Phoenix,
            iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content:"<h1>Phoenix,AZ</h1>"
            },
            {
            title:Flagstaff,
            content:"<h1>Flagstaff,AZ</h1>"
            },
            {
            title:Glendale,
            content:"<h1>Glendale,AZ</h1>"
            },
        ];

        //Loop through markers
         for(var i= 0; i <Markers.length;i++){
             addMarker(Markers[i]);
         }
        //Add Marker function
        function addMarker(props) {
        let marker = new google.maps.Marker({
           position: props.title, 
           map: map
        });
        //check for custom icon
        if(props.iconImage){
            //set icon image
            marker.setIcon(props.iconImage);
        }

        //Check if content header for each
        if(props.content){
         let infoWindow = new google.maps.InfoWindow({
            content:props.content
        });
        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        });
      }
    }
}