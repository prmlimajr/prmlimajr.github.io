(function(){
  'use strict'

  window.addEventListener('load', start);

  const rangeR = document.querySelector('#rangeR');
  const rangeG = document.querySelector('#rangeG');
  const rangeB = document.querySelector('#rangeB');
  const displayR = document.querySelector('#displayR');
  const displayG = document.querySelector('#displayG');
  const displayB = document.querySelector('#displayB');
  const color = document.querySelector('#color');
  const body = document.querySelector('body');
  const hex = document.querySelector('#hex');

  function start(){
    changeColor();
  }

  function changeColor(){
    displayR.value = rangeR.value;
    displayG.value = rangeG.value;
    displayB.value = rangeB.value;
    let changingColor = 'rgb('+rangeR.value+', '+rangeG.value+', '+rangeB.value+')';
    body.style.backgroundColor = changingColor;
    hex.textContent = hexify(rangeR.value, rangeG.value, rangeB.value)
  }

  rangeR.addEventListener('input', changeColor);
  rangeG.addEventListener('input', changeColor);
  rangeB.addEventListener('input', changeColor);

  function hexify(r, g, b) {
    function decToHex(decimal) {
      const hex = decimal.toString(16);
      return hex.length == 1 ? '0' + hex : hex;
    }
    const rHex = decToHex(parseInt(r));
    const gHex = decToHex(parseInt(g));
    const bHex = decToHex(parseInt(b));
    return `#${rHex}${gHex}${bHex}`;
  }

})();

