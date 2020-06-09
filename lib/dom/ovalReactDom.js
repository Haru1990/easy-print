import React from 'react';

import {
  getWidth,
  getHeight,
  getTop,
  getLeft,
  getBorderRadius,
} from '../utils';

const ovalReactDom = function(options) {
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
    },
  });
};

export default ovalReactDom;