

// Получаем кнопку бургер-меню
const burgerBtn = document.querySelector('.burger-btn');

// Добавляем обработчик события клика на кнопку бургер-меню
burgerBtn.addEventListener('click', function() {
    // Добавляем/удаляем класс "open" на кнопку бургер-меню
    this.classList.toggle('open');
    console.log('click btn')
});

// Инициализация ScrollMagic
var controller = new ScrollMagic.Controller();

// Создание анимации с помощью TweenMax и TimelineMax
var tween = new TimelineMax()
    .add(TweenMax.to(".animated-text", 0.5, {opacity: 1, translateY: 0, ease: Power1.easeInOut})) // Анимация появления текста
    .add(TweenMax.to(".animated-text", 0.5, {opacity: 0, translateY: -100, ease: Power1.easeInOut})); // Анимация исчезания текста

// Создание сцены ScrollMagic
new ScrollMagic.Scene({
    triggerElement: ".animated-text", // Элемент, который должен появиться в видимости
    triggerHook: 0.8, // Задержка перед началом анимации
    reverse: true // Отключение обратного проигрывания анимации при скроллинге назад
})
    .setTween(tween) // Привязка анимации к сцене
    .addIndicators() // Добавление индикаторов ScrollMagic Debug Indicator (можно удалить в финальной версии)
    .addTo(controller); // Добавление сцены в контроллер ScrollMagic

