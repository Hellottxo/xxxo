let copyTextarea;

function getPx(str) {
  const len = str.length;
  return Number(str.slice(0, len - 2));
}

export default function calctextareaHeight(ele, value) {
  const style = window.getComputedStyle(ele, null);
  const {
    width,
    boxSizing,
    paddingTop,
    paddingBottom,
    borderWidth,
    fontSize,
    fontWeight,
  } = style;
  const styleMap = {
    width,
    'box-sizing': boxSizing,
    'padding-top': paddingTop,
    'padding-bottom': paddingBottom,
    'border-width': borderWidth,
    'font-size': fontSize,
    'font-weight': fontWeight,
  };

  if (!copyTextarea) {
    copyTextarea = document.createElement('textarea');
    document.body.appendChild(copyTextarea);
  }
  copyTextarea.value = value;
  Object.keys(styleMap).forEach((e) => {
    copyTextarea.style.setProperty(e, styleMap[e]);
  });
  const copyHeight = copyTextarea.scrollHeight;
  let height = '';
  if (boxSizing === 'content-box') {
    height = `${copyHeight - getPx(paddingTop) - getPx(paddingBottom)}px`;
  }
  if (boxSizing === 'border-box') {
    height = `${copyHeight - getPx(paddingTop) - getPx(paddingBottom)}px`;
  }
  document.body.removeChild(copyTextarea);
  copyTextarea = null;
  return height;
}
