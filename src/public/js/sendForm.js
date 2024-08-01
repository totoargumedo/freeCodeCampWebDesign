const form = document.getElementById("survey-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const elements = event.target.elements;
  const preferences = [];
  for (let i = 0; i < elements.preferences.length; i++) {
    if (elements.preferences[i].checked) {
      preferences.push(elements.preferences[i].value);
    }
  }
  const data = {
    name: elements.name.value,
    email: elements.email.value,
    experience: elements.experience.value,
    difficulty: elements.difficulty.value,
    module: elements.module.valueAsNumber,
    date: elements.date.value,
    preferences: preferences,
    vsc: elements.vsc.value,
    comment: elements.comment.value,
  };

  fetch("/api/survey", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = "/survey-ok";
      } else {
        window.location.href = "/404";
      }
    })
    .catch((error) => {
      window.location.href = "/404";
    });
});
