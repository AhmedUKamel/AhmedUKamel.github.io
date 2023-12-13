/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_bn04nz2",
      "template_svmqv57",
      "#contact-form",
      "K3mi5B0C1xCfoWffo"
    )
    .then(
      () => {
        contactMessage.textContent = "Message Sent Successfully";

        contactForm.reset();

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
      },
      () => {
        contactMessage.textContent = "Message Not Sent (Service Error)";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
