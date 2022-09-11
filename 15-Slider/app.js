const imgs = document.querySelector('.imgs');
const buttons = document.querySelectorAll('span')

let loop;
/* Event Listener */
imgs.addEventListener('mouseenter', function(){
  clearInterval(loop);
})
imgs.addEventListener('mouseleave', function(){
  loop = setInterval(nextSlide, 1000);
})

buttons.forEach(function(button,i) {
  button.addEventListener('click', function(){
    slideTo(i);
  });
})

/* Function */

// slide to given index of pic
function slideTo(index) {
  imgs.style.transform = `translateX(-${index}00%)`;
  //remove pre active button and active selected button
  const activeButton = document.querySelector('span.active');
  activeButton.classList.remove('active');
  buttons[index].classList.add('active');
}

// slide to next slide
function nextSlide() {
  const curSlide = parseInt(document.querySelector('span.active').dataset.id);

  if(curSlide !== (buttons.length - 1)){
    slideTo(curSlide + 1);
  } else {
    slideTo(0);
  }
}

