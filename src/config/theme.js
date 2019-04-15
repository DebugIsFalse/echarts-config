export const types = ['dark', 'light']
export const getThemeType = function (config) {
    return types.includes(config.themeType) > 0 ? config.themeType : window._CHART_THEMETYPE_;
}