import React from 'react';

import {
  getWidth,
  getHeight,
  getTop,
  getLeft,
} from '../utils';

const rectReactDom = function(options) {
  return React.createElement('div', {
    className: 'hiprint-printElement hiprint-printElement-rect',
    style: {
      position: 'absolute',
      borderImage: 'initial',
      width: getWidth(options),
      height: getHeight(options),
      left: getLeft(options),
      top: getTop(options)
    },
  });
};

export default rectReactDom;