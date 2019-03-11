import colorConfig from '../config/color';
export  const TreeMap = {
    series : {
        name: 'brand',
        type: 'treemap',
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
            itemStyle: {
                normal: {
                    borderWidth: 0
                }
            }
        }
    }
}