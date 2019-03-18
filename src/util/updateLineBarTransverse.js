import { font14 } from '../config/labelStyle';
import { getColor } from '../config/color';
import { getThemeType } from '../config/theme';
export const updateTransverse = function(config){
    config.yAxis.type = "category";
    config.xAxis.type = "value";
    config.yAxis.splitLine.show = false;
    config.xAxis.splitLine.show = true;
    config.yAxis.axisLabel.fontSize = font14;
    config.yAxis.axisLabel.color = getColor( getThemeType(config) ).FONTCOLOR;
}