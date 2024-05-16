var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_point_Export__1 = new ol.format.GeoJSON();
var features_point_Export__1 = format_point_Export__1.readFeatures(json_point_Export__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_Export__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_Export__1.addFeatures(features_point_Export__1);
var lyr_point_Export__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_Export__1, 
                style: style_point_Export__1,
                popuplayertitle: "point_Export_",
                interactive: true,
                title: '<img src="styles/legend/point_Export__1.png" /> point_Export_'
            });
var format_SOUTH24PGS_2 = new ol.format.GeoJSON();
var features_SOUTH24PGS_2 = format_SOUTH24PGS_2.readFeatures(json_SOUTH24PGS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOUTH24PGS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOUTH24PGS_2.addFeatures(features_SOUTH24PGS_2);
var lyr_SOUTH24PGS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOUTH24PGS_2, 
                style: style_SOUTH24PGS_2,
                popuplayertitle: "SOUTH24PGS",
                interactive: true,
                title: '<img src="styles/legend/SOUTH24PGS_2.png" /> SOUTH24PGS'
            });

lyr_OSMStandard_0.setVisible(true);lyr_point_Export__1.setVisible(true);lyr_SOUTH24PGS_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_point_Export__1,lyr_SOUTH24PGS_2];
lyr_point_Export__1.set('fieldAliases', {'PLACE': 'PLACE:', 'PLACE_NAME': 'TOURIST SPOT:', 'ADDRESS': 'LOCATION:', 'PH_NO_': 'CONTACT NO:', 'lat': 'lat', 'long': 'long', });
lyr_SOUTH24PGS_2.set('fieldAliases', {'Id': 'Id', });
lyr_point_Export__1.set('fieldImages', {'PLACE': 'TextEdit', 'PLACE_NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'PH_NO_': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', });
lyr_SOUTH24PGS_2.set('fieldImages', {'Id': 'TextEdit', });
lyr_point_Export__1.set('fieldLabels', {'PLACE': 'inline label - visible with data', 'PLACE_NAME': 'inline label - visible with data', 'ADDRESS': 'inline label - visible with data', 'PH_NO_': 'inline label - visible with data', });
lyr_SOUTH24PGS_2.set('fieldLabels', {'Id': 'inline label - visible with data', });
lyr_SOUTH24PGS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});