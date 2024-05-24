import {
    isArray
} from './util';
export const updatePieConfig = function (config, returnConfig) {
    let isHide = false;
    if (isArray(config.series) && config.series[0].radius && config.series[0].radius[0] === '0') {
        isHide = true;
    } else if (Object.keys(config.series).length > 0 && config.series.radius && config.series.radius[0] === '0') {
        isHide = true;
    }
    if (isHide) {
        returnConfig.series.label.emphasis.show = false;
        returnConfig.tooltip.show = true;
    }
}