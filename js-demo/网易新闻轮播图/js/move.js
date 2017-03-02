/**
 * Created by Administrator on 2016/11/5.
 */
function slowmove(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var flag=true;
        for(var attr in json){
            var inital=parseInt(getStyle(obj,attr));
            //attention,what we got is not only a number,we should use parseInt()函数去取得其数字的部分
            var target=json[attr];
            var step=(target-inital)/10;
            step=step>0?Math.ceil(step):Math.floor(step);
            if("opacity"==attr){
                if(attr in obj.style){
                    obj.style.opacity=target;
                }else{
                    obj.style.filter="alpha(opacity="+target*100+")";
                }
            }else if(attr=="zIndex"){
                obj.style.zIndex=json[zIndex];
            }
            else{
                obj.style[attr]=inital+step+"px";
            }


            if(target!=inital){
                flag=false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn()
            }
        }
    },30)
}
function getStyle(obj,attr) {
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return window.getComputedStyle(obj,null)[attr];
    }
}
