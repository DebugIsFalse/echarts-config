export const getLegend = function (type, config) {
    let legend = [];
    if (config.legend && config.legend.data.length === 0) {
        const charts = ['Pie', 'Funnel'];
        if (charts.includes(type)) {
            config.series.forEach((it) => {
                if (it.data) {
                    it.data.forEach((item) => {
                        item.name && legend.push(item.name);
                    })
                }
            })
        } else {
            config.series.forEach((it, index) => {
                it.name && legend.push(it.name)
            })
        }
    } else {
        legend = config.legend.data;
    }
    return legend;
}