// Получаем текущий URL страницы
var currentUrl = window.location.href;

// Функция-обработчик события клика
function handleClick(event) {
    event.preventDefault(); // Отменяем стандартное действие перехода по ссылке или клика по кнопке
    event.stopPropagation(); // Останавливаем всплытие события
}

// Заменяем ссылки на текущую страницу на "#"
var links = document.getElementsByTagName('a');
var buttons = document.getElementsByTagName('button');
var elementsToDisable = Array.from(links).concat(Array.from(buttons));

elementsToDisable.forEach(function(element) {
    if (element.href === currentUrl || element.getAttribute('href') === currentUrl) {
        element.addEventListener('click', handleClick); // Добавляем обработчик события клика
        element.style.cursor = 'no-drop'; // Устанавливаем стиль курсора на "no-drop"
        element.href = '#'; // Заменяем ссылку на текущую страницу на "#"
    }
});
