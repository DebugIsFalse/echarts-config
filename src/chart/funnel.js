/*
 * 堆积图
*/
import { getColor }  from '../config/color';
import { getThemeType } from '../config/theme';

export const Funnel = function(config){
    const colorConfig = getColor( getThemeType( config ) );
    return {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
        },
        series : {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 20,
            bottom: 20,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            label: {
                show: true,
                position: 'inside',
                textBorderColor : "rgba(0,0,0,.8)",
                textShadowOffsetX : 3,
                textShadowOffsetY : 8,
                color : colorConfig.FUNNELFONTCOLOR
            },
            labelLine: {
                length: 30,
                lineStyle: {
                    width: 1,
                    type: 'solid',
                    color : colorConfig.RADARAREACOLOR
                }
            },
            itemStyle: {
                borderWidth : 0
            }
        }
    }
}