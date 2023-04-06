

// Получаем кнопку бургер-меню
const burgerBtn = document.querySelector('.burger-btn');

// Добавляем обработчик события клика на кнопку бургер-меню
burgerBtn.addEventListener('click', function() {
    // Добавляем/удаляем класс "open" на кнопку бургер-меню
    this.classList.toggle('open');
    console.log('click btn')
});

