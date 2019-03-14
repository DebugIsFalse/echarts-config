/*
 * 饼图
*/
import { getColor }  from '../config/color';
import { getThemeType } from '../config/theme';

export const Pie = function( config ){
    const colorConfig = getColor( getThemeType( config ) );
    return {
        grid : {
            show: false
        },
        legend : {
            right: '20px',
            top: 'middle',
            itemHeight: 10,
            itemWidth: 10,
            orient: 'vertical',
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
        series : {
            type: 'pie',
            center : ['40%','50%'],
            radius: ['50%', '80%'],
            hoverAnimation : false,
            label : {
                normal: {
                    show: false,
                    formatter : function(item){
                        const it = item.data;
                        const unit = it.unit ? it.unit : '';
                        return it.name + '\n\n' + it.value + it.unit;
                    },
                    position: 'center'
                    
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            //center: ['30%', '50%'],
            //是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠。如果不需要开启该策略，例如圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false
            avoidLabelOverlap: false,
            data: []
        }
    };
}