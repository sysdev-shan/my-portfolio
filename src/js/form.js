// contact form checks. nothing is sent yet: swap the success dialog for a real request (Formspree, etc.) when ready

const contactForm = document.querySelector("#contact-form");
const formFields = contactForm.querySelectorAll("input, textarea");

// returns an error message, or "" if the field is ok
function getError(field) {
  const value = field.value.trim();

  if (field.name === "name" && value.length < 2) {
    return "Enter your name so I know who to reply to.";
  }
  if (field.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Enter an email address like name@example.com.";
  }
  if (field.name === "message" && value.length < 10) {
    return "Write at least 10 characters so I have something to reply to.";
  }
  return "";
}

// show or clear the error under a field, true if valid
function checkField(field) {
  const error = getError(field);
  document.querySelector("#" + field.id + "-error").textContent = error;

  if (error) {
    field.setAttribute("aria-invalid", "true");
  } else {
    field.removeAttribute("aria-invalid");
  }
  return error === "";
}

formFields.forEach(function (field) {
  field.addEventListener("blur", function () {
    if (field.value) {
      checkField(field);
    }
  });
  field.addEventListener("input", function () {
    if (field.hasAttribute("aria-invalid")) {
      checkField(field);
    }
  });
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let firstInvalid = null;
  formFields.forEach(function (field) {
    if (!checkField(field) && !firstInvalid) {
      firstInvalid = field;
    }
  });

  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }

  document.querySelector("#success-name").textContent = document.querySelector("#name").value.trim();
  document.querySelector("#success-modal").showModal();
  contactForm.reset();
});
