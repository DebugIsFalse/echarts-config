
import colorConfig  from '../config/color';
export const lineBar = {
    grid : {
        top: '50px',
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    tooltip : {
        show: true,
        trigger: 'axis'
    },
    legend : {
        type: 'scroll',
        top : '10px',
        itemHeight: 4,
        textStyle: {
            padding: [0, 0, 2, 3],
            color: colorConfig.FONTCOLOR
        },
        borderRadius : 4,
        data: []
    },
    xAxis : {
        type: 'category',
        boundaryGap:true,
        axisLine: {
            show: false,
            lineStyle : {
                color : colorConfig.AXISLINECOLOR
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle : {
                color : colorConfig.AXISLINECOLOR
            }
        },
        axisLabel: {
            color : colorConfig.FONTCOLOR
        }
    },
    yAxis : {
        type: 'value',
        boundaryGap:["0","23%"],
        axisLine: {
            show: false,
            lineStyle : {
                color : colorConfig.AXISLINECOLOR
            }
        },
        splitLine : {
            show : true,
            lineStyle : {
                color : colorConfig.AXISLINECOLOR
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            color: colorConfig.FONTCOLOR
        }
    }
};