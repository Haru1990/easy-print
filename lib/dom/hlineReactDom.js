import React from 'react';

import {
  getWidth,
  getHeight,
  getTop,
  getLeft,
  getBorderWidth,
} from '../utils';

const hlineReactDom = function(options) {
  return React.createElement('div', {
    className: 'hiprint-printElement hiprint-printElement-hline',
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

export default hlineReactDom;