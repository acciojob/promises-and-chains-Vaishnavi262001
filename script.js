const form = document.getElementById("voteForm");
  const ageInput = document.getElementById("age");
  const nameInput = document.getElementById("name");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const age = parseInt(ageInput.value);
    const name = nameInput.value.trim();

    if (!age || !name) {
      alert("Please enter valid details"); // fixed: no period
      return;
    }

    new Promise((resolve) => {
      setTimeout(() => {
        if (age > 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          resolve(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    }).then((message) => alert(message));
  });