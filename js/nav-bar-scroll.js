$(document).ready(function () {
  $(function () {
    var item = $("nav");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 135) {
        item.addClass("scroll");
      } else {
        item.removeClass("scroll");
      }
    });
  });
});
