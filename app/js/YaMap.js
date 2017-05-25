ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("map", {
        center: [51.65801358172425,39.18930145337289],
        zoom: 18,
        controls: ['zoomControl']
    });
    myMap.behaviors.disable('scrollZoom');
    myPlacemark = new ymaps.Placemark([51.65801358172425,39.18930145337289], {
    });

    myMap.geoObjects.add(myPlacemark);
}