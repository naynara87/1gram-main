/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************************!*\
  !*** ../demo1/src/js/pages/custom-sweetalert2.js ***!
  \***************************************************/
// begin::연구실 이동 확인 버튼
$("#publish_confirm").click(function (e) {
    Swal.fire({
        title: "강의가 저장된 연구실로 이동합니다.",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "확인",
        showCancelButton: true,
        cancelButtonText: "취소",
        customClass: {
            confirmButton: "btn btn-success btn-lg font-weight-bold  mt-0",
            cancelButton: "btn btn-secondary btn-lg font-weight-bold  mt-0"
        }
    }).then((result) => {
        if (result) {
            location.href = "?cms=/lab/main"
        }
    });
});
// end::연구실 이동 확인 버튼
// begin::배포하기 저장버튼
$("#interSave").click(function (e) {
    Swal.fire({
        title: "저장되었습니다.",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "확인",
        customClass: {
            confirmButton: "btn btn-primary btn-lg font-weight-bold mt-0"
        }
    });
});
// end::배포하기 저장버튼

$("#pubAlertDefalt").click(function (e) {
    Swal.fire({
        title: "배포할 강의를 1개 이상 선택하세요.",
        icon: "warning",
        buttonsStyling: false,
        confirmButtonText: "확인",
        customClass: {
            confirmButton: "btn btn-primary btn-lg font-weight-bold mt-0"
        }
    });
});

$(".copy_btn").click(function (e) {
    Swal.fire({
        title: "수업 링크가 복사되었습니다.",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "확인",
        customClass: {
            confirmButton: "btn btn-primary btn-lg font-weight-bold mt-0"
        }
    });
});

$(".modify_btn").click(function (e) {
    Swal.fire({
        title: "선택한 강의를 수정하시겠습니까?",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "확인",
        showCancelButton: true,
        cancelButtonText: "취소",
        customClass: {
            confirmButton: "btn btn-success btn-lg font-weight-bold  mt-0",
            cancelButton: "btn btn-secondary btn-lg font-weight-bold  mt-0"
        }
    })
});

$(".remove_btn").click(function (e) {
    Swal.fire({
        title: "선택한 강의를 삭제하시겠습니까?",
        icon: "error",
        buttonsStyling: false,
        confirmButtonText: "삭제",
        showCancelButton: true,
        cancelButtonText: "취소",
        customClass: {
            confirmButton: "btn btn-danger btn-lg font-weight-bold  mt-0",
            cancelButton: "btn btn-secondary btn-lg font-weight-bold  mt-0"
        }
    })
});

/******/ })()
;
//# sourceMappingURL=custom-sweetalert2.js.map