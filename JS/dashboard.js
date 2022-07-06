let headers = ["id", "email", "phone", "username", "website"]

const generateError = () => {
    document.getElementById('modal-error').classList.add("visible");
}

const createHeaderRow = () => {
    let firstRow = document.createElement("tr");
    headers.forEach(x => {
        let th = document.createElement("th");
        th.innerHTML = x.toUpperCase();
        firstRow.appendChild(th);
    })
    return firstRow;
}

const generateDashboard = (data) => {
    let table = document.getElementById("table");
    table.appendChild(createHeaderRow());
    data.forEach(user => {
        let newRow = document.createElement("tr");
        headers.forEach(att => {
            let td = document.createElement("td");
            td.innerHTML = user[att];
            newRow.appendChild(td);
        })
        table.appendChild(newRow);
    })

}

const redirect = () => {
    let url = "../login.html";
    window.location = url;
}

const logOut = () => {
    localStorage.removeItem("Logged");
    redirect();
}

const getInfo = async () => {
    try {
        let response = await fetch("https://basic-server-one.vercel.app/users", { method: "GET"})
        let body = await response.json();
        generateDashboard(body.data);
    }
    catch(err){
        generateError();
    }
}

window.onload = async () => {
    if(!localStorage.getItem("Logged")){
        return redirect();
    }

    await getInfo();
    document.getElementById("logout").addEventListener("click", logOut)
}