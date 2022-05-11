import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 2500,
	speedAsDuration: true
});
