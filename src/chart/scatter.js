/*
 * 散点图
*/
import { getColor }  from '../config/color';
import { getThemeType } from '../config/theme';
import { 
    PingFangSCRegular,
    robotoRegular
 } from '../config/labelStyle';

export const Scatter = function( config ){
    const colorConfig = getColor( getThemeType( config ) );
    return {
        legend : {
            itemHeight: 10,
            itemWidth: 10,
            orient: 'horizontal',
            padding :[10,5],
            textStyle: {
                padding: [0, 0, 3, 3],
                fontFamily : PingFangSCRegular,
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
                color : colorConfig.FONTCOLOR,
                fontFamily : robotoRegular
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
                color: colorConfig.FONTCOLOR,
                fontFamily : robotoRegular
            }
        }
    };
} 