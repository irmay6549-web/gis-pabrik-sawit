var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKABUPATEN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKABUPATEN_AR_50K_1 = format_ADMINISTRASIKABUPATEN_AR_50K_1.readFeatures(json_ADMINISTRASIKABUPATEN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKABUPATEN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKABUPATEN_AR_50K_1.addFeatures(features_ADMINISTRASIKABUPATEN_AR_50K_1);
var lyr_ADMINISTRASIKABUPATEN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKABUPATEN_AR_50K_1, 
                style: style_ADMINISTRASIKABUPATEN_AR_50K_1,
                popuplayertitle: 'ADMINISTRASIKABUPATEN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKABUPATEN_AR_50K_1.png" /> ADMINISTRASIKABUPATEN_AR_50K'
            });
var format_Data_Excel_PabrikSawit_2 = new ol.format.GeoJSON();
var features_Data_Excel_PabrikSawit_2 = format_Data_Excel_PabrikSawit_2.readFeatures(json_Data_Excel_PabrikSawit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Excel_PabrikSawit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_Excel_PabrikSawit_2.addFeatures(features_Data_Excel_PabrikSawit_2);
var lyr_Data_Excel_PabrikSawit_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_Excel_PabrikSawit_2, 
                style: style_Data_Excel_PabrikSawit_2,
                popuplayertitle: 'Data_Excel_PabrikSawit',
                interactive: true,
                title: '<img src="styles/legend/Data_Excel_PabrikSawit_2.png" /> Data_Excel_PabrikSawit'
            });
var format_Buffered_3 = new ol.format.GeoJSON();
var features_Buffered_3 = format_Buffered_3.readFeatures(json_Buffered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_3.addFeatures(features_Buffered_3);
var lyr_Buffered_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_3, 
                style: style_Buffered_3,
                popuplayertitle: 'Buffered',
                interactive: true,
                title: '<img src="styles/legend/Buffered_3.png" /> Buffered'
            });
var format_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4 = new ol.format.GeoJSON();
var features_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4 = format_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4.readFeatures(json_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4.addFeatures(features_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4);
var lyr_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4, 
                style: style_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4,
                popuplayertitle: 'pabrik_fix — layer_titik_3857__data_excel_pabriksawit',
                interactive: true,
    title: 'pabrik_fix — layer_titik_3857__data_excel_pabriksawit<br />\
    <img src="styles/legend/pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4_0.png" /> BUMN<br />\
    <img src="styles/legend/pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4_1.png" /> Swasta<br />\
    <img src="styles/legend/pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4_2.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASIKABUPATEN_AR_50K_1.setVisible(true);lyr_Data_Excel_PabrikSawit_2.setVisible(true);lyr_Buffered_3.setVisible(true);lyr_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASIKABUPATEN_AR_50K_1,lyr_Data_Excel_PabrikSawit_2,lyr_Buffered_3,lyr_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4];
lyr_ADMINISTRASIKABUPATEN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Data_Excel_PabrikSawit_2.set('fieldAliases', {'id': 'id', 'Nama_pabrik': 'Nama_pabrik', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kategori': 'Kategori', 'Jumlah': 'Jumlah', });
lyr_Buffered_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama_pabrik': 'Nama_pabrik', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kategori': 'Kategori', 'Jumlah': 'Jumlah', });
lyr_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama_pabrik': 'Nama_pabrik', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kategori': 'Kategori', 'Jumlah': 'Jumlah', 'kategori_baru': 'kategori_baru', 'Data_Excel_PabrikSawit_Nama_pabrik': 'Data_Excel_PabrikSawit_Nama_pabrik', 'Data_Excel_PabrikSawit_Latitude': 'Data_Excel_PabrikSawit_Latitude', 'Data_Excel_PabrikSawit_Longitude': 'Data_Excel_PabrikSawit_Longitude', 'Data_Excel_PabrikSawit_Kategori': 'Data_Excel_PabrikSawit_Kategori', 'Data_Excel_PabrikSawit_Jumlah': 'Data_Excel_PabrikSawit_Jumlah', });
lyr_ADMINISTRASIKABUPATEN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Data_Excel_PabrikSawit_2.set('fieldImages', {'id': 'Range', 'Nama_pabrik': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kategori': 'TextEdit', 'Jumlah': 'Range', });
lyr_Buffered_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Nama_pabrik': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kategori': 'TextEdit', 'Jumlah': 'Range', });
lyr_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Nama_pabrik': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kategori': 'TextEdit', 'Jumlah': 'Range', 'kategori_baru': 'Range', 'Data_Excel_PabrikSawit_Nama_pabrik': 'TextEdit', 'Data_Excel_PabrikSawit_Latitude': 'TextEdit', 'Data_Excel_PabrikSawit_Longitude': 'TextEdit', 'Data_Excel_PabrikSawit_Kategori': 'TextEdit', 'Data_Excel_PabrikSawit_Jumlah': 'Range', });
lyr_ADMINISTRASIKABUPATEN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Data_Excel_PabrikSawit_2.set('fieldLabels', {'id': 'no label', 'Nama_pabrik': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Kategori': 'no label', 'Jumlah': 'no label', });
lyr_Buffered_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama_pabrik': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Kategori': 'no label', 'Jumlah': 'no label', });
lyr_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama_pabrik': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Kategori': 'no label', 'Jumlah': 'no label', 'kategori_baru': 'no label', 'Data_Excel_PabrikSawit_Nama_pabrik': 'no label', 'Data_Excel_PabrikSawit_Latitude': 'no label', 'Data_Excel_PabrikSawit_Longitude': 'no label', 'Data_Excel_PabrikSawit_Kategori': 'no label', 'Data_Excel_PabrikSawit_Jumlah': 'no label', });
lyr_pabrik_fixlayer_titik_3857__data_excel_pabriksawit_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});