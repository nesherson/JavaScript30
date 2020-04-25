const color = document.getElementById('js-color');
const imgBackgroundColor = document.getElementById('js-background-color');

function setColor() {
  imgBackgroundColor.style.backgroundColor = color.value;
}

color.addEventListener('input', setColor);
