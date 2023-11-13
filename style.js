const about = document.getElementById("about");
const aboutDropdown = document.getElementById("about-dropdown");

about.addEventListener("click", function () {
  if (aboutDropdown.style.display === "none") {
    aboutDropdown.style.display = "flex";
  } else {
    aboutDropdown.style.display = "none";
  }
});

function myFunction() {
  let menutoggle = document.querySelector(".toggle");
  menutoggle.classList.toggle("active");
}

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 20,
    time: 1200,
  });
  $(".toggle").click(function () {
    $(".home .bottom-header ul").toggleClass("active");
    // $("#toggle").toggleClass("active");
  });
  $("#about-dropdown .left-about #back-to-menu").click(function () {
    $("#about-dropdown").css("display", "none");
  });
  $("#phone").click(function () {
    $(".home .top-header .right-top-header .top-right-2").toggleClass("active");
    // $("#toggle").toggleClass("active");
  });

  $(".grid").click(function () {
    $(".home .top-header .right-top-header .top-right-both").toggleClass(
      "active"
    );
    // $("#toggle").toggleClass("active");
  });

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".home header").addClass("sticky");
    } else {
      $(".home header").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  nav: true,
  spaceBetween: 40,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
