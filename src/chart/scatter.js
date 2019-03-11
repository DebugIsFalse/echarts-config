import colorConfig from '../config/color';
export const Scatter = {
    legend : {
        itemHeight: 10,
        itemWidth: 10,
        orient: 'horizontal',
        padding :[10,5],
        textStyle: {
            padding: [0, 0, 3, 3],
            color: colorConfig.FONTCOLOR
        },
        data: []
    },
    tooltip : {
        show: true,
        trigger: 'axis'
    },
    series : {
        type: 'scatter',
        data: []
    },
    xAxis : {
        boundaryGap:["0","23%"],
        axisLine: {
            show: true,
            lineStyle : {
                color : colorConfig.AXISLINECOLOR
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            color : colorConfig.FONTCOLOR
        }
    },
    yAxis : {
        boundaryGap:["0","23%"],
        axisLine: {
            show: true,
            lineStyle : {
                color : colorConfig.AXISLINECOLOR
            }
        },
        splitLine : {
            show : false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: colorConfig.FONTCOLOR
        }
    }
};