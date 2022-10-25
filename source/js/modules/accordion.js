function renderAccordion(targetClass, maxViewport) {
  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  let accordion = document.querySelector(`.${targetClass}`);
  let headerElement = document.querySelectorAll(`.${targetClass}__header`);
  let blockElement = document.querySelectorAll(`.${targetClass}__block`);

  hideAll();

  window.addEventListener('resize', function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    try {
      if (accordion) {
        if (viewportWidth < maxViewport) {
          accordion.addEventListener('click', change);
        } else {
          accordion.removeEventListener('click', change);
        }
      }
    } catch (e) {
      reportError(e);
    }
  }, false);

  if (viewportWidth < maxViewport) {
    window.dispatchEvent(new Event('resize'));
  }

  function change(event) {
    try {
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
    } catch (e) {
      reportError(e);
    }
  }

  function hideAll() {
    try {
      if (accordion && headerElement.length > 0 && blockElement.length > 0) {
        for (let i = 0; i < headerElement.length; i++) {
          headerElement[i].classList.remove(`${targetClass}__header--selected`);
        }
        for (let i = 0; i < blockElement.length; i++) {
          blockElement[i].classList.add(`${targetClass}__block--closed`);
        }
      }
    } catch (e) {
      reportError(e);
    }
  }

  function showBlock(currentBlock) {
    try {
      currentBlock.classList.remove(`${targetClass}__block--closed`);
    } catch (e) {
      reportError(e);
    }
  }
}

export default renderAccordion;
