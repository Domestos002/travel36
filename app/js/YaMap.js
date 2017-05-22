ymaps.ready(init);
var myMap;
lang=ru_RU;

function init() {
    myMap = new ymaps.Map("map", {
        center: [51.65801358172425,39.18930145337289],
        zoom: 18,
        controls: ['zoomControl']
    });
    myMap.behaviors.disable('scrollZoom');
    var balloon = myMap.balloon.open(myMap.getCenter(), { content: 'Адрес: г. Воронеж, ул. Пушкинская, д.42.' }, { closeButton: true });
}
