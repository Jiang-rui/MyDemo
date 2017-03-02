/**
 * Created by Administrator on 2016/11/5.
 */
window.onload=function () {


    function $(id) {return document.getElementById(id);}
    var w_slider=$("w_slider");
    var slider_ctrl=$("slider_ctrl");
    var imgs=document.getElementsByClassName("img");
    var imglen=imgs.length;
    var timer=null;
    for(var i=0;i<imglen;i++){
        var span=document.createElement("span");
        span.setAttribute("class","slider-main-ctrl");
        span.innerHTML=imglen-i;
        slider_ctrl.insertBefore(span,slider_ctrl.children[1]);
    }
    slider_ctrl.children[1].setAttribute("class","slider-main-ctrl current");
    var spans=slider_ctrl.children;
    var spanlen=spans.length;
    var iNow=0;
    var scrollWidth=w_slider.clientWidth;
    for(i=1;i<imglen;i++){
       imgs[i].style.left=scrollWidth+"px";
    }
    for(var i=0;i<spanlen;i++){
        spans[i].onclick=function () {
            if(this.className=="slider-ctrl-left"){
                slowmove(imgs[iNow],{left:-scrollWidth});
                // iNow++<=imglen?iNow=iNow:iNow=
                ++iNow<imglen?iNow=iNow:iNow=0;
                imgs[iNow].style.left=scrollWidth+"px";
                slowmove(imgs[iNow],{left:0});
                setSquare();
            }
            else if(this.className=="slider-ctrl-right")
            {
                slowmove(imgs[iNow],{left:scrollWidth});
                --iNow>=0?iNow=iNow:iNow=imglen-1;
                imgs[iNow].style.left=-scrollWidth+"px";
                slowmove(imgs[iNow],{left:0});
                setSquare();
            }
            else{
                var that=this.innerHTML-1;
                if(that>iNow){
                    slowmove(imgs[iNow],{left:-scrollWidth});
                    imgs[that].style.left=scrollWidth+"px";
                }else if(that<iNow){
                    slowmove(imgs[iNow],{left:scrollWidth});
                    imgs[that].style.left=-scrollWidth+"px";
                }
                iNow=that;
                slowmove(imgs[iNow],{left:0});
                setSquare();
            }
        }
    }
    timer = setInterval(moveleft,3000);
    w_slider.onmouseover=function () {
        clearInterval(timer);
    }
    w_slider.onmouseout=function () {
        clearInterval(timer);
        timer=setInterval(moveleft,3000);
    }
    function moveleft() {
        slowmove(imgs[iNow],{left:-scrollWidth});
        // iNow++<=imglen?iNow=iNow:iNow=
        ++iNow<imglen?iNow=iNow:iNow=0;
        imgs[iNow].style.left=scrollWidth+"px";
        slowmove(imgs[iNow],{left:0});
        setSquare();
    }
    function setSquare() {
        for(var i=1;i<spanlen-1;i++){
            spans[i].setAttribute("class","slider-main-ctrl");
        }
        spans[iNow+1].setAttribute("class","slider-main-ctrl current");
    }
}