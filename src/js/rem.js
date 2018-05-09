(function(doc,win){
    var docEl=doc.documentElement,
        resize='orientationchange' in window?'orientationchange':'resize';
        
        var recal=function(){
            var clientWidth=docEl.clientWidth;
            if(!clientWidth) return;
            docEl.style.fontSize=50*(clientWidth/320)+"px"
        }
        // recal()
        if(!doc.addEventListener) return;
        // 处理移动端打开的状态
        win.addEventListener(resize,recal,false)
        // DOMContentLoaded  浏览器内部加载执行
        doc.addEventListener("DOMContentLoaded",recal,false)

        // 注意混合app与移动端

})(document,window)