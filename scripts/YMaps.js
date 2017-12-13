        // Как только будет загружен API и готов DOM, выполняем инициализацию
        ymaps.ready(init);
 
        function init () {
            // Создание экземпляра карты и его привязка к контейнеру с
            // заданным id ("map")
            var Map = new ymaps.Map('map', {
                    // При инициализации карты, обязательно нужно указать
                    // ее центр и коэффициент масштабирования
                    center: [56.315695,44.017063], // Нижний Новгород
                    zoom: 16
                });
 
 
				// Создаем метку с изображением коалы
                myPlacemark = new ymaps.Placemark([56.315695,44.017063], {
                    // Контент балуна
                    balloonContent: '<div style = "margin-top: 30px; margin-left: 20px;" ><b>Оперный театр</b><br/>ул. Белинского, 59</div>'
                }, {
                     // Изображение иконки метки
                    iconImageHref: 'theater.png',
                    // Размеры изображения иконки
                    iconImageSize: [32, 37],  
					// смещение картинки
					iconImageOffset: [-16, -37],
                    // Размеры содержимого балуна
                    balloonContentSize: [130, 130],
                    // Задаем макет балуна - пользовательская картинка с контентом
                    balloonLayout: "default#imageWithContent",
                    // Картинка балуна
                    balloonImageHref: 'newbaloon.png',
                    // Смещение картинки балуна
                    balloonImageOffset: [-5, -60],
                    // Размеры картинки балуна
                    balloonImageSize: [150, 150],
                    // Балун не имеет тени
                    balloonShadow: false
                });
 
            // Добавляем метку на карту
            Map.geoObjects.add(myPlacemark);
        }
