$(document).ready(function () {
    var delta = 300,
        timer = null,
        timer2 = null;

    function sourceWrite(){
        $('style[data-style="flex"]').html(styleSheet());
        cssAdd();
    }

    function htmlAdd() {
        $('#tab1 code').html($('.example').html().trim().replace(/<div class="flexItem/gi, '\n&nbsp;&nbsp;&nbsp;&nbsp;<div class="flexItem').replace(/<\/div>$/, "\n</div>").replace(/</gi, '&lt;').replace(/>/gi, '&gt;'));
    }

    function cssAdd() {
        $('#tab2 code').html($('style[data-style="flex"]').html());
    }

    htmlAdd();
    cssAdd();

    var i = 0;
    $('.btn-add').on('click', function () {
        i++;
        $('<div class=' + '"' + 'flexItem item-num' + i + '">flex-item' + i + '</div>').appendTo('.flexBox');
        $('<div class="order"><span class="tit">item-num' + i + '요소의 order 속성값(숫자) : </span> <input type="text" placeholder="default 값 = 0" class="inp inp-order' + i + ' item-num' + i + '"><button type="button" class="btn btn-apply">적용</button></div>').appendTo('.flexItem-area-order');
        $('<div class="each-flex"><span class="tit">item-num' + i + '요소의 flex 값 : </span><br> <span class="tit">flex-grow :</span> <input type="text" placeholder="default 값 = 0" class="inp inp-grow' + i + '"> <br> <span class="tit">flex-shrink :</span> <input type="text" placeholder="default 값 = 0" class="inp inp-shrink' + i + '"><br><span class="tit">flex-basis :</span> <input type="text" placeholder="default 값 = auto" class="inp inp-basis' + i + '"><p class="em">flex-basis - (단위 반드시 입력, 0이어도 0px로..IE10 고려)</p><button type="button" class="btn btn-apply">적용</button></div>').appendTo('.flexItem-area-flex');
        $('<div class="align-self"><span class="tit">item-num' + i + '요소의 align-self 값 :</span><br><select class="sel sel-align-self' + i + '"><option value="auto">align-self:auto</option><option value="flex-start">align-self:flex-start</option><option value="flex-end">align-self:flex-end</option><option value="center">align-self:center</option><option value="baseline">align-self:baseline</option><option value="stretch">align-self:stretch</option></select></div>').appendTo('.flexItem-area-align-self');
        $('<div class="item-layout"><div>item-num'+i+'의 width, height</div><span class="tit">width : </span><input type="text" class="inp inp-item-width'+i+'" placeholder="ex) 100px, 100%..."> <br><span class="tit">height : </span><input type="text" class="inp inp-item-height'+i+'" placeholder="ex) 100px, 100%..."><br><button type="button" class="btn btn-apply">적용</button></div>').appendTo('.flexItem-layout-each');
        clearTimeout(timer2);
        timer2 = setTimeout(function(){
            htmlAdd();
            sourceWrite();
        }, delta);
    });
    $('.btn-delete').on('click', function () {
        i--;
        if (i < 1) {
            i = 0
        }
        $('.flexItem').last().remove();
        $('.order').last().remove();
        $('.each-flex').last().remove();
        $('.align-self').last().remove();
        $('.item-layout').last().remove();
        clearTimeout(timer2);
        timer2 = setTimeout(function(){
            htmlAdd();
            sourceWrite();
        }, delta);
    });

    $('.inp-radio').on('click', function () {
        if ($('.inp-radio[name="layout"]').eq(0).prop('checked') === true) {
            $('.note').show();
            $('.sel-flex-wrap').addClass('require');
            $('.inp-grow').addClass('require');
            $('.inp-shrink').addClass('require');
            $('.inp-basis').addClass('require');
            $('.inp-min-width').addClass('require');
            $('.inp-margin').addClass('require');
            $('.inp-padding').addClass('require');
        } else {
            $('.note').hide();
            $('.sel-flex-wrap').removeClass('require');
            $('.inp-grow').removeClass('require');
            $('.inp-shrink').removeClass('require');
            $('.inp-basis').removeClass('require');
            $('.inp-min-width').removeClass('require');
            $('.inp-margin').removeClass('require');
            $('.inp-padding').removeClass('require');
        }
    });

    $('.choice').on('change', '.sel', function () {
        clearTimeout(timer);
        timer = setTimeout(sourceWrite, delta);
    });
    $('.choice').on('click', '.btn-apply', function () {
        console.log('d')
        clearTimeout(timer);
        timer = setTimeout(sourceWrite, delta);
    });
});