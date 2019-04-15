/*
 * 饼图
 */
import {
    getColor
} from '../config/color';
import {
    getThemeType
} from '../config/theme';
import {
    PingFangSCRegular,
    robotoRegular
} from '../config/labelStyle';

export const Pie = function (config) {
    const colorConfig = getColor(getThemeType(config));
    return {
        grid: {
            show: false
        },
        legend: {
            right: '20px',
            top: 'middle',
            itemHeight: 10,
            itemWidth: 10,
            orient: 'vertical',
            textStyle: {
                padding: [0, 0, 3, 3],
                color: colorConfig.FONTCOLOR,
                fontFamily: PingFangSCRegular
            },
            data: []
        },
        tooltip: {
            show: false,
            trigger: 'item'
        },
        series: {
            type: 'pie',
            center: ['40%', '50%'],
            radius: ['50%', '80%'],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                    formatter: function (item) {
                        const it = item.data;
                        const unit = it.unit ? it.unit : '';
                        return it.name + '\n\n' + it.value + unit;
                    },
                    position: 'center'

                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        fontFamily: robotoRegular
                    }
                }
            },
            avoidLabelOverlap: false,
            data: []
        }
    };
}