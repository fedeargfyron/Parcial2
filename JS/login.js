const submitForm = (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    fetch("https://basic-server-one.vercel.app/login", {
    method: "POST",
    headers: {"Content-Type": "application/json",},
    body: JSON.stringify({email: email,password: pass})
    })
    .then(response => {
        if(response.ok){
            localStorage.setItem("Logged", email);
            let url = "../dashboard.html";
            return window.location = url;
        }
        //Mostrar cartel error
    });
}
window.onload = () => {
    document.getElementById("submitBtn").addEventListener("click", submitForm);
}