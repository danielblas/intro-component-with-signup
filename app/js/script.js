let btn = document.getElementsByClassName("form__input__btn");
let textField = document.getElementsByClassName("form__input__text");
let mail = document.getElementsByClassName("input--email")[0];

function validation() {
    for (let i = 0; i < textField.length; i++) {
        if (textField[i].value === '') {
            textField[i].nextElementSibling.style.display = "block";
            if (!textField[i].classList.contains("invalid")) {
                textField[i].classList.add("invalid");
            } else {}

            
        } else {
            textField[i].nextElementSibling.style.display = "none";
            if (textField[i].classList.contains("invalid")) {
                textField[i].classList.remove("invalid");
            }
        }
    }

    let email = mail.value;
    var email_patern = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (email_patern.test(email)) {
        mail.nextElementSibling.style.display = "none";
        if (mail.classList.contains("invalid")) {
            mail.classList.remove("invalid");
        }
        console.log("email valid");
    } else {
        mail.nextElementSibling.style.display = "block";
        console.log("not valid");
        if (!mail.classList.contains("invalid")) {
            mail.classList.add("invalid");
        }
    }
}


btn[0].addEventListener("click", validation);