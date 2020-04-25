const colorInput = document.getElementById('js-color');
const spacingInput = document.getElementById('js-spacing');
const blurInput = document.getElementById('js-blur');
const imgBackgroundColor = document.getElementById('js-background-color');

function handleColor() {
  imgBackgroundColor.style.backgroundColor = colorInput.value;
}

function handleBlur() {
  document.documentElement.style.setProperty(`--blur`, blurInput.value + 'px');
}

function handleSpacing() {
  document.documentElement.style.setProperty(
    `--spacing`,
    spacingInput.value + 'px'
  );
}

colorInput.addEventListener('input', handleColor);
blurInput.addEventListener('input', handleBlur);
spacingInput.addEventListener('input', handleSpacing);
