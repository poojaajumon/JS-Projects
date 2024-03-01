// Get the password input element
var password = document.getElementById("pass");

// Get the strength indicator element
var strength = document.getElementById("para");

// Define the regular expressions for different password criteria
var lowerCase = /[a-z]/;
var upperCase = /[A-Z]/;
var number = /[0-9]/;
var specialChar = /[@#&!]/;

// Add an event listener for keyup event on the password input
password.addEventListener("keyup", function() {
  // Get the password value
  var value = password.value;

  // Initialize the strength value
  var strengthValue = 0;

  // Check if the password meets the criteria and increment the strength value accordingly
  if (lowerCase.test(value)) strengthValue++;
  if (upperCase.test(value)) strengthValue++;
  if (number.test(value)) strengthValue++;
  if (specialChar.test(value)) strengthValue++;
  if (value.length > 12) strengthValue++;

  // Set the strength indicator color and text based on the strength value
  switch (strengthValue) {
    case 0:
      strength.style.color = "red";
      strength.textContent = "Weak";
      break;
    case 1:
      strength.style.color = "red";
      strength.textContent = "Weak";
      break;
    case 2:
      strength.style.color = "orange";
      strength.textContent = "Medium";
      break;
    case 3:
      strength.style.color = "orange";
      strength.textContent = "Medium";
      break;
    case 4:
      strength.style.color = "green";
      strength.textContent = "Strong";
      break;
    case 5:
      strength.style.color = "green";
      strength.textContent = "Strong";
      break;
  }
});
