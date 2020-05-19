// device height, element height (padding + border), element height (padding), element padding-top padding-bottom
var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    headClientHeight = document.getElementById("head").clientHeight,
    footClientHeight = document.getElementById("foot").clientHeight,
    headOffsetHeight = document.getElementById("head").offsetHeight,
    footOffsetHeight = document.getElementById("foot").offsetHeight,
    containerPaddingTop,
    containerpaddingBottom,
    minHeight;

// IE8, FireFox, Chrome cross browsing
if (window.getComputedStyle) {
    containerPaddingTop = window.getComputedStyle(document.getElementById("container")).getPropertyValue("padding-top");
    containerpaddingBottom = window.getComputedStyle(document.getElementById("container")).getPropertyValue("padding-bottom");
} else {
    containerPaddingTop = document.getElementById("container").currentStyle.paddingTop;
    containerpaddingBottom = document.getElementById("container").currentStyle.paddingBottom;
}

containerPaddingTop = parseInt(containerPaddingTop);
containerpaddingBottom = parseInt(containerpaddingBottom);
minHeight = winHeight - headOffsetHeight - footOffsetHeight - containerPaddingTop - containerpaddingBottom;
document.getElementById("contents").style.minHeight = minHeight + "px";

if(window.addEventListener){
    window.addEventListener("resize", function(){
        winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        minHeight = winHeight - headOffsetHeight - footOffsetHeight - containerPaddingTop - containerpaddingBottom;
        document.getElementById("contents").style.minHeight = minHeight + "px";
    })
}else if(window.attachEvent){
    window.onresize = function(){
        winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        minHeight = winHeight - headOffsetHeight - footOffsetHeight - containerPaddingTop - containerpaddingBottom;
        document.getElementById("contents").style.minHeight = minHeight + "px";
    }
}