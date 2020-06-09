import React from 'react';
import JsBarcode from 'jsbarcode';

import {
  getbarcodeMode,
  getColor,
  toPx,
  getPaddingTop,
  getPaddingBottom,
  getPaddingLeft,
  getPaddingRight,
  getTextAlign,
  getWidth,
  getHeight,
  getTop,
  getLeft,
} from '../utils';

const barcodeReactDom = function (options, item) {
  const svgDom = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  JsBarcode(svgDom, item[options.field], {
    format: getbarcodeMode(options),
    width: 1,
    textMargin: -1,
    lineColor: getColor(options) || "#000000",
    margin: 0,
    height: parseInt(toPx(options.height || 10) - (options.contentPaddingTop || 0) - (options.contentPaddingBottom || 0)),
    displayValue: !1
  });

  const barcodeContentDom = React.createElement('div', {
    className: 'hiprint-printElement-text-content hiprint-printElement-content',
    style: {
      width: '100%',
      height: '100%',
      paddingTop: getPaddingTop(options),
      paddingBottom: getPaddingBottom(options),
      paddingLeft: getPaddingLeft(options),
      paddingRight: getPaddingRight(options),
      textAlign: getTextAlign(options),
    },
    dangerouslySetInnerHTML: {
      __html: svgDom.outerHTML
    }
  });

  return React.createElement('div', {
    className: 'hiprint-printElement hiprint-printElement-text"',
    style: {
      position: 'absolute',
      width: getWidth(options),
      height: getHeight(options),
      top: getTop(options),
      left: getLeft(options),
    }
  }, barcodeContentDom);
};

export default barcodeReactDom;

