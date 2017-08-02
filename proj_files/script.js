var Script = {

    oduMap: function () {
        var map = new GMaps({
            el: '#gmaps',
            lat: 40.712675,
            lng: -74.006277,
            zoom: 10,
            zoomControl : true,
            zoomControlOpt: {
                style : 'SMALL',
                position: 'TOP_LEFT'
            },
            
            panControl : false,
            streetViewControl : false,
            mapTypeControl: false,
            overviewMapControl: false
        });
    },

    init: function () {
        this.oduMap();
    }
}




