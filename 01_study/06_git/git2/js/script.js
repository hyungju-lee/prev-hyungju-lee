(function (win, $) {
    var menu = {
        init: function () {
            this.setElements();
            this.bindEvents();
        },
        setElements: function () {
            this.btn = $('.btn-close');
            this.menu = $('.menu');
        },
        bindEvents: function () {
            this.btn.on('click', this.menuOnOff);
        },
        menuOnOff: function () {
            $(this).toggleClass('is-active');
            menu.menu.toggleClass('is-active');
        },
    };
    var ajaxFunc = {
        init: function () {
            this.setElements();
            this.bindEvents();
        },
        setElements: function () {
            this.tit = $('.tit');
            this.btn = $('.btn');
            this.htmlFormat = $('.html');
            this.filename = null;
        },
        bindEvents: function () {
            this.tit.on('click', this.titIsActive);
            this.btn.on('click', this.saveFileName);
            this.btn.on('click', $.proxy(this.loadDoc, this));
        },
        titIsActive: function () {
            $(this).toggleClass('is-active');
        },
        saveFileName: function () {
            ajaxFunc.sort = $(this).parents('.menu-area').attr('data-sort');
            ajaxFunc.filename = $(this).attr('data-name');
            ajaxFunc.btn.removeClass('on');
            $(this).addClass('on');
        },
        loadDoc: function () {
            $.ajax({
                url: this.sort + "/" + this.filename + ".html",
                method: "GET",
                dataType: 'html',
                statusCode: {
                    404: function () {
                        ajaxFunc.htmlFormat.text('페이지를 찾지 못했습니다.');
                    }
                },
                beforeSend: function () {
                    ajaxFunc.htmlFormat.text('로딩중');
                },
                success: function (result) {
                    ajaxFunc.htmlFormat.html(result);
                }
            })
        },
    };
    ajaxFunc.init();
    menu.init();
})(window, window.jQuery);