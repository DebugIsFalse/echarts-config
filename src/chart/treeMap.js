/*
 * 矩形树图
 */
import {
    getColor
} from '../config/color';
import {
    getThemeType
} from '../config/theme';
import {
    font12,
    font14,
    font16,
    font20,
    robotoRegular,
    PingFangSCRegular
} from '../config/labelStyle'

export const TreeMap = function (config) {
    const colorConfig = getColor(getThemeType(config));
    return {
        series: {
            name: 'brand',
            label: {
                rich: {
                    name: {
                        color: "#fff",
                        fontSize: font12,
                        fontFamily: PingFangSCRegular
                    },
                    des: {
                        color: "#fff",
                        height: 30,
                        padding: [10, 0, 0, 14],
                        fontSize: font20,
                        fontFamily: PingFangSCRegular
                    }
                }
            },
            type: 'treemap',
            fontFamily: 'Roboto-Regular',
            leafDepth: 1,
            roam: false,
            width: '100%',
            height: '90%',
            top: 'top',
            data: [],
            levels: [{
                    color: colorConfig.COLORS
                },
                {
                    colorSaturation: [0.65],
                    label: {
                        normal: {
                            position: [10, 10],
                            textStyle: {
                                fontSize: 16
                            }
                        },
                        emphasis: {
                            position: [10, 10],
                            textStyle: {
                                fontSize: font16
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            gapWidth: 2,
                            borderWidth: 1
                        }
                    }
                },
                {
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: font14
                            }
                        },
                        emphasis: {
                            textStyle: {
                                fontSize: font14
                            }
                        }
                    }
                }
            ],
            breadcrumb: {
                height: 25,
                bottom: 10,
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        color: colorConfig.TREEMAPBREADCOLOR
                    }
                }
            }
        }
    }
}