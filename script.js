$(function () {
    $(".item.1").animate({
        opacity: 1
    }, {
        duration: 600,
        queue: false
    });
    $(".item.1").animate({
        "margin-top": "0px"
    }, {
        duration: 600,
        specialEasing: {
            "margin-top": "easeOutCirc"
        },
        queue: false
    });
});



".item.2".t = setTimeout((function() {
$(function () {
    $(".item.2").animate({
        opacity: 1
    }, {
        duration: 600,
        queue: false

    });
    $(".item.2").animate({
        "margin-top": "0px"
    }, {
        duration: 600,
        specialEasing: {
            "margin-top": "easeOutCirc"
        },
        queue: false
    });
});
}), 200);




".item.3".t = setTimeout((function() {
$(function () {
    $(".item.3").animate({
        opacity: 1
    }, {
        duration: 600,
        queue: false
    });
    $(".item.3").animate({
        "margin-top": "0px"
    }, {
        duration: 600,
        specialEasing: {
            "margin-top": "easeOutCirc"
        },
        queue: false
    });
});
}), 400);
