/****************************************** Hamburger menu open close *********************************************/
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

/****************************************** Circle with mouse movement *********************************************/
jQuery(document).ready(function () {
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
    $(document).mousemove(function (e) {
        mouseX = e.pageX - 20;
        mouseY = e.pageY - 20;
    });
    setInterval(function () {
        xp += ((mouseX - xp) / 6);
        yp += ((mouseY - yp) / 6);
        $("#circle").css({ left: xp + 'px', top: yp + 'px' });
    }, 20);
});

/****************************************** Down button animation here *********************************************/
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height < 150) {
        $('.downBtn').fadeIn();
    } else {
        $('.downBtn').fadeOut();
    }
});
$(document).ready(function () {
    $(".downBtn").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 650 }, 2000);
        return false;
    });
});

/****************************************** Change navbar color *********************************************/
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 450) {
            $(".topnav").css("background", "white");
            $(".nav").css("color", "black");
            $(".iconmenu").css("color", "black");
        }
        else {
            $(".topnav").css("background", "transparent");
            $(".nav").css("color", "white");
            $(".iconmenu").css("color", "white");
        }
    })
})
