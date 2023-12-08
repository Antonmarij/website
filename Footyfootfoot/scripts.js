/*Balance Script*/ 

function addToBalance(){
    const enteredAmount = document.getElementById("mnyInput").value;

    enteredAmount = parseFloat(enteredAmount);

    if (!isNaN(enteredAmount)) {
      const currentBalance = parseFloat(document.getElementById("accountBalance").innerText);
      const newBalance = currentBalance + enteredAmount;
      
      document.getElementById("accountBalance").innerText = newBalance.toFixed(2);

      localStorage.setItem("accountBalance", newBalance);

      document.getElementById("mnyInput").value = '';
    } else {
      alert("Please enter a valid number.");
    }
  }

  window.onload = function() {
    const storedBalance = localStorage.getItem("accountBalance");
    if (storedBalance !== null) {
      document.getElementById("accountBalance").innerText = parseFloat(storedBalance).toFixed(2);
    }
  }

/*---------------------------------------------------------------------------------------------------*/

/*PLAYERS SCRIPT */
window.onscroll = function() {amFunction()};
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function amFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}





function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}
