
var event1 = function(){
  var h = $(window).scrollTop();
  if(h>0){
    $("nav").addClass("active");
    $("nav").addClass("hidebg");
  }
  else if($("nav").hasClass("hidebg")){
    $("nav").removeClass("active");
  }

  if(h>=400 && h<1000){
    $(".self-driving img:nth-child(2),.self-driving img:nth-child(4)").addClass("active");
  }else if(h>=1000 && h<1600 ){
    $(".sound div img:nth-child(3),.sound div img:nth-child(5)").addClass("active");
  }else if(h>=1600 && h<2150){
    $(".leader div img:nth-child(4)").addClass("bounceInDown");
    $(".leader div img:nth-child(4)").css({"opacity":"1"});
  }else if(h>=2150 && h< 2800 ){
    $(".roster img").addClass("bounceIn");
  }
  if(h >=2500){
    $(".message .word").addClass("active");
    $(".message .word").css({"opacity":"1"});
  }
}

event1;
$(window).scroll(event1);

$('body').on('click','[data-link]',function(){
  var offset_top = $('.link').offset().top;
  $('html,body').stop().animate({scrollTop:offset_top},1000);
});

// 计时器
var clock = function(){
  var t = new Date();
  var m = t.getSeconds();
  if(m<10){
    m = '0' + m;
  }
  $(".time").html("0 : " + m);
};
setInterval("clock()",1000);
