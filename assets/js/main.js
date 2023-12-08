/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* VALIDATION IF CONSTANT EXISTS */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* VALIDATION IF CONSTANT EXISTS */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);

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

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClasses = document.querySelector(
      `.nav__menu a[href*=${sectionId}]`
    );

    scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
      ? sectionsClasses.classList.add("active-link")
      : sectionsClasses.classList.remove("active-link");
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(
  `.home__data, .home__social, .contact__container, .footer__container`
);
sr.reveal(`.home__image`, { origin: "bottom" });
sr.reveal(`.about__data, .skills__data`, { origin: "left" });
sr.reveal(`.about__image, .skills__content`, { origin: "right" });
sr.reveal(`.services__card, .projects__card`, { interval: 100 });
