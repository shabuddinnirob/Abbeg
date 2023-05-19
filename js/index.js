$(function(){
    $(".banner_slide").slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows:false,
         autoplay:true,
         dots:true,
         fade:true,
         infinite:true,
         speed:1000,
         cssEase: 'linear'
    })
    $(".celebration_slick").slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows:true,
         autoplay:true,
         infinite:true,
         speed:1000,
         prevArrow:".arrow_left_icon",
         nextArrow:".arrow_right_icon",
         centerMode:true,
         centerPadding:'0px',
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
        
    })
})