# echarts-config
### 规范标准echarts初始化配置使用，让业务和公司的charts组件统一标准和色阶 基于echarts4

### 安装2
```js
npm install echarts-config --save-dev
```

### 使用

```js

//初始化主题色系默认是light浅色系   light|dark
window._CHART_THEMETYPE_ = 'dark'

import { 
    //传入chart借基础类型和要设置的对象
    chartMerge,
    //添加业务通用图表或者初始化覆盖业务组件
    insertChartConfig,
    //重置theme色系改变成自己业务所需要的色系
    resetColorConfig } from 'echarts-config';

```

### 具体实例在页面直接饮用参考demo使用