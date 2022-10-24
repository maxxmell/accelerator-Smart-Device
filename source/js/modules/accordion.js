function renderAccordion(targetClass, maxViewport) {
  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  let accordion = document.querySelector(`.${targetClass}`);
  hideAll();

  if (viewportWidth < maxViewport) {
    try {
      accordion.addEventListener('click', change);
    } catch (e) {
      reportError(e);
    }
  }

  window.addEventListener('resize', function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    try {
      if (viewportWidth < maxViewport) {
        accordion.addEventListener('click', change);
      } else {
        accordion.removeEventListener('click', change);
      }
    } catch (e) {
      reportError(e);
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
    try {
      for (let i = 0; i < headerElement.length; i++) {
        headerElement[i].classList.remove(`${targetClass}__header--selected`);
      }
      for (let i = 0; i < blockElement.length; i++) {
        blockElement[i].classList.add(`${targetClass}__block--closed`);
      }
    } catch (e) {
      reportError(e);
    }
  }

  function showBlock(currentBlock) {
    currentBlock.classList.remove(`${targetClass}__block--closed`);
  }
}

export default renderAccordion;
