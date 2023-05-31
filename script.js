//VARIABLES

const contactBtn = document.getElementById("contact--btn");
const contactForm = document.getElementById("contact--form");
const closeBtn = document.getElementById("close--btn");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone-number");
const submit = document.getElementById('submit--btn');
const phoneErr = document.getElementById('phone-error');
const nameErr = document.getElementById('name-error');
const emailErr = document.getElementById('email-error');
const bodySec2 = document.getElementById('body-sec2');
let fullNameVal;
let emailVal;
let phoneVal;

//FUNCTIONS

contactBtn.addEventListener("click", (event) => {
  contactForm.style.scale = "1";
  contactForm.classList.add('transition')
});

closeBtn.addEventListener("click", (event) => {
  contactForm.style.scale = "0";
});

//Get form input value

function valuesOnLoad() {
  fullNameVal = fullName.value;
  emailVal = email.value
  phoneVal = phone.value
}

addEventListener('load', valuesOnLoad)

fullName.addEventListener("blur", (event) => {
  fullNameVal = fullName.value;
  if (fullNameVal === '') {
    nameErr.style.visibility = 'visible'
  } else {
    nameErr.style.visibility = 'hidden'
  }
});

email.addEventListener("blur", (event) => {
  emailVal = email.value;
  if (emailVal === "") {
    emailErr.style.visibility = "visible";
  } else {
    emailErr.style.visibility = "hidden";
  }
});

phone.addEventListener("blur", (event) => {
  phoneVal = phone.value;
  if (phoneVal === "") {
    phoneErr.style.visibility = "visible";
  } else {
    phoneErr.style.visibility = "hidden";
  }
});

submit.addEventListener('click', event => {
  const formToast = document.createElement("div");
  formToast.setAttribute('class', 'form-toast');
  bodySec2.appendChild(formToast)

  if(emailVal === '' || phoneVal === '' || fullNameVal === '') {
    formToast.innerText = 'Please fill all the fields.';
    
  } else {
    formToast.innerHTML = 'Successfully submitted';
    formToast.style.boxShadow = '0 0 10px green'
    contactForm.style.scale = '0';
  }

  setTimeout(()=> {
    formToast.style.visibility = 'hidden';
  }, 3000)
})
