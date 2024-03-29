      var map;
      var geocoder;
      var bounds = new google.maps.LatLngBounds();
      var markersArray = [];
      
      //var origin1 = new google.maps.LatLng(25.018402,121.538675); // NTU
      var origin2 = "台北市木新路二段161巷6弄5號"; //師大
     // var destinationA = "台北火車站";
      var destinationB = new google.maps.LatLng(25.03315,121.564451);

      var destinationIcon = "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=D|FF0000|000000";
      var originIcon = "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=O|FFFF00|000000";
      //地圖進去時呈現的樣子
      function initialize() {
        var opts = {
          center: new google.maps.LatLng(55.53, 9.4),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map'), opts);
        geocoder = new google.maps.Geocoder();
      }
    
      //發出request 得到距離的矩陣
      function calculateDistances() {
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
          {
            origins: [origin1, origin2],
            destinations: [destinationA, destinationB],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
          }, callback);
      }

       function calculateDistances_walking() {
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
          {
            origins: [origin1, origin2],
            destinations: [destinationA, destinationB],
            travelMode: google.maps.TravelMode.WALKING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
          }, callback_walking);
      }

      //處理回傳的資訊(包含所有我們需要的資訊)
      function callback(response, status) {
        if (status != google.maps.DistanceMatrixStatus.OK) {
          alert('Error was: ' + status);
        } else {
          var origins = response.originAddresses;
          var destinations = response.destinationAddresses;
          var outputDiv = document.getElementById('outputDiv');
          outputDiv.innerHTML = '';
          deleteOverlays();

          for (var i = 0; i < origins.length; i++) {
            var results = response.rows[i].elements;
            addMarker(origins[i], false);     //可以當作按下交通資訊時的事件
            console.log(results)              //顯示回傳的物件內容
            for (var j = 0; j < results.length; j++) {
              addMarker(destinations[j], true);   //可以當作按下交通資訊時的事件
              outputDiv.innerHTML += origins[i] + " to " + destinations[j]
                  + ": " + results[j].distance.text + " in "
                  + results[j].duration.text + "<br />";
            }
          }
        }
        $('#test').append('hi DRIVING')
        $("#test").append(response.rows[0].elements[0].duration.text);
      }
       function callback_walking(response, status) {
        if (status != google.maps.DistanceMatrixStatus.OK) {
          alert('Error was: ' + status);
        } else {
          var origins = response.originAddresses;
          var destinations = response.destinationAddresses;
          var outputDiv = document.getElementById('outputDiv');
          outputDiv.innerHTML = '';
          deleteOverlays();

          for (var i = 0; i < origins.length; i++) {
            var results = response.rows[i].elements;
            addMarker(origins[i], false);
            console.log(results)              //顯示回傳的物件內容
            for (var j = 0; j < results.length; j++) {
              addMarker(destinations[j], true);
              outputDiv.innerHTML += origins[i] + " to " + destinations[j]
                  + ": " + results[j].distance.text + " in "
                  + results[j].duration.text + "<br />";
            }
          }
        }
        $('#test').append('hi WALKING<div>div is here</div>')
        $("#test").append(response.rows[0].elements[0].duration.text);
      }

      function addMarker(location, isDestination) {
        var icon;
        if (isDestination) {
          icon = destinationIcon;
        } else {
          icon = originIcon;
        }
        geocoder.geocode({'address': location}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            bounds.extend(results[0].geometry.location);
            map.fitBounds(bounds);
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
              icon: icon
            });
            markersArray.push(marker);
          } else {
            alert("Geocode was not successful for the following reason: "
              + status);
          }
        });
      }
      
      function deleteOverlays() {
        if (markersArray) {
          for (i in markersArray) {
            markersArray[i].setMap(null);
          }
          markersArray.length = 0;
        }
      }