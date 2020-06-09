export const getPrintStyle = (paperType, height, width, orient) => {
  let str = '';
  if (paperType) {
    str += 'size:' + paperType + ' ' + (height > width ? 'portrait' : 'landscape') + ';';
  } else {
    str += 'size:' + width + 'mm ' + height + 'mm ' + (orient ? 1 == orient ? 'portrait' : 'landscape' : '') + ';';
  }
  return str;
};

export const getPageWidth = (panel) => {
  return panel.panels[0].width + 'mm';
};

export const getPageHeight = (panel) => {
  return panel.panels[0].height + 'mm';
};

export const getWidth = (options) => {
  return `${options.width || 0}pt`;
};

export const getHeight = (options) => {
  return `${options.height || 0}pt`;
};

export const getLeft = (options) => {
  return `${options.left || 0}pt`;
};

export const getTop = (options) => {
  return `${options.top || 0}pt`;
};

export const getBorderRadius = (options) => {
  return options.borderRadius || '50%';
};

export const getBorderWidth = (options) => {
  return `${options.borderWidth || 0.75}pt`;
};

export const getFontFamily = (options) => {
  return options.fontFamily || 'Microsoft YaHei';
};

export const getFontSize = (options) => {
  return `${options.fontSize || 9}pt`;
};

export const getFontWeight = (options) => {
  return options.fontWeight || 'normal';
};

export const getLineHeight = (options) => {
  return `${options.lineHeight || ''}pt`;
};

export const getLetterSpacing = (options) => {
  return options.letterSpacing || '';
};

export const getTextAlign = (options) => {
  return options.textAlign || '';
};

export const getVerticalAlign = (options) => {
  return options.textContentVerticalAlign || '';
};

export const getColor = (options) => {
  return options.color;
};

export const getPaddingTop = (options) => {
  return `${options.contentPaddingTop || 0}pt`;
};

export const getPaddingLeft = (options) => {
  return `${options.contentPaddingLeft || 0}pt`;
};

export const getPaddingBottom = (options) => {
  return `${options.contentPaddingBottom || 0}pt`;
};

export const getPaddingRight = (options) => {
  return `${options.contentPaddingRight || 0}pt`;
};

export const getbarcodeMode = (options) => {
  return options.barcodeMode || 'CODE128';
};

export const getTitle = (options) => {
  if (!options.hideTitle && options.title) {
    return options.title + '：';
  }
  return '';
};

const getDpi = () => {
  const _t2 = document.createElement("DIV");

  _t2.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
  document.body.appendChild(_t2);
  return _t2.offsetHeight;
};
const screenDpi = getDpi();

export const toPx = (t) => t * (screenDpi / 72);