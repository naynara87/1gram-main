/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ../demo1/src/js/pages/main.js ***!
  \*************************************/
//스크롤시 픽스
$(document).ready(function () {
    //hdOffset 에 #hd_wr의 좌표값 저장 
    var hdOffset = $('.header').offset();

    $(window).scroll(function () {
        //document가 hdOffset 값보다 많이 스크롤 되면 실행
        if ($(document).scrollTop() > hdOffset.top) {
            $("body").addClass('header-fixed');
        }
        //hdOffset 값 이하로 줄어들면 실행
        else {
            $('body').removeClass('header-fixed');
        }
    });
});

/******/ })()
;
//# sourceMappingURL=main.js.map