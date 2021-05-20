// 當DOM物件都載入完成時，調整會員權益表格
$(document).ready(resize_grade_table);

// 當視窗大小改變時，調整會員權益表格
$(window).resize(resize_grade_table);

function resize_grade_table() {
    var width = $(window).width();

    if (width < 992) {
        $(".grade-1").siblings().not(".td_title").css("display", "none");
        $(".grade-1").css("display", "table-cell");
        $(".grade_select-1").addClass("active");
    } else {
        $(".td_grade").css("display", "table-cell");
    };
}

$(".grade_select_box").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});

$(".grade_select-1").click(function () {
    var width = $(window).width();

    if (width < 992) {
        $(".grade_selected").text("依蘭會員權益");
        $(".grade-1").siblings().not(".td_title").css("display", "none");
        $(".grade-1").css("display", "table-cell");
    }
});

$(".grade_select-2").click(function () {
    var width = $(window).width();

    if (width < 992) {
        $(".grade_selected").text("茉莉會員權益");
        $(".grade-2").siblings().not(".td_title").css("display", "none");
        $(".grade-2").css("display", "table-cell");
    }
});

$(".grade_select-3").click(function () {
    var width = $(window).width();

    if (width < 992) {
        $(".grade_selected").text("橙花會員權益");
        $(".grade-3").siblings().not(".td_title").css("display", "none");
        $(".grade-3").css("display", "table-cell");
    }
});

$(".grade_select-4").click(function () {
    var width = $(window).width();

    if (width < 992) {
        $(".grade_selected").text("玫瑰會員權益");
        $(".grade-4").siblings().not(".td_title").css("display", "none");
        $(".grade-4").css("display", "table-cell");
    }
});

$(document).ready(function () {
    // 常見問與答
    $(".member_q").click(function(){
        $(this).toggleClass("open");
        $(this).next().slideToggle();
    });
});