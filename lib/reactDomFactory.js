import React from 'react';

import rectReactDom from './dom/rectReactDom';
import ovalReactDom from './dom/ovalReactDom';
import hlineReactDom from './dom/hlineReactDom';
import vlineReactDom from './dom/vlineReactDom';
import imageReactDom from './dom/imageReactDom';
import barcodeReactDom from './dom/barcodeReactDom';
import qrcodeReactDom from './dom/qrcodeReactDom.jsx';
import textReactDom from './dom/textReactDom';
import tableReactDom from './dom/tableReactDom';

import {
  getPrintStyle,
} from './utils';

const paperHeightTrim = 1;

const reactDomFactory = (panel, data) => {
  const { printElements, paperType, height, width, orient, topOffset, leftOffset } = panel.panels[0];
  const panelDomArr = [];

  data.forEach((item) => {
    const childDom = [];

    printElements.forEach((element) => {
      let reactDom = null;
      const { options, printElementType } = element;

      if (printElementType.type === 'rect') {
        reactDom = rectReactDom(options);
      } else if (printElementType.type === 'oval') {
        reactDom = ovalReactDom(options);
      } else if (printElementType.type === 'hline') {
        reactDom = hlineReactDom(options);
      } else if (printElementType.type === 'vline') {
        reactDom = vlineReactDom(options);
      } else if (printElementType.type === 'image') {
        if (options.field && item[options.field]) {
          reactDom = imageReactDom(options, item);
        }
      } else if (printElementType.type === 'text') {
        if (options.field && item[options.field]) {
          if (options.textType === 'barcode') {
            reactDom = barcodeReactDom(options, item);
          } else if (options.textType === 'qrcode') {
            reactDom = qrcodeReactDom(options, item);
          } else {
            reactDom = textReactDom(options, item);
          }
        }
      } else if (printElementType.type === 'tableCustom') {
        reactDom = tableReactDom(options, item);
      }

      childDom.push(reactDom);
    });

    const outerContentDom = React.createElement('div', {
      className: 'hiprint-printPaper-content',
      style: {
        top: (topOffset || 0) + 'pt',
        left: (leftOffset || 0) + 'pt',
      },
    }, childDom);

    const styleDom = React.createElement('style', {
      printstyle: 'true'
    }, '@page{border:0;padding:0cm;magin:0cm;' + getPrintStyle(paperType, height, width, orient) + '}');

    const outerPageDom = React.createElement('div', {
      className: 'hiprint-printPaper',
      // originalHeight: '150',
      style: {
        width: width  + 'mm',
        height: (height - paperHeightTrim) + 'mm',
      },
    }, outerContentDom);

    const outerPanelDom = React.createElement('div', {
      className: 'hiprint-printPanel panel-index-0',
    }, [styleDom, outerPageDom]);

    panelDomArr.push(outerPanelDom);
  });

  const templateDom = React.createElement('div', {
    className: 'hiprint-printTemplate',
  }, panelDomArr);


  return templateDom;
};

export default reactDomFactory;