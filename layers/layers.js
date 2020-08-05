ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4686").setExtent([-73.893186, 4.941699, -73.664369, 5.096634]);
var wms_layers = [];

var format_Vas_0 = new ol.format.GeoJSON();
var features_Vas_0 = format_Vas_0.readFeatures(json_Vas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_Vas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vas_0.addFeatures(features_Vas_0);
var lyr_Vas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vas_0, 
                style: style_Vas_0,
                interactive: true,
                title: '<img src="styles/legend/Vas_0.png" /> Vías'
            });
var format_PrediosUrbano_1 = new ol.format.GeoJSON();
var features_PrediosUrbano_1 = format_PrediosUrbano_1.readFeatures(json_PrediosUrbano_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_PrediosUrbano_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrediosUrbano_1.addFeatures(features_PrediosUrbano_1);
var lyr_PrediosUrbano_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrediosUrbano_1, 
                style: style_PrediosUrbano_1,
                interactive: true,
                title: '<img src="styles/legend/PrediosUrbano_1.png" /> Predios Urbano'
            });
var format_Orografia_2 = new ol.format.GeoJSON();
var features_Orografia_2 = format_Orografia_2.readFeatures(json_Orografia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_Orografia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Orografia_2.addFeatures(features_Orografia_2);
var lyr_Orografia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Orografia_2, 
                style: style_Orografia_2,
                interactive: true,
                title: '<img src="styles/legend/Orografia_2.png" /> Orografia'
            });
var format_LimteSesquil_3 = new ol.format.GeoJSON();
var features_LimteSesquil_3 = format_LimteSesquil_3.readFeatures(json_LimteSesquil_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_LimteSesquil_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimteSesquil_3.addFeatures(features_LimteSesquil_3);
var lyr_LimteSesquil_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimteSesquil_3, 
                style: style_LimteSesquil_3,
                interactive: true,
                title: '<img src="styles/legend/LimteSesquil_3.png" /> Limíte Sesquilé'
            });

lyr_Vas_0.setVisible(true);lyr_PrediosUrbano_1.setVisible(true);lyr_Orografia_2.setVisible(true);lyr_LimteSesquil_3.setVisible(true);
var layersList = [lyr_Vas_0,lyr_PrediosUrbano_1,lyr_Orografia_2,lyr_LimteSesquil_3];
lyr_Vas_0.set('fieldAliases', {'TIPO_VIA': 'TIPO_VIA', 'ESTADO_SUP': 'ESTADO_SUP', 'NUMERO_CAR': 'NUMERO_CAR', 'ACCESIBILI': 'ACCESIBILI', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'HOJA': 'HOJA', 'PK_CUE_CAM': 'PK_CUE_CAM', 'RuleID': 'RuleID', 'Shape_Leng': 'Shape_Leng', 'OBJECT_ID_': 'OBJECT_ID_', });
lyr_PrediosUrbano_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'MANZANA_CO': 'MANZANA_CO', 'NUMERO_SUB': 'NUMERO_SUB', 'CODIGO_ANT': 'CODIGO_ANT', 'GLOBALID': 'GLOBALID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Orografia_2.set('fieldAliases', {'CODIGO_NOM': 'CODIGO_NOM', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'HOJA': 'HOJA', 'PK_CUE_CAM': 'PK_CUE_CAM', 'RuleID': 'RuleID', 'OBJECT_ID_': 'OBJECT_ID_', });
lyr_LimteSesquil_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Codigo_Mun': 'Codigo_Mun', 'Nombre_Mun': 'Nombre_Mun', 'Categoria': 'Categoria', 'Codigo_Dep': 'Codigo_Dep', 'Nombre_Dep': 'Nombre_Dep', 'Area_Kilom': 'Area_Kilom', 'Area_Hecta': 'Area_Hecta', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Vas_0.set('fieldImages', {'TIPO_VIA': 'TextEdit', 'ESTADO_SUP': 'TextEdit', 'NUMERO_CAR': 'TextEdit', 'ACCESIBILI': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'DateTime', 'HOJA': 'TextEdit', 'PK_CUE_CAM': 'TextEdit', 'RuleID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OBJECT_ID_': 'TextEdit', });
lyr_PrediosUrbano_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'MANZANA_CO': 'TextEdit', 'NUMERO_SUB': 'TextEdit', 'CODIGO_ANT': 'TextEdit', 'GLOBALID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Orografia_2.set('fieldImages', {'CODIGO_NOM': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'DateTime', 'HOJA': 'TextEdit', 'PK_CUE_CAM': 'TextEdit', 'RuleID': 'TextEdit', 'OBJECT_ID_': 'TextEdit', });
lyr_LimteSesquil_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Codigo_Mun': 'TextEdit', 'Nombre_Mun': 'TextEdit', 'Categoria': 'TextEdit', 'Codigo_Dep': 'TextEdit', 'Nombre_Dep': 'TextEdit', 'Area_Kilom': 'TextEdit', 'Area_Hecta': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Vas_0.set('fieldLabels', {'TIPO_VIA': 'no label', 'ESTADO_SUP': 'no label', 'NUMERO_CAR': 'no label', 'ACCESIBILI': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABL': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODI': 'no label', 'HOJA': 'no label', 'PK_CUE_CAM': 'no label', 'RuleID': 'no label', 'Shape_Leng': 'no label', 'OBJECT_ID_': 'no label', });
lyr_PrediosUrbano_1.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'MANZANA_CO': 'header label', 'NUMERO_SUB': 'no label', 'CODIGO_ANT': 'no label', 'GLOBALID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Orografia_2.set('fieldLabels', {'CODIGO_NOM': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEO': 'inline label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABL': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODI': 'no label', 'HOJA': 'no label', 'PK_CUE_CAM': 'no label', 'RuleID': 'no label', 'OBJECT_ID_': 'no label', });
lyr_LimteSesquil_3.set('fieldLabels', {'OBJECTID': 'header label', 'Codigo_Mun': 'no label', 'Nombre_Mun': 'no label', 'Categoria': 'no label', 'Codigo_Dep': 'no label', 'Nombre_Dep': 'no label', 'Area_Kilom': 'no label', 'Area_Hecta': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_LimteSesquil_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});