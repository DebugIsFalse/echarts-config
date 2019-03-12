
import { lineBar } from './chart/lineBar';
import { Pie } from './chart/pie';
import { Radar } from './chart/radar';
import { Scatter } from './chart/scatter';
import { TreeMap } from './chart/treeMap';
import { Funnel } from './chart/funnel';
import { deepCopy,merge,isArray } from './util/util';
import { getColor } from './config/color';
import { getLegend } from './util/getLegend';
import { updateTransverse } from './util/updateLineBarTransverse'
import { updatePieConfig } from './util/updatePieConfig'


const chartConfig = {
    lineBar : lineBar,
    Pie : Pie,
    Radar : Radar,
    Scatter : Scatter,
    TreeMap : TreeMap,
    Funnel : Funnel
}

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
    const lineBarDrections = 'transverse'//横向
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
                    returnConfig[i].push( merge( storeConfig,it ) )
                })
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
}

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
}

/*
 * 自定义一套自己的配色方案
 * 1. 线条颜色 axisLineColor
 * 2. legend色块 colors
 * 3. 字体颜色 FONTCOLOR
*/
const resetColorConfig = function(type = "",value){
    const types = ["COLORS", "FONTCOLOR","AXISLINECOLOR",'RADARAREACOLOR','TREEMAPBREADCOLOR','FUNNELCOLORS','FUNNELFONTCOLOR'];
    if( !types.includes( type ) ){
        return;
    }
    colorConfig[type] = value;
}

export { chartMerge, insertChartConfig,resetColorConfig }