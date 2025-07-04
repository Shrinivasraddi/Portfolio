function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_89jrxl6","template_32ebo0c",parms).then(alert("Email Sent!!"));
}