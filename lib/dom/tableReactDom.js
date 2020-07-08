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

const tableReactDom = function(options, item) {
  const theadDom = getTableTheadDom(options);
  const tbodyDom = getTableTbodyDom(options, item);
  const tableDom = React.createElement('table', {
    className: 'hiprint-printElement-tableTarget',
    style: {
      borderCollapse: 'collapse',
      width: '100%',
    }
  }, [theadDom, tbodyDom]);

  const tableContentDom = React.createElement('div', {
    className: 'hiprint-printElement-table-content',
    style: {
      width: '100%',
      height: '100%',
    },
  }, tableDom);
  const outerDom = React.createElement('div', {
    className: 'hiprint-printElement hiprint-printElement-table',
    style: {
      position: 'absolute',
      width: getWidth(options),
      // height: getHeight(options),
      left: getLeft(options),
      top: getTop(options)
    },
  }, tableContentDom);
  return outerDom;
}

const getTableTheadDom = (options) => {
  const tdDoms = options.columns[0].map((column) => {
    return React.createElement('td', {
      style: {
        fontSize: getFontSize(options),
        fontFamily: getFontFamily(options),
      }
    }, column.title);
  });
  const trDom = React.createElement('tr', {}, tdDoms);
  const theadDom = React.createElement('thead', {
    style: {
      backgroundColor: options.tableHeaderBackground
    }
  }, trDom);
  return theadDom;
}

const getTableTbodyDom = (options, item) => {
  const tableData = item[options.field];
  const trDoms = [];
  tableData.forEach(trData => {
    const tdDoms = options.columns[0].map((column) => {
      return React.createElement('td', {
        style: {
          width: getWidth(column),
          height: `${options.tableBodyRowHeight || 18}pt`,
          fontSize: getFontSize(options),
          fontFamily: getFontFamily(options),
          whiteSpace: column.whiteSpace || "",
          maxWidth: `${column.maxWidth || column.width}pt`,
          overflow: column.overflow || "",
        },
      }, trData[column.field]);
    });
    const trDom = React.createElement('tr', {}, tdDoms);
    trDoms.push(trDom);
  });
  const tbodyDom = React.createElement('tbody', {}, trDoms);
  return tbodyDom;
}

export default tableReactDom