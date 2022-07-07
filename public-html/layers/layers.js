var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Departamentos_Honduras_1 = new ol.format.GeoJSON();
var features_Departamentos_Honduras_1 = format_Departamentos_Honduras_1.readFeatures(json_Departamentos_Honduras_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_Honduras_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_Honduras_1.addFeatures(features_Departamentos_Honduras_1);
var lyr_Departamentos_Honduras_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_Honduras_1, 
                style: style_Departamentos_Honduras_1,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_Honduras_1.png" /> Departamentos_Honduras'
            });
var format_ElParaiso_2 = new ol.format.GeoJSON();
var features_ElParaiso_2 = format_ElParaiso_2.readFeatures(json_ElParaiso_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElParaiso_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElParaiso_2.addFeatures(features_ElParaiso_2);
var lyr_ElParaiso_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElParaiso_2, 
                style: style_ElParaiso_2,
                interactive: true,
                title: '<img src="styles/legend/ElParaiso_2.png" /> El Paraiso'
            });
var format_Danli_3 = new ol.format.GeoJSON();
var features_Danli_3 = format_Danli_3.readFeatures(json_Danli_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Danli_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Danli_3.addFeatures(features_Danli_3);
var lyr_Danli_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Danli_3, 
                style: style_Danli_3,
                interactive: true,
                title: '<img src="styles/legend/Danli_3.png" /> Danli'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Departamentos_Honduras_1.setVisible(true);lyr_ElParaiso_2.setVisible(true);lyr_Danli_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Departamentos_Honduras_1,lyr_ElParaiso_2,lyr_Danli_3];
lyr_Departamentos_Honduras_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'COD': 'COD', 'DEPTO': 'DEPTO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'DEP': 'DEP', 'CODPAIS': 'CODPAIS', 'Km2': 'Km2', 'Densidad': 'Densidad', });
lyr_ElParaiso_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'COD_MUNI': 'COD_MUNI', 'DEP': 'DEP', 'MUN': 'MUN', 'COD_MUN_': 'COD_MUN_', 'CODPAIS': 'CODPAIS', 'Km2': 'Km2', 'Densidad': 'Densidad', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Danli_3.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', 'COD_MUNI': 'COD_MUNI', 'DEP': 'DEP', 'MUN': 'MUN', 'COD_MUN_': 'COD_MUN_', 'CODPAIS': 'CODPAIS', 'Km2': 'Km2', 'Densidad': 'Densidad', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Departamentos_Honduras_1.set('fieldImages', {'fid': 'Range', 'OBJECTID': 'TextEdit', 'COD': 'TextEdit', 'DEPTO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'DEP': 'Range', 'CODPAIS': 'TextEdit', 'Km2': 'TextEdit', 'Densidad': 'TextEdit', });
lyr_ElParaiso_2.set('fieldImages', {'NOMBRE': 'TextEdit', 'COD_MUNI': 'TextEdit', 'DEP': 'Range', 'MUN': 'Range', 'COD_MUN_': 'Range', 'CODPAIS': 'TextEdit', 'Km2': 'TextEdit', 'Densidad': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Danli_3.set('fieldImages', {'fid': '', 'NOMBRE': '', 'COD_MUNI': '', 'DEP': '', 'MUN': '', 'COD_MUN_': '', 'CODPAIS': '', 'Km2': '', 'Densidad': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Departamentos_Honduras_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'COD': 'no label', 'DEPTO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'DEP': 'no label', 'CODPAIS': 'no label', 'Km2': 'no label', 'Densidad': 'no label', });
lyr_ElParaiso_2.set('fieldLabels', {'NOMBRE': 'no label', 'COD_MUNI': 'no label', 'DEP': 'no label', 'MUN': 'no label', 'COD_MUN_': 'no label', 'CODPAIS': 'no label', 'Km2': 'no label', 'Densidad': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Danli_3.set('fieldLabels', {'fid': 'no label', 'NOMBRE': 'header label', 'COD_MUNI': 'no label', 'DEP': 'no label', 'MUN': 'no label', 'COD_MUN_': 'no label', 'CODPAIS': 'no label', 'Km2': 'no label', 'Densidad': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Danli_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});