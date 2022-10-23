function renderDropdown(targetClass) {
  let container = document.querySelector(`.${targetClass}`);
  let button = document.querySelector(`.${targetClass}__button`);
  let hiddenBlock = document.querySelector(`.${targetClass}__block`);
  button.classList.remove(`${targetClass}__button--hidden`);
  toggleDropdown();

  button.addEventListener('click', function () {
    toggleDropdown();
  });

  function toggleDropdown() {
    hiddenBlock.classList.toggle(`${targetClass}__block--hidden`);
    container.classList.toggle(`${targetClass}--hidden`);
    if (container.classList.contains(`${targetClass}--hidden`)) {
      button.textContent = 'Подробнее';
    } else {
      button.textContent = 'Свернуть';
    }
  }
}

export default renderDropdown;