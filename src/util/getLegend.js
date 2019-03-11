export const getLegend = function(type,config){
    const legend = [];
    if( config.legend.data.length === 0 ){
        
        if( type === 'Pie' ){
            config.series.forEach((it)=>{
                if( it.data ){
                    it.data.forEach((item)=>{
                        item.name && legend.push(item.name);
                    })
                }
            }) 
        }else{
            config.series.forEach((it)=>{
                it.name && legend.push(it.name)
            }) 
        }
    }

}