(() => {
  // frappe-html:/home/frappe/frappe-bench/apps/map/map/public/js/map_html.html
  frappe.templates["map_html"] = `

<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""><\/script>

    
    <script src="https://unpkg.com/esri-leaflet@3.0.12/dist/esri-leaflet.js"><\/script>
    <script src="https://unpkg.com/esri-leaflet-vector@4.2.3/dist/esri-leaflet-vector.js"><\/script>

    


    <style>
      body {
        margin: 0;
        padding: 0;
      }
      #map {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #323232;
      }
      #directions {
        position: absolute;
        z-index: 1000;
        width: 30%;
        max-height: 50%;
        right: 20px;
        top: 20px;
        overflow-y: auto; /* Show a scrollbar if needed */
        background: white;
        font-family: Arial, Helvetica, Verdana;
        line-height: 1.5;
        font-size: 14px;
        padding: 10px;
      }
    </style>

  </head>

  <body>
    <div id="map" style = "width:900px; height:580px"></div>

    <script>

      var apiKey = "AAPKb7a1d63200d747528ece8e0746d9a46dVWnWo2g8x_d1tQYqKI7QftZhrtPIwaAM2-stsoAAfcmimmd9BHcyMHDTGAJwz1d4";

      var basemapEnum = "ArcGIS:Navigation";

      var map = L.map("map", {
        minZoom: 2
      });

      map.setView([{{ latitude }}, {{ longitude }}], 12); 
      L.esri.Vector.vectorBasemapLayer(basemapEnum, {
        apiKey: apiKey
      }).addTo(map);
      var startLayerGroup = L.layerGroup().addTo(map);

      L.marker({lat: {{ latitude }}, lng: {{ longitude }} }, ).addTo(startLayerGroup)
      
    
    <\/script>
  </body>
</html>`;
})();
//# sourceMappingURL=map.bundle.5U3YGW2X.js.map
