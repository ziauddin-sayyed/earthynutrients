//Selectors
var quotesSlider = $('.quotes-slider');
var productImageSlider = $('.product-image__slider');
var relatedProductsSlider = $('.related-products__slider');
var showComments = $('.show-comments__btn');
var navAccordian = $('.nav-accordian');
var homeProductSlider = $('.collection-slider .product-cards');
var homeLogosSlider = $('.logos__container .logos');

// UTIL
function isMobile(){
  return $(window).width() <= 1024;
}

// INIT
function _initQuoteSlider(container) {
  var options = {
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    fade: false,
    draggable: true,
    touchThreshold: 20,
    prevArrow: '<button class="slick-prev slick-arrow"></button>',
    nextArrow: '<button class="slick-next slick-arrow"></button>',
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  }

  container.slick(options);
}

function _initProductSlider(container) {
  var options = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: false,
    draggable: true,
    touchThreshold: 20,
    prevArrow: '<button class="slick-prev slick-prev-2 slick-arrow "></button>',
    nextArrow: '<button class="slick-next slick-next-2 slick-arrow"></button>',
    autoplay: false
  }

  container.slick(options);
}

function _initHomeProductSlider(container) {
  var options = {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    fade: false,
    draggable: true,
    touchThreshold: 20,
    prevArrow: '<button class="slick-prev slick-prev-2 slick-arrow"></button>',
    nextArrow: '<button class="slick-next slick-next-2 slick-arrow"></button>',
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true
        }
      }
    ]
  }

  container.slick(options);
}

function _initHomeLogosSlider(container) {
  var options = {
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: false,
    dots: false,
    fade: false,
    draggable: true,
    touchThreshold: 20,
    prevArrow: '<button class="slick-prev slick-prev-2 slick-arrow"></button>',
    nextArrow: '<button class="slick-next slick-next-2 slick-arrow"></button>',
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true
        }
      }
    ]
  }

  container.slick(options);
}


//open first product description tab
function _initProductTabs(){
  if(isMobile())
    $('.product__accordian--header').eq(0).click().toggleClass('active');
  else
    $('.product__tablinks').eq(0).click().toggleClass('active');
}

//product description tab controller
function openProductTab(evt, tabName) {
    var selectedTab = $('.' + tabName);
    if(isMobile()){
      selectedTab.slideToggle();
      $('.product__tabcontent').last().css('border-bottom', '1px solid #000');
    }
    else{
      $('.product__tabcontent').hide();
      $('.product__tablinks').removeClass('active');
      selectedTab.fadeIn();
    }

    $(evt.currentTarget).toggleClass('active');
}

function accordian(selector){
  selector.find('.accordian-content').slideToggle();
}

showComments.click(function(){
  $(this).fadeOut();
  $('.comment__extra').slideDown();
});

navAccordian.click(function(e){
  if(isMobile() && $(this).siblings(0).hasClass('active') != true){
    e.preventDefault();
  }

  $(this).siblings().toggleClass('active').slideToggle();
  $(this).find('svg').toggleClass('spin-once');
});

$(document).ready(function(){
  _initQuoteSlider(quotesSlider);
  _initProductSlider(productImageSlider);
  _initProductSlider(relatedProductsSlider);
  _initProductTabs();
  _initHomeProductSlider(homeProductSlider);
  _initHomeLogosSlider(homeLogosSlider);

  //set content margin based on header height
  var topMargin = $('.header__container').outerHeight();
  $('.main-content').css('margin-top', topMargin);

  //set recharge header text
  $('.recharge-header').text($('.rc_label__autodeliver').text().replace(/\s+/g, " "));
});