emailjs.init("uX3-WsfeCz8O7CFaM");

function submitButton() {
    document.getElementById("submit-button").addEventListener("click", function() {

        const name = document.getElementById("name-text-form").value.trim();
        const email = document.getElementById("email-text-form").value.trim();
        //const email = "alanzheng2004@outlook.com";
        const message = document.getElementById("contact-text-form").value.trim();

        if (!name || !email || !message){
            alert("Error: Fill all fields.");
        }
        else{
            emailjs.send("service_w3in17p", "template_dwmu37z",
                          {
                user_name: name,
                user_email: "alanzheng2004@outlook.com",
                message: "Email: " + email + "\n" + message,
            },
                          "uX3-WsfeCz8O7CFaM").then(() => {
                alert("Sent message.");
            }, (error) => {
                alert("Failed to send message:", error);
            });
        }
    });
}

submitButton();
