const generateError = () => {
    const modal = document.getElementById('modal-error');
    modal.classList.add("visible");
    setTimeout(() => {
        modal.classList.remove("visible");
        }, 2500);
}

const redirect = (email) => {
    localStorage.setItem("Logged", email);
    let url = "../dashboard.html";
    return window.location = url;
}

const submitForm = async (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    try {
        let response = await fetch("https://basic-server-one.vercel.app/login", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({email: email,password: pass})
        });
        if(!response.ok)
            return generateError();

        redirect(email);
    } catch (err){
        generateError();
    }
}

window.onload = () => {
    document.getElementById("login-form").addEventListener("submit", submitForm);
}