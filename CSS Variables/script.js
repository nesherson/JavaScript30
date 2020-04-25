const inputControls = document.querySelectorAll('#js-input-controls input');

function handleChange() {
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + `${this.name === 'base' ? '' : 'px'}`
  );
}

inputControls.forEach((input) => input.addEventListener('input', handleChange));
