$(document).ready(function () {



    // prevScrollTop - 스크롤하기 직전 스크롤 위치를 저장한다
    var prevScrollTop = $(window).scrollTop();
    // notice 영역의 bottom 부분의 위치를 저장한다.
    var noticeBottom = $('.notice').offset().top + $('.notice').outerHeight();


    $(window).on('scroll', function () {
        // scroll 이벤트가 발생시 현재 스크롤 위치를 저장한다.
        var winTop = $(window).scrollTop();
        var noti = $(".notice");

        // 그것을 스크롤하기 직전 위치와 비교한다. 양수이면 스크롤 방향은 아래
        // 음수이면 스크롤 방향은 위이다.
        if (winTop - prevScrollTop > 0) {
            // 스크롤 방향 : 아래
            // 스크롤 방향이 아래일 때 브라우저창 하단 부분이 notice 영역 하단 위치보다 더 밑에 위치하게 되면
            // nocie 영역에 fixed 란 클래스명을 추가해준다.
            // 이 fixed란 클래스명은 해당 notice 영역이 position:fixed 라는 속성이 부여되도 되는지 안되는지 구분을 짓기 위함이다.
            if (winTop + $(window).height() > noticeBottom) {
                noti.addClass('fixed');
            }
            // 스크롤 하고나면 직전 스크롤 위치를 항상 현재 스크롤탑 위치로 초기화한다.
            // 그래야 스크롤을 다시했을 때 위로하는지 아래로하는지 명확하게 알 수 있기 때문이다.
            prevScrollTop = winTop;
        } else if (winTop - prevScrollTop < 0) {
            // 스크롤 방향 : 위
            // 마찬가지로 스크롤 방향이 위일 때 브라우저창의 하단 위치가 notice영역의 하단 위치보다 더 밑에 위치할 때가 있다.
            // 그 때도 마찬가지로 fixed 클래스명을 추가해준다.
            if (winTop + $(window).height() > noticeBottom) {
                noti.addClass('fixed');
            } else if (winTop + $(window).height() <= noticeBottom) {
                if (noti.hasClass('fixed')) {
                    noti.addClass('fix');
                }
            }
            // 그리고 위 else if 구문에서 해당 notice 영역에 fixed 클래스명이 있는 지 없는지를 구분하여
            // fix 클래스명을 추가한다.
            prevScrollTop = winTop;
        }

        // 브라우저창의 하단부분이 notice 부분의 원래 하단 위치보다 밑에 위치했을 때
        // 그때도 notice 부분이 fix 상태라면 이상하다. 그때는 fix class명을 제거한다.
        if (winTop + $(window).height() > noticeBottom) {
            noti.removeClass('fix');
            prevScrollTop = winTop;
        } else if (winTop === 0 && noti.hasClass('fixed')) {
            noti.removeClass('fix fixed');
            prevScrollTop = winTop;
        }
        // fix된 notice 영역이 winTop = 0 위치에 도달했을 땐 원래 상태로 되돌아가게한다.

    });
})