let menuElem = document.getElementById('dropdown') //Главный блок
let titleElem = menuElem.querySelector('.title') // Главный блок выпадающего меню

titleElem.onclick = function() 
{
    menuElem.classList.toggle('open') //На клике добавляет класс open, который дает diplsay: block, по умолчанию none
}