console.log("testing check 1...2...");

// define globals
const weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson?";

// const weekly_quakes_endpo = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson?features=PROPERTIES"; //- according to Lauren /...


///    get elements needed

let showIt = document.getElementById('map');

let quakes = document.getElementById('info');



function showMeTheQuakes(){
fetch(weekly_quakes_endpoint)
  .then(res => {
    return res.json();
  }) 
  .then(res => {
    console.log("awesome it worked", res);
   // console.log(res.json);  ///  to see the data 84 ladst night - only 81 today
    givePtag(res);
    window.yes(res)
    
    
  })
  .catch(err => console.log("something went wrong ;/", err));

};

function givePtag(res){
    for (let q=0;q<res.features.length;q++){
        let quakeList=document.createElement('p');
        quakeList.innerHTML = res.features[q].properties.title;
        document.getElementById("info").appendChild(quakeList);
        
    
}
}; 


showMeTheQuakes();


/// earth quakes title appear on the page.

/// add a map...

// google says do this to make a map.... how can I argue with the google.
var map;
function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
      center: {lat:33.7490, lng:-84.3880},
      zoom: 4
    });
    var myHouse = {lat:34.1015, lng: -84.5194};  
    var marker = new google.maps.Marker({
        position: myHouse,
        map: map,
        icon:marker,
        title: 'Hello World from B love!'});
};

initMap();



// to add one marker for Woodstock GA
// google says to use var and do it like this... 


var myHouse = {lat:34.1015, lng: -84.5194};  

var marker = new google.maps.Marker({
    position: myHouse,
    map: map,
    title: 'Hello World! B Love here'});


    window.yes = function(res) {
        for (var i = 0; i < res.features.length; i++) {
          var coords = res.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var icon = {
              url: "images/earthquake.png",
              scaledSize:new google.maps.Size(30,30),
              origin: new google.maps.Point(0,0),
              anchor: new google.maps.Point(0,0)
          };
          var marker= new google.maps.Marker({
            position : latLng,
            map : map,
            icon : icon
          });
        };
      }

// credit for help from WILLIAM - BONNIE - JP  - & JAMAL - & Google


////welll William had it working.... and now it is not.... 
// and now it is HUGE Thanks to JP spotting the map var bs from map constructor error throwing it all off... 


// Part 4. Add pins to your map - yeah piece of cake sure...
// Once you've got the map to show up, your next goal is to drop a single pin on your city. This is a sanity check.

//// IT TOOK over an hour to get the dot on my house....... sanity NOT in check at the moment...

// Next, can you add only the first earthquake to the map? 
//     *#*#      yeah skipped this and went for all
// Can you add pins for all the earthquakes to the map?
//        *#*#       sure did
// Finally, can you replace the pin with the earthquake.png icon? 
 //       *#*#          yeppers.
////   

