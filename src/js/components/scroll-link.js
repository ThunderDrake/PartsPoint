import SmoothScroll from 'smooth-scroll';

const socialWidget = document.querySelector('.social-widget');
const footer = document.querySelector('.footer');

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 2500,
	speedAsDuration: true
});

function checkOffset() {
  function getRectTop(el){
    const rect = el.getBoundingClientRect();
    return rect.top;
  }

  if((getRectTop(socialWidget) + document.body.scrollTop) + socialWidget.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10) {
    // socialWidget.style.position = 'absolute';
    socialWidget.style.bottom = footer.offsetHeight + 10 + 'px';
  }
  if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop)) {
    socialWidget.style.position = 'fixed'; // restore when you scroll up
    socialWidget.style.bottom = '5%';
  }
}

document.addEventListener("scroll", function(){
  checkOffset();
});
