import React from 'react';
import hiprint from "easy-print";

import orderPandel from './panel';
import COD from './cod.jpg';

const { useState, useRef } = React;

const hiprintTemplate = new hiprint.PrintTemplate({ template: orderPandel });

const testData = new Array(10).fill({
  customer_name: 'fangxu',
  project: '打印项目/P000014',
  station: '打印项目站点/P0000156',
  service_type: 'fangxu',
  start_station: '站点',
  start_station_name: 'fangxu-站点-1',
  start_station_address: 'fangxu-站点1地址',
  end_station: '站点',
  end_station_name: 'fangxu-站点-2',
  end_station_address: 'fangxu-站点2地址',
  order_id: '订单ID:XXXXXXXXXXXX',
  box_type: 'test',
  is_scatter: '散',
  barcode: '51995314782232-0001',
  qrcode: '51995314782232-0001',
  remark: '备注',
  cod: COD,
  table: [
    { weight: '230', name: 'dfx' }
  ]
});

const Print = () => {
  // printList 是业务返回回来的需要打印的数据，需要经过一层适配器转换，转换称打印真正接收的数据。
  const { printList } = props;
  // printData 打印接受的数据 
  const [printData, setPrintData] = useState([]);
  const [previewDiv, setPreviewDiv] = useState(null);

  useImperativeHandle(ref, () => ({
    handlePrint: () => {
      hiprintTemplate.printByHtml(previewDiv);
    },
  }));

  // useEffect(() => {
  //   setPrintData(converResDataToPrintData(printList));
  // }, [printList]);

  // 测试数据
  useEffect(() => {
    setPrintData(testData);
  }, []);

  useEffect(() => {
    const previewDom = hiprintTemplate.getSimpleHtml(printData);
    setPreviewDiv(previewDom);
  }, [printData]);

  return (
    <div dangerouslySetInnerHTML = {{ __html: previewDiv ? previewDiv.html() : '' }} />
  )
};

export default Print;