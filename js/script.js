$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});

const countE1 = document.getElementById("count");
countVisits();

function countVisits() {
  fetch('https://api.countapi.xyz/update/kirtangajjar.epizy.com/portfolio/?amount=1')
    .then((res) => res.json())
    .then((res) => {
      countE1.innerHTML = res.value;
    });
}

function validateMobile(elem) {
  var a = document.getElementById("validateMobi").value;

  if (isNaN(a)) {
    alert("Please Enter Valid Mobile Number !!!")
    return false;
  }

  if (a.length > 10) {
    alert("Please Enter 10 Digit Mobile Number !!!")
    return false;
  }

  if ((a.charAt(0) != 9) && (a.charAt(0) != 8) && (a.charAt(0) != 7) && (a.charAt(0) != 6)) {
    alert("Mobile Number Must Start With 9, 8, 7 And 6 !!!")
    return false;
  }
}