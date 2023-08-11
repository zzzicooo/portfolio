'use strict'

const fadeAnime = () => {
    $('.fadeTrigger').each(function(){
        let elemPos = $(this).offset().top + 350;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('headline');
        }
    });
}

const slideAnime = () => {
    $('.my-photo').each(function(){
        let elemPos = $(this).offset().top + 400;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fade-slide');
        }
    });
}

const slideAnimeReverse = () => {
    $('.about-text-block').each(function(){
        let elemPos = $(this).offset().top + 400;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fade-slide-reverse');
        }
    });
}

const scrollAnime = () => {
    $('.scrollTrigger').each(function(){
        let elemPos = $(this).offset().top + 300;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('bgextend');
        $(this).addClass('bgLRextend');
        }
    });
}

const scrollAnime2 = () => {
    $('.scrollTrigger2').each(function(){
        let elemPos = $(this).offset().top + 300;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('bgextend');
        $(this).addClass('bgRLextend');
        }
    });
}

const delayScrollAnime = () => {
    let time = 0.3;
    let value = time;
    $('.works-main-area').each(function(){
        let elemPos = $(this).offset().top + 330;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let childs = $(this).children();

        if(scroll >= elemPos - windowHeight){
            $(childs).each(function(){
                if(!$(this).hasClass("fade-up")){
                    $(this).css("animation-delay",value + "s");
                    $(this).addClass("fade-up");
                    value = value + time;
                }
            })
        }
    })
}

const delayScrollAnime2 = () => {
    let time = 0.3;
    let value = time;
    $('.works-sub-area').each(function(){
        let elemPos = $(this).offset().top + 200;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let childs = $(this).children();

        if(scroll >= elemPos - windowHeight){
            $(childs).each(function(){
                if(!$(this).hasClass("fade-up")){
                    $(this).css("animation-delay",value + "s");
                    $(this).addClass("fade-up");
                    value = value + time;
                }
            })
        }
    })
}

$(window).scroll( () => {
    fadeAnime();
    slideAnime();
    slideAnimeReverse();
    scrollAnime();
    scrollAnime2();
    delayScrollAnime();
    delayScrollAnime2();
});

const overlay = $("#js-overlay");

const modal = $("#js-modal");
const modal2 = $("#js-modal2");
const modal3 = $("#js-modal3");
const modal4 = $("#js-modal4");
const modal5 = $("#js-modal5");
const modal6 = $("#js-modal6");

const open = $(".js-open");
const open2 = $(".js-open2");
const open3 = $(".js-open3");
const open4 = $(".js-open4");
const open5 = $(".js-open5");
const open6 = $(".js-open6");

const close = $("#js-close");
const close2 = $("#js-close2");
const close3 = $("#js-close3");
const close4 = $("#js-close4");
const close5 = $("#js-close5");
const close6 = $("#js-close6");


open.on('click', function () {
  modal.addClass("open");
  overlay.addClass("open");
});
open2.on('click', function () {
  modal2.addClass("open");
  overlay.addClass("open");
});
open3.on('click', function () {
  modal3.addClass("open");
  overlay.addClass("open");
});
open4.on('click', function () {
  modal4.addClass("open");
  overlay.addClass("open");
});
open5.on('click', function () {
  modal5.addClass("open");
  overlay.addClass("open");
});
open6.on('click', function () {
  modal6.addClass("open");
  overlay.addClass("open");
});

close.on('click', function () {
  modal.removeClass("open");
  overlay.removeClass("open");
});
close2.on('click', function () {
  modal2.removeClass("open");
  overlay.removeClass("open");
});
close3.on('click', function () {
  modal3.removeClass("open");
  overlay.removeClass("open");
});
close4.on('click', function () {
  modal4.removeClass("open");
  overlay.removeClass("open");
});
close5.on('click', function () {
  modal5.removeClass("open");
  overlay.removeClass("open");
});
close6.on('click', function () {
  modal6.removeClass("open");
  overlay.removeClass("open");
});