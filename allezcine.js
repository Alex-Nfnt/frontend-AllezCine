// function clic() {
//   document.getElementById('form1').style.display = "none";
//   // document.getElementById('form2').style.display = "block";
//
// }

// $("#hide").click(function() {
//   $("form1").hide();
// });
//
// $("#show").click(function() {
//   $("form2").show();
// });

//
// function clic() {
//
//   $("form1").hide();
//   $("form2").show();
//
// }

// $(document).ready(function() {
//   $('.animated-icon1,.animated-icon3,.animated-icon4').click(function() {
//     $(this).toggleClass('open');
//   });
// });

$(document).ready(function() {
  // Activate Carousel
  $("#myCarousel").carousel();

  // Enable Carousel Indicators
  $(".item1").click(function() {
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function() {
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function() {
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function() {
    $("#myCarousel").carousel(3);
  });
  // Enable Carousel Controls
  $(".left").click(function() {
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function() {
    $("#myCarousel").carousel("next");
  });
});