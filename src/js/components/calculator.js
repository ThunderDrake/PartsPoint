import * as noUISlider from "nouislider";
import _vars from '../_vars';

const sliderDay = _vars.sliderDay;
const sliderMounth = _vars.sliderMounth;
const calcTotal = _vars.total;

const initSliderDay = () => {
  noUISlider.create(sliderDay, {
    start: [10],
    connect: [true, false],
    range: {
      'min': 5,
      'max': 50
    },
    step: 5,
    behaviour: 'tap',
    pips: {
      mode: 'steps',
      stepped: true,
      density: 10
    }
  })

  const pips = sliderDay.querySelectorAll('.noUi-value');

  clickOnPip(sliderDay, pips)
  showMarkers(sliderDay)
}

const initSliderMounth = () => {
  noUISlider.create(sliderMounth, {
    start: [5],
    connect: [true, false],
    range: {
      'min': 1,
      'max': 12
    },
    step: 1,
    behaviour: 'tap',
    pips: {
      mode: 'steps',
      stepped: true,
      density: 12
    }
  })

  const pips = sliderMounth.querySelectorAll('.noUi-value');

  clickOnPip(sliderMounth, pips)
  showMarkers(sliderMounth)
}

function clickOnPip(slider, pips) {
  pips.forEach((el) => {
    el.addEventListener('click', (e) => {
      const value = Number(e.target.getAttribute('data-value'));
      slider.noUiSlider.set(value);
    });
  })
}



function showMarkers(slider) {
  slider.noUiSlider.on('update', (values)=>{
    const sliderValues = slider.querySelectorAll('.noUi-value');
    const currentValue = values.toString().slice(0,-3);

    slider.querySelectorAll('.noUi-marker').forEach(el => {
      el.style.display = "";
    });

    sliderValues.forEach(el => {
      if(el.getAttribute("data-value") == currentValue) {
        el.previousSibling.style.display = "none";
      }
    })
  })
}

initSliderDay();
initSliderMounth();

[sliderDay, sliderMounth].forEach(el => {
  el.noUiSlider.on('update', () => {
    let dayValue = sliderDay.noUiSlider.get()
    let mounthValue = sliderMounth.noUiSlider.get()

    let total = (((Number(dayValue) * 3000)*30) * Number(mounthValue)) - ((((Number(dayValue) * 3000)*30) * Number(mounthValue)) / 1.21)

    calcTotal.innerText = Math.floor(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  })
})
