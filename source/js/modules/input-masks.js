let maskedInputs = document.querySelectorAll('[data-mask]');

function maskInputs() {
  for (let index = 0; index < maskedInputs.length; index++) {
    maskedInputs[index].addEventListener('input', function () {
      maskInput(maskedInputs[index]);
    });
  }
}

function maskInput(input) {
  let mask = input.dataset.mask;
  let value = input.value;
  let literalPattern = /[0\*]/;
  let numberPattern = /[0-9]/;
  let newValue = '';
  try {
    let maskLength = mask.length;
    let valueIndex = 0;
    let maskIndex = 0;

    for (; maskIndex < maskLength;) {
      if (maskIndex >= value.length) {
        break;
      }

      if (mask[maskIndex] === '0' && value[valueIndex].match(numberPattern) === null) {
        break;
      }

      // Found a literal
      while (mask[maskIndex].match(literalPattern) === null) {
        if (value[valueIndex] === mask[maskIndex]) {
          break;
        }
        newValue += mask[maskIndex++];
      }
      newValue += value[valueIndex++];
      maskIndex++;
    }

    input.value = newValue;
  } catch (e) {
    reportError(e);
  }
}

export default maskInputs;
