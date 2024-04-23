ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:27700").setExtent([272156.585654, 772737.590222, 342594.302423, 814241.967242]);
var wms_layers = [];


        var lyr_BingMapsSatelliteImagery_0 = new ol.layer.Tile({
            'title': 'Bing Maps Satellite Imagery',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://t0.tiles.virtualearth.net/tiles/a{q}.jpeg?g=685&mkt=en-us&n=z'
            })
        });
var lyr_DEM_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEM_1.png",
    attributions: ' ',
                                projection: 'EPSG:27700',
                                alwaysInRange: true,
                                imageExtent: [252500.000000, 761550.000000, 364000.000000, 828850.000000]
                            })
                        });
var format_Rivers_2 = new ol.format.GeoJSON();
var features_Rivers_2 = format_Rivers_2.readFeatures(json_Rivers_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Rivers_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivers_2.addFeatures(features_Rivers_2);
var lyr_Rivers_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rivers_2, 
                style: style_Rivers_2,
                popuplayertitle: "Rivers",
                interactive: true,
                title: '<img src="styles/legend/Rivers_2.png" /> Rivers'
            });
var lyr_HPA2_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "HPA 2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HPA2_3.png",
    attributions: ' ',
                                projection: 'EPSG:27700',
                                alwaysInRange: true,
                                imageExtent: [288000.000000, 777000.000000, 318000.000000, 805000.000000]
                            })
                        });
var lyr_HPA1_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "HPA 1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HPA1_4.png",
    attributions: ' ',
                                projection: 'EPSG:27700',
                                alwaysInRange: true,
                                imageExtent: [275000.000000, 770000.000000, 335000.000000, 820000.000000]
                            })
                        });
var format_sites_5 = new ol.format.GeoJSON();
var features_sites_5 = format_sites_5.readFeatures(json_sites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_sites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sites_5.addFeatures(features_sites_5);
var lyr_sites_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sites_5, 
                style: style_sites_5,
                popuplayertitle: "sites",
                interactive: true,
                title: '<img src="styles/legend/sites_5.png" /> sites'
            });

lyr_BingMapsSatelliteImagery_0.setVisible(true);lyr_DEM_1.setVisible(true);lyr_Rivers_2.setVisible(true);lyr_HPA2_3.setVisible(true);lyr_HPA1_4.setVisible(true);lyr_sites_5.setVisible(true);
var layersList = [lyr_BingMapsSatelliteImagery_0,lyr_DEM_1,lyr_Rivers_2,lyr_HPA2_3,lyr_HPA1_4,lyr_sites_5];
lyr_Rivers_2.set('fieldAliases', {'name1': 'name1', 'identifier': 'identifier', 'startNode': 'startNode', 'endNode': 'endNode', 'form': 'form', 'flow': 'flow', 'fictitious': 'fictitious', 'length': 'length', 'name2': 'name2', });
lyr_sites_5.set('fieldAliases', {'site': 'site', 'easting': 'easting', 'northing': 'northing', 'NGR': 'NGR', 'visible': 'visible', 'letter lab': 'letter lab', 'map_no': 'map_no', });
lyr_Rivers_2.set('fieldImages', {'name1': 'TextEdit', 'identifier': 'TextEdit', 'startNode': 'TextEdit', 'endNode': 'TextEdit', 'form': 'TextEdit', 'flow': 'TextEdit', 'fictitious': 'TextEdit', 'length': 'Range', 'name2': 'TextEdit', });
lyr_sites_5.set('fieldImages', {'site': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', 'NGR': 'TextEdit', 'visible': 'TextEdit', 'letter lab': 'TextEdit', 'map_no': 'TextEdit', });
lyr_Rivers_2.set('fieldLabels', {'name1': 'no label', 'identifier': 'no label', 'startNode': 'no label', 'endNode': 'no label', 'form': 'no label', 'flow': 'no label', 'fictitious': 'no label', 'length': 'no label', 'name2': 'no label', });
lyr_sites_5.set('fieldLabels', {'site': 'inline label - always visible', 'easting': 'no label', 'northing': 'no label', 'NGR': 'no label', 'visible': 'no label', 'letter lab': 'no label', 'map_no': 'no label', });
lyr_sites_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});