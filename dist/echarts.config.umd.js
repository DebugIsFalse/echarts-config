(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.echartsConfig = {}));
}(this, function (exports) { 'use strict';

    var colorConfig = {
        COLORS : ['rgba(45,140,240,1)','rgba(0,210,179,1)','rgba(251,169,0,1)','rgba(242,112,54,1)','rgba(181,40,81,1)','rgba(45,51,138,1)', 'rgba(172,63,192,1)', 'rgba(102,58,183,1)','rgba(67,86,205,1)','rgba(16,157,88)','rgba(123,179,66,1)','rgba(191,197,33,1)'],
        FONTCOLOR : 'rgba(255,255,255,.55)',
        AXISLINECOLOR : '#324771',
        RADARAREACOLOR : 'rgba(255,255,255,.3)'
    };

    const lineBar = {
        grid : {
            top: '50px',
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        tooltip : {
            show: true,
            trigger: 'axis'
        },
        legend : {
            type: 'scroll',
            top : '10px',
            itemHeight: 4,
            textStyle: {
                padding: [0, 0, 2, 3],
                color: colorConfig.FONTCOLOR
            },
            borderRadius : 4,
            data: []
        },
        xAxis : {
            type: 'category',
            boundaryGap:true,
            axisLine: {
                show: false,
                lineStyle : {
                    color : colorConfig.AXISLINECOLOR
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle : {
                    color : colorConfig.AXISLINECOLOR
                }
            },
            axisLabel: {
                color : colorConfig.FONTCOLOR
            }
        },
        yAxis : {
            type: 'value',
            boundaryGap:["0","23%"],
            axisLine: {
                show: false,
                lineStyle : {
                    color : colorConfig.AXISLINECOLOR
                }
            },
            splitLine : {
                show : true,
                lineStyle : {
                    color : colorConfig.AXISLINECOLOR
                }
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                color: colorConfig.FONTCOLOR
            }
        }
    };

    const Pie = {
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

    const Radar = {
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
                color: colorConfig.FONTCOLOR
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

    const Scatter = {
        legend : {
            itemHeight: 10,
            itemWidth: 10,
            orient: 'horizontal',
            padding :[10,5],
            textStyle: {
                padding: [0, 0, 3, 3],
                color: colorConfig.FONTCOLOR
            },
            data: []
        },
        tooltip : {
            show: true,
            trigger: 'axis'
        },
        series : {
            type: 'scatter',
            data: []
        },
        xAxis : {
            boundaryGap:["0","23%"],
            axisLine: {
                show: true,
                lineStyle : {
                    color : colorConfig.AXISLINECOLOR
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                color : colorConfig.FONTCOLOR
            }
        },
        yAxis : {
            boundaryGap:["0","23%"],
            axisLine: {
                show: true,
                lineStyle : {
                    color : colorConfig.AXISLINECOLOR
                }
            },
            splitLine : {
                show : false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: colorConfig.FONTCOLOR
            }
        }
    };

    const TreeMap = {
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
    };

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var umd = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
    	module.exports = factory();
    }(commonjsGlobal, (function () {
    var isMergeableObject = function isMergeableObject(value) {
    	return isNonNullObject(value)
    		&& !isSpecial(value)
    };

    function isNonNullObject(value) {
    	return !!value && typeof value === 'object'
    }

    function isSpecial(value) {
    	var stringValue = Object.prototype.toString.call(value);

    	return stringValue === '[object RegExp]'
    		|| stringValue === '[object Date]'
    		|| isReactElement(value)
    }

    // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
    var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

    function isReactElement(value) {
    	return value.$$typeof === REACT_ELEMENT_TYPE
    }

    function emptyTarget(val) {
    	return Array.isArray(val) ? [] : {}
    }

    function cloneUnlessOtherwiseSpecified(value, options) {
    	return (options.clone !== false && options.isMergeableObject(value))
    		? deepmerge(emptyTarget(value), value, options)
    		: value
    }

    function defaultArrayMerge(target, source, options) {
    	return target.concat(source).map(function(element) {
    		return cloneUnlessOtherwiseSpecified(element, options)
    	})
    }

    function getMergeFunction(key, options) {
    	if (!options.customMerge) {
    		return deepmerge
    	}
    	var customMerge = options.customMerge(key);
    	return typeof customMerge === 'function' ? customMerge : deepmerge
    }

    function mergeObject(target, source, options) {
    	var destination = {};
    	if (options.isMergeableObject(target)) {
    		Object.keys(target).forEach(function(key) {
    			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    		});
    	}
    	Object.keys(source).forEach(function(key) {
    		if (!options.isMergeableObject(source[key]) || !target[key]) {
    			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    		} else {
    			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    		}
    	});
    	return destination
    }

    function deepmerge(target, source, options) {
    	options = options || {};
    	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

    	var sourceIsArray = Array.isArray(source);
    	var targetIsArray = Array.isArray(target);
    	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    	if (!sourceAndTargetTypesMatch) {
    		return cloneUnlessOtherwiseSpecified(source, options)
    	} else if (sourceIsArray) {
    		return options.arrayMerge(target, source, options)
    	} else {
    		return mergeObject(target, source, options)
    	}
    }

    deepmerge.all = function deepmergeAll(array, options) {
    	if (!Array.isArray(array)) {
    		throw new Error('first argument should be an array')
    	}

    	return array.reduce(function(prev, next) {
    		return deepmerge(prev, next, options)
    	}, {})
    };

    var deepmerge_1 = deepmerge;

    return deepmerge_1;

    })));
    });

    const isArray = function( data ){
        return Array.isArray( data );
    };

    const typeOf = function (obj) {
        const toString = Object.prototype.toString;
        const map = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object'
        };
        return map[toString.call(obj)];
    };
    const deepCopy = function (data) {
        const t = typeOf(data);
        let o;

        if (t === 'array') {
            o = [];
        } else if (t === 'object') {
            o = {};
        } else {
            return data;
        }

        if (t === 'array') {
            for (let i = 0; i < data.length; i++) {
                o.push(deepCopy(data[i]));
            }
        } else if (t === 'object') {
            for (let i in data) {
                o[i] = deepCopy(data[i]);
            }
        }
        return o;
    };

    function merge() {
        let arr = Array.prototype.slice.call(arguments);
        return umd.all(arr, {
            arrayMerge: function (destinationArray, sourceArray) {
                return sourceArray || [];
            }
        });
    }

    const getLegend = function(type,config){
        const legend = [];
        if( config.legend.data.length === 0 ){
            
            if( type === 'Pie' ){
                config.series.forEach((it)=>{
                    if( it.data ){
                        it.data.forEach((item)=>{
                            item.name && legend.push(item.name);
                        });
                    }
                }); 
            }else{
                config.series.forEach((it)=>{
                    it.name && legend.push(it.name);
                }); 
            }
        }

    };

    const updateTransverse = function(config){
        config.yAxis.type = "category";
        config.xAxis.type = "value";
        config.yAxis.splitLine.show = false;
        config.xAxis.splitLine.show = true;
    };

    const updatePieConfig = function(config,returnConfig){
        let isHide = false;
        if( isArray( config.series ) && config.series[0].radius && config.series[0].radius[0] === '0' ){
            isHide = true;
        }else if( Object.keys( config.series ).length > 0 && config.series.radius &&  config.series.radius[0] === '0' ){
            isHide = true;
        }
        if( isHide ){
            returnConfig.series.label.emphasis.show = false;
            returnConfig.tooltip.show = true;
        }
    };

    const chartConfig = {
        lineBar : lineBar,
        Pie : Pie,
        Radar : Radar,
        Scatter : Scatter,
        TreeMap : TreeMap
    };

    /*
     * 合并业务配置 返回一个图表的基础配置
    */

    const chartMerge = function(baseInfo = {},config = {}){
        
        if( Object.keys( baseInfo ).length === 0 ){
            return ;
        }
        const chartType = baseInfo.chartType;
        const returnConfig = deepCopy( chartConfig[baseInfo.chartType] );

        //设置 柱图线图的配置横向纵向
        const lineBarDrections = 'transverse';//横向
        if( chartType === 'lineBar' && lineBarDrections === baseInfo.direction ){
            updateTransverse(returnConfig);
        }
        //设置pie图如果全满隐藏显示中间区域显示tooltip
        if( chartType === 'Pie' ){
            updatePieConfig( config,returnConfig );
        }

        //fill base type
        for( let i in config ){
            let item = returnConfig[i];
            let citem = config[i];
            if( item ){
                let storeConfig = deepCopy( returnConfig[i] );
                if( isArray( citem ) ){
                    returnConfig[i] = [];
                    citem.forEach((it)=>{
                        returnConfig[i].push( merge( storeConfig,it ) );
                    });
                }else{
                    returnConfig[i] = merge( storeConfig,citem );
                }
            }else{
                returnConfig[i] = deepCopy( citem );
            }
        }

        //fill colors
        if( !returnConfig.color  ){
            returnConfig.color = deepCopy( colorConfig.COLORS );
        }
        //fill legend
        returnConfig.legend.data = getLegend( baseInfo.chartType,returnConfig );

        return returnConfig;
    };

    /*
        1、自定义生成一个新的chart基础对象
        2、可以提前预制基础图标库方便后面其他页面调用执行
        3、比如把图表基础配置放在vuex上，初始化预制业务通用的基础源代码以外的通用配置

    */

    const insertChartConfig = function( type = "",config = {} ){
        if( type === "" ){
            return;
        }
        chartConfig[type] = config;
    };

    /*
     * 自定义一套自己的配色方案
     * 1. 线条颜色 axisLineColor
     * 2. legend色块 colors
     * 3. 字体颜色 FONTCOLOR
    */
    const resetColorConfig = function(type = "",value){
        const types = ["COLORS", "FONTCOLOR","AXISLINECOLOR"];
        if( !types.includes( type ) ){
            return;
        }
        colorConfig[type] = value;
    };

    exports.chartMerge = chartMerge;
    exports.insertChartConfig = insertChartConfig;
    exports.resetColorConfig = resetColorConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
