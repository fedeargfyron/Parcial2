const generateError = (err) => {
    console.log(err)
}

const getInfo = async () => {
    try {
        let response = await fetch("https://basic-server-one.vercel.app/users", { method: "GET"})
        let body = await response.json();
        generateDashboard(body);
    }
    catch(err){
        generateError(err);
    }
}

const generateDashboard = (response) => {
    console.log(response)
}

window.onload = async () => {
    await getInfo();
}