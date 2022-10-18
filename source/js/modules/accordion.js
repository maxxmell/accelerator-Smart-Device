function renderAccordion(targetClass, maxViewport) {
  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  let accordion = document.querySelector(`.${targetClass}`);
  hideAll();

  window.addEventListener('resize', function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < maxViewport) {
      accordion.addEventListener('click', change);
    } else {
      accordion.removeEventListener('click', change);
    }
  }, false);

  function change(event) {
    let targetElement = event.target;
    if (!(targetElement.classList.contains(`${targetClass}__header`))) {
      return;
    }
    if (targetElement.classList.contains(`${targetClass}__header--selected`)) {
      hideAll();
    } else {
      hideAll();
      targetElement.classList.add(`${targetClass}__header--selected`);
      showBlock(targetElement.nextElementSibling);
    }
  }

  function hideAll() {
    let headerElement = accordion.querySelectorAll(`.${targetClass}__header`);
    let blockElement = accordion.querySelectorAll(`.${targetClass}__block`);
    for (let i = 0; i < headerElement.length; i++) {
      headerElement[i].classList.remove(`${targetClass}__header--selected`);
    }
    for (let i = 0; i < blockElement.length; i++) {
      blockElement[i].classList.add(`${targetClass}__block--closed`);
    }
  }

  function showBlock(currentBlock) {
    currentBlock.classList.remove(`${targetClass}__block--closed`);
  }
}

export default renderAccordion;
