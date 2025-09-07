let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#loginForm");
let resultMsg = document.querySelector("#result-msg");

form.addEventListener("submit", function(e){
    e.preventDefault();

    document.querySelector("#emailError").style.display = "none";
    document.querySelector("#passwordError").style.display = "none";
    resultMsg.textContent = "";

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    let isValid = true;

    if (!emailAns){
        document.querySelector("#emailError").textContent = "Please enter a valid email address";
        document.querySelector("#emailError").style.display = "initial";
        email.style.borderColor = "red";
        isValid = false;
    }
    if (!passwordAns){
        document.querySelector("#passwordError").textContent = "Password must be at least 8 chars, include uppercase, lowercase, number & special char.";
        document.querySelector("#passwordError").style.display = "initial";
        email.style.borderColor = "red";
        isValid = false;
    }
    else {
        password.style.borderColor = "green";
        email.style.borderColor = "green";
    }

    if (isValid){
        resultMsg.textContent = "Form Submitted Successfully";
        resultMsg.style.color = "green";
        form.reset()

    }
    else{
        resultMsg.textContent = "Please fix the errors above";
        resultMsg.style.color = "red";
    }

    
})
