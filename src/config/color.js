const COLORS = ['rgba(45,140,240,1)','rgba(0,210,179,1)','rgba(251,169,0,1)','rgba(242,112,54,1)','rgba(181,40,81,1)','rgba(45,51,138,1)', 'rgba(172,63,192,1)', 'rgba(102,58,183,1)','rgba(67,86,205,1)','rgba(16,157,88)','rgba(123,179,66,1)','rgba(191,197,33,1)'];
const FUNNELCOLORS = ['#E4F3FF','#68B8FF','#2E9AFF','#2A79DC','#2149AB'];
const FUNNELFONTCOLOR = 'rgba(255,255,255,1)';

const RADARAREACOLOR_DARK = 'rgba(255,255,255,.15)';
const FONTCOLOR_DARK = 'rgba(255,255,255,.55)';
const AXISLINECOLOR_DARK = 'rgba(255,255,255,0.10)';
const TREEMAPBREADCOLOR_DARK = "rgba(23,35,61,0.75)";
const LEGENDCOLOR_DARK = "rgba(255,255,255,.75)"


const RADARAREACOLOR_LIGHT = 'rgba(23,35,61,0.10)';
const FONTCOLOR_LIGHT = 'rgba(0,0,0,.7)';
const AXISLINECOLOR_LIGHT = 'rgba(23,35,61,0.10)';
const TREEMAPBREADCOLOR_LIGHT = "rgba(23,35,61,0.75)";
const LEGENDCOLOR_LIGHT = ' rgba(23,35,61,0.75)'


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
}

export const getColor = function(type){
    return defaultsColor[type];
}

export const updateColor = function(theme,type,value){
    defaultsColor[theme][type] = value;
}