$(".mdl-navigation__link").click(function(){
  if (!$(this).hasClass(".is-active")) {
    $(".mdl-navigation__link.is-active").removeClass(".is-active");
    $(this).addClass(".is-active");
  }
});
