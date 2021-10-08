
const formSubFot = document.querySelector("#form-subscribe_footer");
const nameSubFot = document.querySelector("#name-sub_footer");
const nameErrorSubFot = document.querySelector("#nameError-sub_footer");
const emailSubFot = document.querySelector("#email-sub_footer");
const emailErrorSubFot = document.querySelector("#emailError-sub_footer");
const formSuccessFooter = document.querySelector("#subscribe-success_footer");
const subscribeButtonFot = document.querySelector(".cta-footer_subscribe");


function validateName() {
    if (checkLength(nameSubFot.value, 2) === true) {
        nameSubFot.style.borderBottom = "4px solid green";
        nameErrorSubFot.style.display = "none";
    } else if (nameSubFot.value === '') {
        nameSubFot.style.border = "2px solid white";
        nameErrorSubFot.style.display = "none";
    } else {
        nameSubFot.style.borderBottom = "4px solid red";
        nameErrorSubFot.style.display = "block";
    }
}

function validateNameInput() {
    if (checkLength(nameSubFot.value, 2) === true) {
        nameSubFot.style.borderBottom = "4px solid green";
        nameErrorSubFot.style.display = "none";
    } else if (nameSubFot.value === '') {
        nameSubFot.style.border = "2px solid white";
        nameErrorSubFot.style.display = "none";
    } else {
        nameSubFot.style.borderBottom = "4px solid red";
    }
}

function validateEmail() {

    if (checkEmail(emailSubFot.value) === true) {
        emailSubFot.style.borderBottom = "4px solid green";
        emailErrorSubFot.style.display = "none";
    } else if (emailSubFot.value === '') {
        emailSubFot.style.border = "2px solid white";
        emailErrorSubFot.style.display = "none";
    } else {
        emailSubFot.style.borderBottom = "4px solid red";
        emailErrorSubFot.style.display = "block";
    }
}

function validateEmailInput() {

    if (checkEmail(emailSubFot.value) === true) {
        emailSubFot.style.borderBottom = "4px solid green";
        emailErrorSubFot.style.display = "none";
    } else if (emailSubFot.value === '') {
        emailSubFot.style.border = "2px solid white";
        emailErrorSubFot.style.display = "none";
    } else {
        emailSubFot.style.borderBottom = "4px solid red";
    }
}


function validateForm(event) {
    event.preventDefault();

    if (checkLength(nameSubFot.value, 2) === true && checkEmail(emailSubFot.value) === true) {
        formSuccessFooter.style.display = "block";
        nameSubFot.style.border = "2px solid white";
        emailSubFot.style.border = "2px solid white";
        subscribeButtonFot.disabled = true;
        subscribeButtonFot.style.opacity = .4;
        formSubFot.reset();
    } else {
        formSuccessFooter.style.display = "none";
    }
    //this will hide success message after 7 seconds
    setInterval(function () {
        formSuccessFooter.style.display = "none";
    }, 7000)

}

function buttonEnable() {
    if (checkLength(nameSubFot.value, 2) === true && checkEmail(emailSubFot.value) === true) {
        subscribeButtonFot.style.opacity = 1;
        subscribeButtonFot.disabled = false;
    } else {
        subscribeButtonFot.style.opacity = .4;
        subscribeButtonFot.disabled = true;
    }
}


nameSubFot.addEventListener("blur", validateName);
nameSubFot.addEventListener("input", validateNameInput);
emailSubFot.addEventListener("blur", validateEmail)
emailSubFot.addEventListener("input", validateEmailInput)
formSubFot.addEventListener("submit", validateForm);
formSubFot.addEventListener("input", buttonEnable);



function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}



