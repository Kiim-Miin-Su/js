console.log("test");

// focus change in SSN input
window.onload = () => {
    const ssn1 = document.getElementById("ssn1");
    const ssn2 = document.getElementById("ssn2");

    ssn1.addEventListener("keyup", () => {
        if (ssn1.value.length == 6) {
            ssn2.focus();
        }
    })

    const ssn = document.querySelectorAll(".ssn");
    ssn.forEach((s) => {
        s.addEventListener("input", () => {
            document.getElementById("is_checked").value = 'n';
        }) // end of addEventListener();

    }) // end of forEach();

} // end of onload();

const check_ssn = () => {
    const ssn1 = document.getElementById("ssn1");
    const ssn2 = document.getElementById("ssn2");

    const ssn = ssn1.value + ssn2.value;

    const weights = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
    var sum = 0;

    for (var i of weights) {
        sum += i * parseInt(ssn[i]);
    }

    sum = (11 - (sum % 11)) % 10;
    if (sum != parseInt(ssn[12])) {
        alert("SSN is invalid");
        ssn1.focus();
        return false;
    } else {
        alert("SSN is valid");
        document.getElementById("is_checked").value = 'y';
        return true;
    }

} // end of check_ssn();

// check if the input is valid
function send_it() {
    const is_checked = document.getElementById("is_checked");

    const user_id = document.getElementById("username");
    const exp_id_text = /^[A-Za-z0-9]{4,20}$/;

    const user_pw = document.getElementById("password");
    const exp_pw_text = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()_+])[A-Za-z\d~!@#$%^&*()_+]{8,20}$/;

    const user_pw_check = document.getElementById("password_re");

    const user_name = document.getElementById("name");
    const exp_name_text = /^[가-힣]{2,5}$/;

    const phone = document.getElementById("phone");
    const exp_phone_text = /^\d{3}-\d{3,4}-\d{4}$/;

    const email = document.getElementById("email");
    const exp_email_text = /^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-]+\.[A-Za-z]+$/;
    // const exp_email_text = 

    if (!exp_id_text.test(user_id.value)) {
        alert("id must be 4-20 characters long and contain only letters and numbers");
        user_id.focus();
        return false;
    } else if (!exp_pw_text.test(user_pw.value)) {
        alert("password must be 8-20 characters long and contain at least one letter, one number, and one special character");
        user_pw.focus();
        return false;
    } else if (user_pw.value != user_pw_check.value) {
        alert("passwords do not match");
        user_pw_check.focus();
        return false;
    } else if (!exp_name_text.test(user_name.value)) {
        alert("name must be 2-5 characters long and contain only letters");
        user_name.focus();
        return false;
    } else if (!exp_phone_text.test(phone.value)) {
        alert("phone number must be in the format 000-0000-0000");
        phone.focus();
        return false;
    } else if (!exp_email_text.test(email.value)) {
        alert("email must be in the format");
        email.focus();
        return false;
    } else if (is_checked.value == 'n') {
        alert("please check the ssn");
        return false;
    } else {
        return true;
    }
} // end of send_it();

