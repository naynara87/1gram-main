/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ../demo1/src/js/pages/my-script.js ***!
  \******************************************/
// 툴팁활성화
$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('.custom-file-input').on('change', function () {
        var fileName = $(this).val();
        console.log(fileName);
        $(this).next('.custom-file-label').addClass("selected").html(fileName);
    });

})

/******/ })()
;
//# sourceMappingURL=my-script.js.map