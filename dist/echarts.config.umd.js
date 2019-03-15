(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.echartsConfig = {}));
}(this, function (exports) { 'use strict';

    const COLORS = ['rgba(45,140,240,1)','rgba(0,210,179,1)','rgba(251,169,0,1)','rgba(242,112,54,1)','rgba(181,40,81,1)','rgba(45,51,138,1)', 'rgba(172,63,192,1)', 'rgba(102,58,183,1)','rgba(67,86,205,1)','rgba(16,157,88)','rgba(123,179,66,1)','rgba(191,197,33,1)'];
    const FUNNELCOLORS = ['#E4F3FF','#68B8FF','#2E9AFF','#2A79DC','#2149AB'];
    const FUNNELFONTCOLOR = 'rgba(255,255,255,1)';

    const RADARAREACOLOR_DARK = 'rgba(255,255,255,.15)';
    const FONTCOLOR_DARK = 'rgba(255,255,255,.55)';
    const AXISLINECOLOR_DARK = 'rgba(255,255,255,0.10)';
    const TREEMAPBREADCOLOR_DARK = "rgba(23,35,61,0.75)";
    const LEGENDCOLOR_DARK = "rgba(255,255,255,.75)";


    const RADARAREACOLOR_LIGHT = 'rgba(23,35,61,0.10)';
    const FONTCOLOR_LIGHT = 'rgba(0,0,0,.7)';
    const AXISLINECOLOR_LIGHT = 'rgba(23,35,61,0.10)';
    const TREEMAPBREADCOLOR_LIGHT = "rgba(23,35,61,0.75)";
    const LEGENDCOLOR_LIGHT = ' rgba(23,35,61,0.75)';


    const defaultsColor = {
        dark : {
            COLORS : COLORS,
            FONTCOLOR : FONTCOLOR_DARK,
            AXISLINECOLOR : AXISLINECOLOR_DARK,
            RADARAREACOLOR : RADARAREACOLOR_DARK,
            TREEMAPBREADCOLOR : TREEMAPBREADCOLOR_DARK,
            FUNNELCOLORS : FUNNELCOLORS,
            FUNNELFONTCOLOR : FUNNELFONTCOLOR,
            LEGENDCOLOR: LEGENDCOLOR_DARK
        },
        light : {
            COLORS : COLORS,
            FONTCOLOR : FONTCOLOR_LIGHT,
            AXISLINECOLOR : AXISLINECOLOR_LIGHT,
            RADARAREACOLOR : RADARAREACOLOR_LIGHT,
            TREEMAPBREADCOLOR : TREEMAPBREADCOLOR_LIGHT,
            FUNNELCOLORS : FUNNELCOLORS,
            FUNNELFONTCOLOR : FUNNELFONTCOLOR,
            LEGENDCOLOR : LEGENDCOLOR_LIGHT
        }
    };

    const getColor = function(type){
        return defaultsColor[type];
    };

    const updateColor = function(theme,type,value){
        defaultsColor[theme][type] = value;
    };

    const types = ['dark','light'];
    const getThemeType = function( config ){
        return types.includes( config.themeType ) > 0 ? config.themeType : window._CHART_THEMETYPE_;
    };

    const robotoRegular =  'Roboto-Regular';
    const PingFangSCRegular = 'PingFangSC-Regular';

    const font12 = '12';
    const font14 = '14';
    const font16 = '16';
    const font20 = '20';

    const lineBar = function(config){
        const colorConfig = getColor( getThemeType( config ) );
        return {
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
                    color: colorConfig.LEGENDCOLOR,
                    fontFamily : PingFangSCRegular
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
                    color : colorConfig.FONTCOLOR,
                    fontFamily : robotoRegular
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
                    show: false
                },
                axisLabel: {
                    color: colorConfig.FONTCOLOR,
                    fontFamily : robotoRegular
                }
            }
        };
    };

    /*
     * 饼图
    */

    const Pie = function( config ){
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
                    color: colorConfig.FONTCOLOR,
                    fontFamily : PingFangSCRegular
                },
                data: []
            },
            tooltip : {
                show: false,
                trigger: 'item'
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
                            return it.name + '\n\n' + it.value + unit;
                        },
                        position: 'center'
                        
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold',
                            fontFamily : robotoRegular
                        }
                    }
                },
                avoidLabelOverlap: false,
                data: []
            }
        };
    };

    /*
     * 雷达图
    */

    const Radar = function( config ){
        const colorConfig = getColor( getThemeType( config ) );
        return {
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
                    color: colorConfig.LEGENDCOLOR,
                    fontFamily : PingFangSCRegular
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
                name : {
                    textStyle : {
                        color : colorConfig.FONTCOLOR,
                        fontFamily : robotoRegular
                    }
                },
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
    };

    /*
     * 散点图
    */

    const Scatter = function( config ){
        const colorConfig = getColor( getThemeType( config ) );
        return {
            legend : {
                itemHeight: 10,
                itemWidth: 10,
                orient: 'horizontal',
                padding :[10,5],
                textStyle: {
                    padding: [0, 0, 3, 3],
                    fontFamily : PingFangSCRegular,
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
                    color : colorConfig.FONTCOLOR,
                    fontFamily : robotoRegular
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
                    color: colorConfig.FONTCOLOR,
                    fontFamily : robotoRegular
                }
            }
        };
    };

    /*
     * 矩形树图
    */

    const TreeMap = function( config ){
        const colorConfig = getColor( getThemeType( config ) );
        return {
            series : {
                name: 'brand',
                label : {
                    rich : {
                        name : {
                            color : "#fff",
                            fontSize : font12,
                            fontFamily : PingFangSCRegular
                        },
                        des : {
                            color : "#fff",
                            height : 30,
                            padding : [10,0,0,14],
                            fontSize : font20,
                            fontFamily : PingFangSCRegular
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
    };

    /*
     * 堆积图
    */

    const Funnel = function(config){
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
        if( config.legend && config.legend.data.length === 0 ){
            
            if( type === 'Pie' || type === 'Funnel' ){
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
        config.yAxis.axisLabel.fontSize = font14;
        config.yAxis.axisLabel.color = getColor('dark').FUNNELFONTCOLOR;
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
        TreeMap : TreeMap,
        Funnel : Funnel
    };

    window._CHART_THEMETYPE_ = window._CHART_THEMETYPE_ ? window._CHART_THEMETYPE_ : 'light';

    /*
     * 合并业务配置 返回一个图表的基础配置
    */

    const chartMerge = function(baseInfo = {},config = {}){
        
        if( Object.keys( baseInfo ).length === 0 ){
            return ;
        }
        const chartType = baseInfo.chartType;
        const returnConfig = chartConfig[baseInfo.chartType]( baseInfo );

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
            //特殊处理漏斗颜色色值
            if( baseInfo.chartType === 'Funnel' ){
                returnConfig.color = deepCopy( getColor('dark').FUNNELCOLORS );
            }else{
                returnConfig.color = deepCopy( getColor('dark').COLORS );
            }
            
        }
        //fill legend
        if( returnConfig.legend ){
            returnConfig.legend.data = getLegend( baseInfo.chartType,returnConfig );
        }

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
    const resetColorConfig = function(theme = 'dark',type = "",value){
        const types = ["COLORS", "FONTCOLOR","AXISLINECOLOR",'RADARAREACOLOR','TREEMAPBREADCOLOR','FUNNELCOLORS','FUNNELFONTCOLOR'];
        if( !types.includes( type ) || type === '' || !value ){
            return;
        }
        updateColor( theme,type,value );
    };

    exports.chartMerge = chartMerge;
    exports.insertChartConfig = insertChartConfig;
    exports.resetColorConfig = resetColorConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
