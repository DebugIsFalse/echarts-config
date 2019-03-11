import colorConfig from '../config/color';
export const Radar = {
    grid : {
        show: false,
    },
    legend : {
        itemHeight: 5,
        itemWidth: 20,
        orient: 'horizontal',
        padding :[15,5],
        textStyle: {
            padding: [0, 0, 3, 3],
            color: colorConfig.FONTCOLOR
        },
        data: []
    },
    tooltip : {
        show: false,
        trigger: 'axis'
    },
    radar : {
        radius : '65%',
        center: ['50%', '53%'],
        splitArea : {
            show : false
        },
        axisLine : {
            lineStyle: {
                color: colorConfig.RADARAREACOLOR
            }
        },
        splitLine : {
            show : true,
            lineStyle : {
                color : colorConfig.RADARAREACOLOR
            }
        }
    },
    series : {
        type: 'radar',
        data: []
    }
};