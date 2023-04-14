// Получение текущей даты
const currentDate = new Date();

// Получение текущего года
const currentYear = currentDate.getFullYear();

// Поиск элемента с классом ".date"
const dateElement = document.querySelector(".date");

// Установка значения текущего года в содержимое элемента
dateElement.textContent = currentYear;


// Добавляем обработчик событий для гамбургер меню
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

