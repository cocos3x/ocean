function slider_item(index) {
    var owl = $("#slider_item" + index);
    owl.owlCarousel({
        itemsCustom: [
            [0, 1],
            [450, 1],
            [600, 3],
            [700, 3],
            [1000, 3],
            [1200, 3]
        ],
        pagination: false,
        navigation: false

    });
    $(".prev" + index).click(function() {
        owl.trigger('owl.prev');
    });

    $(".next" + index).click(function() {
        owl.trigger('owl.next');
    });
}

function slider_main() {
    var elem_main = document.getElementById('slider-main');
    var swiper = new Swiper(elem_main, {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 600,
        autoplay: 4000,
        loop: true,
        autoplayDisableOnInteraction: false
    });
}
/*
function slider_main1(){
    var owl = $("#slider_main");
    owl.owlCarousel({
        loop:true,
        margin:10,
        //Basic Speeds
        smartSpeed : 600,
        fluidSpeed : 100,
        navSpeed : 100,
        dotsSpeed : 100,
        nav:false,
        pagination: true,
        responsive:{
            0:{ items:1},
            600:{ items:1},
            1000:{ items:1}
        }
    })
    $(".prev-main").click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $(".next-main").click(function () {
        owl.trigger('next.owl.carousel');
    });
}*/
function slider_client() {
    var owl = $("#slider_client");
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        pagination: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })
    $(".prev-client").click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $(".next-client").click(function() {
        owl.trigger('next.owl.carousel');
    });
}


//set position
function setPositionBox(idBox, khung) {
    var viewdevice = $(window).width();
    if (viewdevice < 768) return;
    var obj = $('#' + idBox);
    var width = obj.parent().width();
    var colLeft = $('#col-main').outerHeight(true);
    var khung = 200;
    var pos = obj.outerHeight(true);
    var scrollVal = $(this).scrollTop();
    var x = colLeft - khung;
    if (scrollVal > pos) {
        //alert(scrollVal-pos);
        //alert(colLeft);
        //when scroll value reach to your selector
        obj.addClass('position-fix');
        obj.css('width', width);

        if (scrollVal >= x) {
            var top = -1 * (scrollVal - x);
            obj.css('top', top);
        } else {
            obj.css('top', 0);
        }

    } else {
        obj.removeClass('position-colright');
    }


}
$('document').ready(function() {
    $('.box-frm-search .fa-close').click(function() {
        $('.box-frm-search').hide();
    })
    $(".control-search").click(function() {
        $('.box-frm-search').toggle();
    });
    $('#nav_login').click(function() {
        $('#myModal').modal('show');
        $('#myModal').addClass('modal-login');
        $('#myModal .modal-footer').hide();
    });
})