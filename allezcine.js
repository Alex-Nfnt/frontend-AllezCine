// bascule form/modal

$("#test").click(function() {
  $("#myModal").modal("toggle");
  $("#myModal1").modal("toggle");
});

// confirm mdp

function bordure() {
  var champA = document.getElementById("password").value;
  var champB = document.getElementById("confirm").value;

  if (champA == champB) {
    document.getElementById("confirm").style.border = "solid green";
    document.getElementById("password").style.border = "solid green";
  } else {
    document.getElementById("password").style.border = "solid red";
    document.getElementById("confirm").style.border = "solid red";
  }
}