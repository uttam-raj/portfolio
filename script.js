let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll(' header nav a');


window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top< offset + height ){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a  [href* = '+ id +']').classList.add('active')})
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}


emailjs.init("Your_Public_Key");

document.getElementById("send-btn").addEventListener("click", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const contactInput = document.getElementById("contact");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const contact = contactInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    // Validate inputs
    if (!name || !email || !contact || !subject || !message) {
        alert("Please fill all the fields!");
        return;
    }

    // Verify the template variables in EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        contact_number: contact,
        subject: subject,
        message: message,
    };

    // Debugging output
    console.log("Template Parameters: ", templateParams);

    // Send email using EmailJS
    emailjs
        .send("Your_Service_Key", "Your_Template_Key", templateParams)
        .then(
            function (response) {
                console.log("SUCCESS!", response);
                alert("Message sent successfully!");

                // Clear the input fields
                nameInput.value = "";
                emailInput.value = "";
                contactInput.value = "";
                subjectInput.value = "";
                messageInput.value = "";
            },
            function (error) {
                console.error("FAILED...", error);
                alert("Failed to send message. Please try again later.");
            }
        );
});
