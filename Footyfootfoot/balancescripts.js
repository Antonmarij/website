function addToBalance(){
    let enteredAmount = document.getElementById("mnyInput").value;

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
