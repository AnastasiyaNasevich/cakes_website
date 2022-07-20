
function myMap() {
    var myStyles =[
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];
    var mapProp= {
        //эти координаты отвечают за центр камеры
        center:new google.maps.LatLng(53.90846307905662, 27.434396406040104),
        zoom:15,
        styles:myStyles
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

    const contentString =
    '<h3 id="firstHeading" class="firstHeading">Кондитерская Сладские мечты</h3>' +
    '<div id="bodyContent">' +
    "<p>г. Минск ул. Притыцкого 156 " +
    "ст.м. Каменная горка "  + "</p>" +
    "</div>";

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    var marker = new google.maps.Marker({
        //эти координаты отвечают за позицию маркера
        position:new google.maps.LatLng(53.90846307905662, 27.434396406040104), map:googleMap
    });
    marker.setMap(map);
    infowindow.open({
        anchor: marker,
        map,
        shoulFocus: false,
    });
    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
            shoulFocus: false,
        });
    });
}
                    
             

               