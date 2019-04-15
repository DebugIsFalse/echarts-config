export const getLegend = function (type, config) {
    let legend = [];
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
    return legend;
}