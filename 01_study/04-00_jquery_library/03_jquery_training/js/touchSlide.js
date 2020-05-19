$(function() {
  var sliding = startClientX = startPixelOffset = pixelOffset = currentSlide = 0;
  slideCount = $('.slide').length;
  
  $('#slides').on('mousedown touchstart', slideStart);
  $('#slides').on('mouseup touchend', slideEnd);
  $('#slides').on('mousemove touchmove', slide);
  
  /**
  / 슬라이드 이벤트가 시작될 때 트리거됩니다.
  */
  function slideStart(event) {
    // 모바일 장치 인 경우 이벤트를 첫 번째 터치 포인트로 재정의
    if (event.originalEvent.touches) // touches는 
      event = event.originalEvent.touches[0];
    // 슬라이딩이 시작되지 않은 경우 현재 거리를 저장하여 향후 거리를 계산하십시오.
    if (sliding == 0) {
      sliding = 1; // Status 1 = slide started.
      startClientX = event.clientX; //clientX는 클라이언트 영역 내의 가로, 세로 좌표를 제공합니다. 여기서 클라이언트 영역은 현재 보이는 브라우저 화면이 기준이 됩니다.
    }
  }
  
  /** 이미지가 슬라이드 될 때 발생합니다.
  */
  function slide(event) {
    event.preventDefault();
    if (event.originalEvent.touches)
      event = event.originalEvent.touches[0];
    // 슬라이드 거리.
    var deltaSlide = event.clientX - startClientX;
    // 슬라이딩이 처음 시작되고 거리가있는 경우.
    if (sliding == 1 && deltaSlide != 0) {
      sliding = 2; // 상태를 '실제로 이동'으로 설정
      startPixelOffset = pixelOffset; // Store current offset
    }
    
    //  사용자가 이미지를 이동할 때
    if (sliding == 2) {
      // 사용자가 마우스를 움직일 때마다 1 픽셀 씩 움직입니다.
      var touchPixelRatio = 1;
      // 사용자가 경계를 벗어나지 않는지 확인
      if ((currentSlide == 0 && event.clientX > startClientX) ||
         (currentSlide == slideCount - 1 && event.clientX < startClientX))
        // 비율을 3으로 설정하면 사용자가 포인터를 1 픽셀 씩 움직일 때마다 이미지가 3 픽셀 씩 이동합니다. (고무 밴드 효과) (Rubber-band effect)
        touchPixelRatio = 3;
      // 이동 거리를 계산하십시오.
      pixelOffset = startPixelOffset + deltaSlide / touchPixelRatio;
      // 이동 적용 및 애니메이션 클래스 제거
      $('#slides').css('transform', 'translateX(' + pixelOffset + 'px').removeClass();
    }
  }
  
  /** 사용자 릴리스 포인터가 슬라이드 이동을 마치면.
  */
  function slideEnd(event) {
    if (sliding == 2){
      // Reset sliding.
      sliding = 0;
      // Calculate which slide need to be in view.
      currentSlide = pixelOffset < startPixelOffset ? currentSlide + 1 : currentSlide -1;
      // Make sure that unexisting slides weren't selected.
      currentSlide = Math.min(Math.max(currentSlide, 0), slideCount - 1);
      // Since in this example slide is full viewport width offset can be calculated according to it.
      pixelOffset = currentSlide * -$('body').width();
      // Remove style from DOM (look below)
      $('#temp').remove();
      // Add a translate rule dynamically and asign id to it
      $('<style id="temp">#slides.animate{transform:translateX(' + pixelOffset + 'px)}</style>').appendTo('head');
      // Add animate class to slider and reset transform prop of this class.
      $('#slides').addClass('animate').css('transform', '');
    }
  }
  
});