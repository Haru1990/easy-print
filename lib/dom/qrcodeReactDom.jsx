import React from 'react';
import QRCode from 'qrcode.react';

import {
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

const qrcodeReactDom = function (options, item) {
  // const svgDom = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  // new QRCode(svgDom, {
  //   width: parseInt(toPx(options.width || 20)),
  //   height: parseInt(toPx(options.height || 20)),
  //   colorDark: getColor(options) || "#000000",
  //   useSVG: !0,
  //   title: item[options.field],
  // }).makeCode(item[options.field]);
  const width = parseInt(toPx(options.width || 20) - (options.contentPaddingLeft || 0) - (options.contentPaddingRight || 0));
  const height = parseInt(toPx(options.height || 20) - (options.contentPaddingTop || 0) - (options.contentPaddingBottom || 0));
  const size = height < width ? height : width;
  const dom = (
    <QRCode
      value={item[options.field]}
      size={size}
      renderAs='svg'
    />
  );

  const qrcodeContentDom = React.createElement('div', {
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
    // dangerouslySetInnerHTML: {
    //   __html: svgDom.innerHTML
    // }
  }, dom);

  return React.createElement('div', {
    className: 'hiprint-printElement hiprint-printElement-text"',
    style: {
      position: 'absolute',
      width: getWidth(options),
      height: getHeight(options),
      top: getTop(options),
      left: getLeft(options),
    }
  }, qrcodeContentDom);
};

export default qrcodeReactDom;