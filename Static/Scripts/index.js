const kd79x = document.querySelector('.kd79x-dot-1');
const kd79x2 = document.querySelector('.kd79x-dot-2');


kd79x.addEventListener('click', function() {
    // delete "active class" on btn2
    kd79x2.classList.remove('active');
    // add class "active" span1
    kd79x.classList.add('active');
});

//add event listener on span2
kd79x2.addEventListener('click', function() {
    // Удаляем класс "active" у span1
    kd79x.classList.remove('active');
    // Добавляем класс "active" к span2
    kd79x2.classList.add('active');
});