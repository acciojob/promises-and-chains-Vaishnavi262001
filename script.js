//your JS code here. If required.
// Select elements
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from reloading

  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  // Validation check
  if (name === "" || age === "") {
    alert("Please enter valid details.");
    return;
  }

  // Create a new Promise
  const checkVotingEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  });

  // Handle promise resolution/rejection
  checkVotingEligibility
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
