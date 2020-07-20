import React from 'react';

import {
  getWidth,
  getHeight,
  getTop,
  getLeft,
  getBorderRadius,
} from '../utils';

const ovalReactDom = function(options, item) {
  let cssObj = {};
  if (options.styler) {
    cssObj = options.styler(item[options.field], options, null, item);
  }
  return React.createElement('div', {
    className: 'hiprint-printElement hiprint-printElement-oval',
    style: {
      position: 'absolute',
      borderImage: 'initial',
      width: getWidth(options),
      height: getHeight(options),
      left: getLeft(options),
      top: getTop(options),
      borderRadius: getBorderRadius(options),
      ...cssObj
    },
  });
};

export default ovalReactDom;