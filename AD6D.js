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
btn.setAttribute("aria-label", "hope");
btn.style.backgroundImage = "url('icons/arrowUP.png')";
btn.id = "hope";
btn.style.height = "50px";
btn.style.width = "50px";
btn.style.borderRadius = "15px";
btn.style.borderStyle = "none";
btn.style.position = "fixed";
btn.style.bottom = "15px";
btn.style.right = "15px";
btn.style.opacity = "0.6";

btn.onmouseout = function() {
  btn.style.opacity = "0.6";
};

btn.onmouseover = function() {
  btn.style.opacity = "1";
};


document.body.appendChild(btn);

btn.onclick = function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("hope").style.display = "block";
  } else {
    document.getElementById("hope").style.display = "none";
  }
};

// Envoi Contact
//
function sendClick() {
  var name = document.getElementById("userName").value;
  var email = document.getElementById("userEmail").value;
  var tel = document.getElementById("userTelephone").value;
  var message = document.getElementById("userMessage").value;
  alert("Bonjour,  " + name + "\n\nVotre email est :  " + email + "\n\nVotre numéro de téléphone est :  " + tel + "\n\nEt votre message est le suivant :  " + message);
};