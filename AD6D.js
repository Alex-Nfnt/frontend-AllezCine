// DEBUT : VERIFICATION AGE
// var ageUtilisateur = prompt('Indiquez votre age');
// if (ageUtilisateur >= 18) {
//   alert('Vous allez être redirigé vers le site.');
// } else {
//   window.location.href = 'https://www.imdb.com';
// };
// FIN : VERIFICATION AGE

// DEBUT : Box de mise en garde de cookies
function closeCoock() {
  document.getElementById('closeCoockies').style.display = "none";
}

function fakya() {
  document.getElementById('closeCoockies').style.display = window.open("https://www.youtube.com/watch?v=LJP4ICgu-6g");
}
// FIN : BOX DE MISE EN GARDE DE COOCKIES

//  DEBUT BOUTON FLECHE VERS LE HAUT
var btn = document.createElement("BUTTON");
btn.style.backgroundImage = "url('icons/arrowUP.png')";
btn.style.height = "50px";
btn.style.width = "50px";
btn.style.borderRadius = "35px";
btn.style.border = "none";
btn.style.position = "fixed";
btn.style.bottom = "15px";
btn.style.right = "15px";

document.body.appendChild(btn);

//Scroll to top when arrow up clicked BEGIN
// $(window).scroll(function() {
//   var height = $(window).scrollTop();
//   if (height > 100) {
//     $('btn').fadeIn();
//   } else {
//     $('btn').fadeOut();
//   }
// });
// $(document).ready(function() {
//   $("btn").click(function(event) {
//     event.preventDefault();
//     $("html, body").animate({
//       scrollTop: 0
//     }, "slow");
//     return false;
//   });
//
// });
//Scroll to top when arrow up clicked END



//  FIN BOUTON FLECHE VERS LE HAUT