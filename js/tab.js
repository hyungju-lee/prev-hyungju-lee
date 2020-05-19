// class 명으로 선택하기
var getElementsByClassNameCompatible = function (className) {
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(className);
    }
    var regEx = new RegExp('(^| )' + className + '( |$)');
    var nodes = new Array();
    var elements = document.body.getElementsByTagName("*");
    var len = elements.length;
    for (var i = 0; i < len; i++) {
        if (regEx.test(elements[i].className)) {
            nodes.push(elements[i]);
        }
    }
    elements = null;
    return nodes;
};

// jquery에 있고 js에 없는 replaceAll 프로퍼티 생성하기
String.prototype.replaceAll = function (org, dest) {
    return this.split(org).join(dest);
}

// tab 함수 시작
var btnTit = getElementsByClassNameCompatible("btn_tit"),
    ArrayBtnTit = [],
    txtName = new RegExp("^|txt_area|$"),
    pattArray = [new RegExp("result"), new RegExp("html"), new RegExp("css"), new RegExp("js")],
    activeClass = "on";

(function(){
    for (var i = 0; i < btnTit.length; i++) {
        ArrayBtnTit.push(btnTit[i]);
    }
})();

for (var i = 0; i < ArrayBtnTit.length; i++) {
    if(window.addEventListener){
        ArrayBtnTit[i].addEventListener("click", function () {
            for (var j = 0; j < pattArray.length; j++) {
                if (pattArray[j].test(this.className)) {
                    var tabTxt = this.parentElement.nextSibling.nodeName != "#text" ? this.parentElement.nextSibling : this.parentElement.nextSibling.nextSibling,
                        txtArea = tabTxt.childNodes,
                        realTxtArea = [],
                        thisMatch,
                        thisName,
                        hasClass = false;

                    (function(){
                        for (var k = 0; k < txtArea.length; k++) {
                            if (txtArea[k].nodeName != "#text") {
                                if (txtName.test(txtArea[k].className)) {
                                    realTxtArea.push(txtArea[k])
                                }
                            }
                        }
                    })();

                    (function(){
                        for (var k = 0; k < realTxtArea.length; k++) {
                            realTxtArea[k].className = realTxtArea[k].className.replace(/\b on\b/, "");
                        }
                    })();


                    thisMatch = this.parentElement.parentElement.querySelector("." + pattArray[j].toString().replaceAll("/", ""));
                    thisName = thisMatch.className.split(" ");

                    (function(){
                        for (var k = 0; k < thisName.length; k++) {
                            if (thisName[k] == activeClass) {
                                hasClass = true;
                            }
                        }
                    })();

                    if (!hasClass) {
                        thisName.push(activeClass);
                        thisMatch.className = thisName.join(" ");
                    }
                }
            }
        })
    }else if(window.attachEvent){
        ArrayBtnTit[i].onclick = function () {
            for (var j = 0; j < pattArray.length; j++) {
                if (pattArray[j].test(this.className)) {
                    var tabTxt = this.parentElement.nextSibling.nodeName != "#text" ? this.parentElement.nextSibling : this.parentElement.nextSibling.nextSibling,
                        txtArea = tabTxt.childNodes,
                        realTxtArea = [],
                        thisMatch,
                        thisName,
                        hasClass = false;

                    (function(){
                        for (var k = 0; k < txtArea.length; k++) {
                            if (txtArea[k].nodeName != "#text") {
                                if (txtName.test(txtArea[k].className)) {
                                    realTxtArea.push(txtArea[k])
                                }
                            }
                        }
                    })();

                    (function(){
                        for (var k = 0; k < realTxtArea.length; k++) {
                            realTxtArea[k].className = realTxtArea[k].className.replace(/\b on\b/, "");
                        }
                    })();

                    thisMatch = this.parentElement.parentElement.querySelector("." + pattArray[j].toString().replaceAll("/", "")),
                    thisName = thisMatch.className.split(" ");

                    (function(){
                        for (var k = 0; k < thisName.length; k++) {
                            if (thisName[k] == activeClass) {
                                hasClass = true;
                            }
                        }
                    })();

                    if (!hasClass) {
                        thisName.push(activeClass);
                        thisMatch.className = thisName.join(" ");
                    }
                }
            }
        }
    }
}