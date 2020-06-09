import React from 'react';

import {
  getWidth,
  getHeight,
  getTop,
  getLeft,
} from '../utils';

const imageReactDom = function(options, item) {
  const imgDom = React.createElement('img', {
    style: {
      width: '100%',
      height: '100%',
    },
    src: item[options.field]
  });

  const imgContentDom = React.createElement('div', {
    className: 'hiprint-printElement-image-content',
    style: {
      width: '100%',
      height: '100%',
    },
  }, imgDom);

  return React.createElement('div', {
    className: 'hiprint-printElement hiprint-printElement-image',
    style: {
      position: 'absolute',
      width: getWidth(options),
      height: getHeight(options),
      left: getLeft(options),
      top: getTop(options),
    }
  }, imgContentDom);
};

export default imageReactDom;