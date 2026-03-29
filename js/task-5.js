'use strict'
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

const bodyElem = document.querySelector('body');
const widgeetBtnElem = document.querySelector('.change-color');
const widgetSpanElem = document.querySelector('.color')
widgeetBtnElem.addEventListener('click', handleWidgetBtnClick)
function handleWidgetBtnClick() {
  const randomColor = getRandomHexColor();
  bodyElem.style.backgroundColor = randomColor;
  widgetSpanElem.textContent = randomColor
}





