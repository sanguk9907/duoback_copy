$(document).ready(function(){

    $(".m-top-bar-wrap .search-icon").click(function(){
        if($(".m-top-bar-wrap .search-btn").hasClass("fa-search")){
            $(".m-top-bar-wrap .search-btn").removeClass("fa-search");
            $(".m-top-bar-wrap .search-btn").addClass("fa-times");
        }else{
            $(".m-top-bar-wrap .search-btn").removeClass("fa-times");
            $(".m-top-bar-wrap .search-btn").addClass("fa-search");
        }
        $(".m-top-bar-wrap .search-box").toggleClass("active");
    });

    $(".nav-wrap > ul > .more").click(function(){
        $(".m-more").toggleClass("active");
    });

    $(".banner-slide").slick({
        dots:true,
        autoplay : true ,
        autoplaySpeed : 3000 ,
        infinite: true ,
    });

    $(".section01 .slide-box").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false ,
    });

    $(".section02 .right").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false ,
        arrows : false ,
        dots:false,
    });

    $(".m-section02 .right").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false ,
        arrows : false ,
        dots:true,
    });

    $(".section05 > .inner > .slide-box").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false ,
    });

    $(".m-section05 > .inner > .slide-box").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false ,
        arrows : false ,
        dots : true ,
    });

    $(".section08 > .slide-wrap").slick({
        dots:true,
        slidesToShow: 3,
        infinite: false ,
    });

    $(".section09 > .inner").slick({
        dots:true,
        slidesToShow: 1,
        infinite: false ,
        arrows : false ,
    });

    $(".section10 .slide-box").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false ,
        arrows : false ,
    });

    $(".m-nav-slide").slick({
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false ,
        arrows : false ,
    });

    $(".nav-wrap > .all-cate").click(function(){
        if($(".all-cate-wrap").hasClass("active") == false){
            $(".all-cate-wrap").addClass("active");
        }else{$(".all-cate-wrap").removeClass("active")};
    });


    $(".section01 > .text-box > ul > li").click(function(){

        var indexNum = $(this).index();
        $(".section01 > .text-box > ul > li").removeClass("active");
        $(".section01 .slide-box").removeClass("active");
        $(this).addClass("active");
        $(".section01 .slide-box").eq(indexNum).addClass("active");
        $(".section01 .slide-box").slick('setPosition');
    });

    $(".section07 > .btn-wrap > li").click(function(){
        var indexNum = $(this).index();
        $(".section07 > .btn-wrap > li").removeClass("active");
        $(".section07 .content-wrap").removeClass("active");
        $(this).addClass("active");
        $(".section07 .content-wrap").eq(indexNum).addClass("active");
    });


    $(".section10 > .btn > ul > li").click(function(){
        var indexNum = $(this).index();
        $(".section10 > .btn > ul > li").removeClass("active");
        $(".section10 .slide-box").removeClass("active");
        $(this).addClass("active");
        $(".section10 .slide-box").eq(indexNum).addClass("active");
        $(".section10 .slide-box").slick('setPosition');
    });

    $(".fa-heart").click(function(){
        confirm("회원만 사용가능합니다. 로그인하시겠습니까?");
    });


    $(".top").click(function(){
        $("html ,body").scrollTop(0);
    });

    setInterval(function(){
        $(".section03 .time-wrap .sale").text("24");
    });

    $(".m-top-bar-wrap > .top-bar > .ham").click(function(){
        $(".m-nav").addClass("active");
        $(".m-nav-bg").addClass("active");
    });

    $(".m-nav-bg > .clo").click(function(){
        $(".m-nav").removeClass("active");
        $(".m-nav-bg").removeClass("active");
    });
});