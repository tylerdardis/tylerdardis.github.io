function schools() {
  var LatLng = new google.maps.LatLng(46.4237271, -94.0038535);
var myOptions = {
        zoom: 7,
        center: LatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
setMarkers(map);
}
var schools_array = 
[
  [-93.235352,44.977886,"University of Minnesota-Twin Cities",1851,"https://www.umn.edu","51,848","100 Church Street SE","Minneapolis","Minnesota",55455,"Hennepin County","icons/umn.png","images/umn.png"],
  [-93.998494,44.147253,"Minnesota State University-Mankato",1868,"https://www.mnsu.edu","15,110","South Rd and Ellis Ave","Mankato","Minnesota",56001,"Blue Earth County","icons/mankato.png","images/mankato.png"],
  [-94.153,45.552418,"Saint Cloud State University",1869,"https://www.stcloudstate.edu","14,615","720 Fourth Ave. South","Saint Cloud","Minnesota",56301,"Stearns County","icons/stcloud.png","images/stcloud.png"],
  [-92.085177,46.818896,"University of Minnesota-Duluth",1947,"https://www.d.umn.edu","11,040","515 Darland Administration Bldg","Duluth","Minnesota",55812,"St. Louis County","icons/umn.png","images/umn.png"],
  [-91.644838,44.04585,"Winona State University",1858,"https://www.winona.edu","9,993","175 West Mark Street","Winona","Minnesota",55987,"Winona County","icons/winona.png","images/winona.png"],
  [-95.75983,44.455023,"Southwest Minnesota State University",8780,"https://www.smsu.edu","8,780","1501 State St","Marshall","Minnesota",56258,"Lyon County","icons/southwest_state.png","images/southwest_state.png"],
  [-94.874529,47.482505,"Bemidji State University",1919,"https://www.bemidjistate.edu","6,398","1500 Birchmont Dr","Bemidji","Minnesota",56601,"Beltrami County","icons/bemidji.png","images/bemidji.png"],
  [-96.763376,46.866482,"Minnesota State University Moorhead",1887,"https://www.mnstate.edu","6,308","1104 Seventh Avenue South","Moorhead","Minnesota",56563,"Clay County","icons/moorhead.png","images/moorhead.png"],
  [-95.901756,45.589829,"University of Minnesota-Morris",1960,"https://www.morris.umn.edu","1,896","309 Behmler Hall","Morris","Minnesota",56267,"Stevens County","icons/umn.png","images/umn.png"],
  [-96.609863,47.802021,"University of Minnesota-Crookston",1966,"https://www.umcrookston.edu","1,821","2900 University Ave","Crookston","Minnesota",56716,"Polk County","icons/umn.png","images/umn.png"],
  [-92.463471,44.022339,"University of Minnesota-Rochester",2006,"https://www.r.umn.edu","368","300 University Square","Rochester","Minnesota",55904,"Olmsted County","icons/umn.png","images/umn.png"],
];

function setMarkers(map) {

var imageBase = 'https://mavdisk.mnsu.edu/yq0131wl/';
var i;
for (i = 0; i < schools_array.length; i++) {
  var array = schools_array[i]
  var marker = new google.maps.Marker({
    position: {lat:array[1], lng:array[0]},
    icon: imageBase + array[11],
    map: map,
    title: array[2]
	});
  var contentString = '<div><h2 atyle="align:center">' + array[2] + '</h2>' +
  '<p>' + array[2] + ' is located in ' + array[7] + 
  ', ' + array [8] + '.</p>' + 'It was founded in ' +
  array[3] + ', and currently has student population ' +
  'of ' + array[5] + 
  '.<br> <img src=' + imageBase + array[12] +' alt="NA" style="padding:10px; display: block; margin-left: auto; margin-right: auto;">' +
  '<br><a href="' + array[4] + '" target="_blank" style="color:black; text-align:center;">Website</a></div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
	});

  marker.infowindow = infowindow;
  marker.addListener('click', function() {
	  return this.infowindow.open(map, this);
  });  
}
}

