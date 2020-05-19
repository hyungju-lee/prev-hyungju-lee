"use strict";

var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var list = document.querySelectorAll('.list');
var pagination = document.querySelector('.pagination');

for (var i = 0; i < list.length; i++) {
    var pageBtn = document.createElement('button');
    pageBtn.classList.add("page");
    pageBtn.classList.add("page" + (i + 1));
    pageBtn.innerHTML = '<span>' + (i + 1) + '</span>';
    pagination.appendChild(pageBtn);
}

prev.addEventListener('click', function () {
    return mySiema.prev();
});
next.addEventListener('click', function () {
    return mySiema.next();
});
var btn = document.querySelectorAll('.page');

function btn_click(idx) {
    btn[idx].onclick = function () {
        mySiema.goTo(idx);
    };
}

for (i = 0; i < btn.length; i++) {
    btn_click(i);
}

function connectionIndex() {
    var num = this.currentSlide;

    for (var e = 0; e < btn.length; e++) {
        btn[e].classList.remove('active');
        list[e].classList.remove('active');
    }

    btn[num].classList.add('active');
    list[num].classList.add('active');
    document.querySelector('.js-index').innerHTML = num + 1;
}

var mySiema = new Siema({
    loop: true,
    onInit: connectionIndex,
    onChange: connectionIndex
});