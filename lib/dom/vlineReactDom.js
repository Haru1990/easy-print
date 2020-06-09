import React from 'react';

import {
  getWidth,
  getHeight,
  getTop,
  getLeft,
  getBorderWidth,
} from '../utils';

const vlineReactDom = function(options) {
  return React.createElement('div', {
    className: 'hiprint-printElement hiprint-printElement-vline',
    style: {
      position: 'absolute',
      width: getWidth(options),
      height: getHeight(options),
      left: getLeft(options),
      top: getTop(options),
      borderWidth: getBorderWidth(options),
    },
  });
};

export default vlineReactDom;