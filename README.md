# easy-print
一个基于hiprint的打开即用的打印插件

## 安装使用

安装
```
npm i -D easy-print
```

使用
```
import hiprint from 'easy-print';
import panel from './panel.js';

// 初始化打印模板
const hiprintTemplate = new hiprint.PrintTemplate({ template: panel });
```

> 说明：panel是你编写的打印面板JSON对象，可以在hiprint官网自己进行配置生成。

## 推荐使用方式

推荐使用的业务Print组件结构  
|-----Print  
|--------index.js    
|--------adapter.js 
|--------panel.js

文件介绍：
- Print 文件夹就是一个打印面板组件，使用方式如下：
```
import React from 'React';
import Print from './Print';

const Demo = (() => {
  const ref = React.useRef();
  const printList = [{aa: 123}];
  return (
    <Print printList={data} ref={ref} />
  );
});
```
其中printList是需要批量打印的原始业务数据。
- index.js 就是这个面板打印的入口，提供预览页面以及调起浏览器打印的入口。
- adapter.js 就是用来将<Print>组件接受的业务打印数据转换成我们面板所需要的打印数据。
- panel.js  就是打印面板JSON对象。

> 上面的详细例子见 `example` 文件夹。