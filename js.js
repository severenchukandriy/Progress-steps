let activeItem = 0;
let lines = document.querySelectorAll('.line');
let circles = document.querySelectorAll('.item')

document.querySelector('.btns').addEventListener('click', (e) => {
  e.preventDefault;

  let targetClasses = e.target.classList;
  let notDeactivated = !targetClasses.contains('deactivated');


  if (targetClasses.contains('btn-next') && notDeactivated) {

    lines[activeItem].style.width = '100%';
    setTimeout(() => {
      circles[activeItem + 1].classList.add('active')
      activeItem++;
    }, 200);
    document.querySelector('.btn-prev').classList.remove('deactivated');
    if (activeItem == 2) {
      targetClasses.add('deactivated')
    }

  } else if (targetClasses.contains('btn-prev') && notDeactivated) {
    circles[activeItem].classList.remove('active')
    lines[activeItem - 1].style.width = '0%';
    activeItem--;
    document.querySelector('.btn-next').classList.remove('deactivated');
    if (activeItem == 0) {
      targetClasses.add('deactivated')
    }
  }
})