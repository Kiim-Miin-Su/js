console.log("test");

function send_it() {
    const user_id = document.getElementById("username");
    const exp_id_text = /^[A-Za-z0-9]{4,20}$/;

    const user_pw = document.getElementById("password");
    const exp_pw_text = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()_+])[A-Za-z\d~!@#$%^&*()_+]{8,20}$/

    const user_pw_check = document.getElementById("password_re");

    const user_name = document.getElementById("name");
    const exp_name_text = /^[가-힣]{2,5}$/

    const phone = document.getElementById("phone");
    const exp_phone_text = /^\d{3}-\d{3,4}-\d{4}$/;

    const email = document.getElementById("email");
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
    }
    else {
        return true;
    }

}

