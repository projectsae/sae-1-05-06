$(window).on("scroll", function () {
  $(".inverse_scroll").css("bottom", $(window).scrollTop() * -1);
});
