$(document).ready(function () {

    $(window).scroll(function () {

        if ($(document).scrollTop() > 0) {

            $(".profiles_menus").addClass("fixed_headers");

        } else {

            $(".profiles_menus").removeClass("fixed_headers");

        }

    });

});



var so = 60;
var sc = 60;
var sd = 60;
var se = 60;
var sm = 60;
var sg = 60
if (window.matchMedia('(max-width: 900px)').matches) {
    so = 60;
    sc = 60;
    sd = 60;
    se = 60;
    sm = 60;
    sg = 60
}



$('.why1').on("click", function () {
    $('html, body').animate({
        'scrollTop': $("#what_why_panel2").position().top - sc
    });
});
$('.how1').on("click", function () {
    $('html, body').animate({
        'scrollTop': $("#how_sec").position().top - sd
    });
});

$('.revis').on("click", function () {
    $('html, body').animate({
        'scrollTop': $("#rev_secs").position().top - se
    });
});

$('.blogs').on("click", function () {
    $('html, body').animate({
        'scrollTop': $("#blogs_secs").position().top - sm
    });
});

$('.gigs').on("click", function () {
    $('html, body').animate({
        'scrollTop': $("#gigs_secs").position().top - sg
    });
});




$(document).ready(function () {
    $(".add_pac").on("click", function () {
        id = $(this).data('id');
        $(".package_box_" + id).slideDown();
        $('.main_packages_area+' + id).addClass('intro-package');
        $('.add_del_' + id).show();
        $('.add_pac_' + id).hide();
        $('.add_pac_' + (id + 1)).show();
    });
    $(".add_del").on("click", function () {
        id = $(this).data('id');
        for (let i = id; i < 6; i++) {
            $(".package_box_" + i).slideUp();
            $('.main_packages_area' + i).removeClass('intro-package');
            $('.add_del_' + i).hide();
            $('.add_pac_' + i).hide();
            $('.package_name_' + i).val('');
            $('.package_description_' + i).val('');
            $('.package_price_' + i).val('');
        }
        $('.add_pac_' + id).show();
    });
});