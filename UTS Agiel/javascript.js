var tombolmenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function KlikMenu() {
  tombolmenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}
$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    KlikMenu();
  }
})


// check lebar
$(window).resize(function () {
  var width = $(window).width();
  if (width > 989) {
    menu.css("display", "block");
    // display:block
  } else {
    menu.css("display", "none");
  }
  KlikMenu();
});

//efek scroll
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).ready(function () {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 0) {
      $("nav").addClass("putih");
    } else {
      $("nav").removeClass("putih");
    }
  });
});