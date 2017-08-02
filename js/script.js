var Script = {

    oduMap: function () {
        var map = new GMaps({
            el: '#map',
            lat: 36.88542543631744,
            lng: -76.30576483585969,
            zoom: 16,
            zoomControl : true,
            zoomControlOpt: {
                style : 'SMALL',
                position: 'TOP_LEFT'
            },

            panControl : false,
            streetViewControl : false,
            mapTypeControl: true,
            overviewMapControl: false
        });

        /* Added default marker here.*/
        map.addMarker({
            lat: 36.8854254,
            lng: -76.305764,
            infoWindow: {
                content: '<strong>Dragas Hall</strong><br>CS 450/550: Database Concepts'
            }
        });


    },

    /*
    * When you submit the form, this function is called and it takes form data. Process the provided form data against your .CSV file
    * */
    listing: function () {
        $('.course-listing').on('submit', function (e) {
            e.preventDefault();
            var data = $(this).serialize();
            $.ajax({
                url: 'assets/data.json',
                dataType: 'text',
                //data: data, //here data is form data
                success: function(response){
                    var data = $.parseJSON(response);
                    /*
                    * Write your D3 code here to fetch the marker details like title, course, lat & lng.
                    * Use GMaps (http://hpneo.github.com/gmaps) methods to dynamically add markers on map.
                    * eg.
                    *
                    * map.addMarker({
                    *  lat: date.lat,
                    *  lng: data.lng,
                    *  infoWindow: {
                    *    content: '<strong>'+data.title+'</strong><br>'+data.course
                    *  }
                    * });
                    *
                    * Use something like this to make markers.
                    *
                    * */
                    alert(data.title);
                },
                error: function () {
                    console.log('Something wrong..');
                }
            })

        });
    },

    init: function () {
        this.oduMap();
        this.listing();
    }
}




