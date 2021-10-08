const formSub = document.querySelector("#form-subscribe");
const nameSub = document.querySelector("#name-sub");
const nameErrorSub = document.querySelector("#nameError-sub");
const emailSub = document.querySelector("#email-sub");
const emailErrorSub = document.querySelector("#emailError-sub");
const formSuccessSub = document.querySelector("#subscribe-success");
const subscribeButton = document.querySelector(".cta-subscribe");



function validateName() {
    if (checkLength(nameSub.value, 2) === true) {
        nameSub.style.borderBottom = "4px solid green";
        nameErrorSub.style.display = "none";
    } else if (nameSub.value === '') {
        nameSub.style.border = "2px solid white";
        nameErrorSub.style.display = "none";
    } else {
        nameSub.style.borderBottom = "4px solid red";
        nameErrorSub.style.display = "block";
    }
}

function validateNameInput() {
    if (checkLength(nameSub.value, 2) === true) {
        nameSub.style.borderBottom = "4px solid green";
        nameErrorSub.style.display = "none";
    } else if (nameSub.value === '') {
        nameSub.style.border = "2px solid white";
        nameErrorSub.style.display = "none";
    } else {
        nameSub.style.borderBottom = "4px solid red";
    }
}

function validateEmail() {

    if (checkEmail(emailSub.value) === true) {
        emailSub.style.borderBottom = "4px solid green";
        emailErrorSub.style.display = "none";
    } else if (emailSub.value === '') {
        emailSub.style.border = "2px solid white";
        emailErrorSub.style.display = "none";
    } else {
        emailSub.style.borderBottom = "4px solid red";
        emailErrorSub.style.display = "block";
    }
}

function validateEmailInput() {

    if (checkEmail(emailSub.value) === true) {
        emailSub.style.borderBottom = "4px solid green";
        emailErrorSub.style.display = "none";
    } else if (emailSub.value === '') {
        emailSub.style.border = "2px solid white";
        emailErrorSub.style.display = "none";
    } else {
        emailSub.style.borderBottom = "4px solid red";
    }
}


function validateForm(event) {
    event.preventDefault();

    if (checkLength(nameSub.value, 2) === true && checkEmail(emailSub.value) === true) {
        formSuccessSub.style.display = "block";
        nameSub.style.border = "2px solid white";
        emailSub.style.border = "2px solid white";
        subscribeButton.disabled = true;
        subscribeButton.style.opacity = .4;
        formSub.reset();
    } else {
        formSuccessSub.style.display = "none";
    }
    //this will hide success message after 7 seconds
    setInterval(function () {
        formSuccessSub.style.display = "none";
    }, 7000)

}

function buttonEnable() {
    if (checkLength(nameSub.value, 2) === true && checkEmail(emailSub.value) === true) {
        subscribeButton.style.opacity = 1;
        subscribeButton.disabled = false;
    } else {
        subscribeButton.style.opacity = .4;
        subscribeButton.disabled = true;
    }
}


nameSub.addEventListener("blur", validateName);
nameSub.addEventListener("input", validateNameInput);
emailSub.addEventListener("blur", validateEmail)
emailSub.addEventListener("input", validateEmailInput)
formSub.addEventListener("submit", validateForm);
formSub.addEventListener("input", buttonEnable);



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



