let list = document.querySelectorAll('.slider .list .item');
let slider = document.querySelector('.slider');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let can = document.querySelector('.can');

let count = list.length;
let active = 0;
let leftCan = 0;
let left_each_item = 100 / (list.length - 1);

let refreshInterval = setInterval(() => next.click(), 5000);

next.onclick = () => {
    active = active >= count - 1 ? 0 : active + 1;
    leftCan = active * left_each_item;
    slider.classList.remove('right');
    changeSlider();
};

prev.onclick = () => {
    active = active <= 0 ? count - 1 : active - 1;
    leftCan = active * left_each_item;
    slider.classList.add('right');
    changeSlider();
};

function changeSlider() {
    let hiddenOld = document.querySelector('.item.hidden');
    if (hiddenOld) hiddenOld.classList.remove('hidden');

    let activeOld = document.querySelector('.item.active');
    if (activeOld) {
        activeOld.classList.remove('active');
        activeOld.classList.add('hidden');
    }

    list[active].classList.add('active');
    can.style.setProperty('--left', leftCan + '%');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => next.click(), 5000);
}
