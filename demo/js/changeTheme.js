var $button = document.querySelector('.theme-button');
var $body = document.querySelector('body');
var $charts = document.querySelectorAll('.echarts-line');
$button.addEventListener('click',function(){
    var inner = $button.innerHTML.toLocaleLowerCase();
    var inner = inner === 'dark' ? 'light' : 'dark';
    $button.innerHTML = inner
    if( inner === 'light' ){
        $body.style.backgroundColor = 'transparent';
        $charts.forEach(function(it){
            it.style.backgroundColor = 'transparent';
        })
    }else{
        $body.removeAttribute('style');
        $charts.forEach(function(it){
            it.removeAttribute('style');
        })
    }

    initChart && initChart( inner.trim() );
})