const converResDataToPrintData = (responseData) => {

  const printData = [];

  responseData.forEach((item) => {
    // 接口数据--》打印数据 转换适配
    const printItem = item;
    printData.push(printItem);
  });

  return printData;
};


export default converResDataToPrintData;
