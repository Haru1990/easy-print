import React from 'react';

import {
  getColor,
  getTextAlign,
  getWidth,
  getHeight,
  getTop,
  getLeft,
  getTitle,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getVerticalAlign,
  getLineHeight,
} from '../utils';

const textReactDom = function (options, item) {
  const textContentDom = React.createElement('div', {
    className: 'hiprint-printElement-text-content hiprint-printElement-content',
    style: {
      width: '100%',
      height: '100%',
    },
    dangerouslySetInnerHTML: {
      __html: getTitle(options) + item[options.field],
    },
  });
  // }, getTitle(options) + item[options.field]);

  return React.createElement('div', {
    className: 'hiprint-printElement hiprint-printElement-text hiprint-text-content-middle',
    style: {
      position: 'absolute',
      width: getWidth(options),
      height: getHeight(options),
      left: getLeft(options),
      top: getTop(options),
      fontFamily: getFontFamily(options),
      fontSize: getFontSize(options),
      fontWeight: getFontWeight(options),
      letterSpacing: getLetterSpacing(options),
      textAlign: getTextAlign(options),
      verticalAlign: getVerticalAlign(options),
      lineHeight: getLineHeight(options),
      color: getColor(options),
    }
  }, textContentDom);
};

export default textReactDom;