// 该文件使用 getReactDom api 生成 dom，提高页面渲染性能
import React from 'react';
import hiprint from "easy-print";

import orderPandel from './panel';
import CODImg from './cod.jpg';
import converResDataToPrintData from './adapter';

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
  cod: CODImg,
  table: [
    { weight: '230', name: 'dfx' }
  ]
});

interface IProps {
  printList: any;
}

class Print extends React.PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props);

    (this as any).printComponent = React.createRef();
  }

  public handlePrint = () => {
    hiprintTemplate.printByHtml(document.getElementById('previewDiv'));
  };

  render() {
    const { printList } = this.props;
    const printData = converResDataToPrintData(printList);
    return (
        <div id='previewDiv' ref={(this as any).printComponent}>
          {hiprint.getReactDom(orderPandel, printData)}
        </div>
    );
  }
}

export default Print;
