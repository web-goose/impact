ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.782967569884626,56.036017999999956],
            zoom: 16,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Мы здесь!',
            balloonContent: 'Impart'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'static/img/contacts/marker.png',
            iconImageSize: [30, 42],
        });
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});
