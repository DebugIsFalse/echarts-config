import {
    COLORS
} from '../config/color';
export const updateBubbleColor = function (config, index) {
    const reg = /\,1\)/g;
    const color = COLORS[index];
    const color25 = color.replace(reg, ',.25)');
    config.itemStyle = config.itemStyle || {};
    config.itemStyle.normal = config.itemStyle.normal || {};
    config.itemStyle.normal.color = color25;
    config.itemStyle.normal.borderColor = color;
}