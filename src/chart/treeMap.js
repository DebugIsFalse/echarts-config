/*
 * 矩形树图
*/
import { getColor }  from '../config/color';
import { getThemeType } from '../config/theme';

export  const TreeMap = function( config ){
    const colorConfig = getColor( getThemeType( config ) );
    return {
        series : {
            name: 'brand',
            label : {
                rich : {
                    name : {
                        color : "#fff",
                        fontSize : 12,
                    },
                    des : {
                        color : "#fff",
                        height : 30,
                        padding : [10,0,0,14],
                        fontSize : 20
                    }
                }
            },
            type: 'treemap',
            fontFamily : 'Roboto-Regular',
            leafDepth: 1,
            roam: false,
            width: '100%',
            height: '90%',
            top: 'top',
            data: [],
            levels: [
                {
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
                                fontSize: 16
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
                                fontSize: 14
                            }
                        },
                        emphasis: {
                            textStyle: {
                                fontSize: 14
                            }
                        }
                    }
                }
            ],
            breadcrumb: {
                height: 25,
                bottom : 10,
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        color : colorConfig.TREEMAPBREADCOLOR
                    }
                }
            }
        }
    }
} 