/*
 * 雷达图
*/
import { getColor}  from '../config/color';
import { getThemeType } from '../config/theme';
import { 
    PingFangSCRegular,
    robotoRegular
 } from '../config/labelStyle';

export const Radar = function( config ){
    const colorConfig = getColor( getThemeType( config ) );
    return {
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
                color: colorConfig.LEGENDCOLOR,
                fontFamily : PingFangSCRegular
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
            name : {
                textStyle : {
                    color : colorConfig.FONTCOLOR,
                    fontFamily : robotoRegular
                }
            },
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
} 