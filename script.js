const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all other items
    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("active");
    });

    // Toggle current item
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// Form Submission
const visaForm = document.getElementById("visaForm");

visaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your application! We will contact you soon.");
  visaForm.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// CONFIGURATION - Replace with your WhatsApp number
const WHATSAPP_NUMBER = "254113234357"; // Format: country code + number (no + or spaces)
const DEFAULT_MESSAGE = "Hello! I have a question about your services.";

const whatsappBtn = document.getElementById("whatsappBtn");
const whatsappPopup = document.getElementById("whatsappPopup");
const closeBtn = document.getElementById("closeBtn");
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");

// Toggle popup
whatsappBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  whatsappPopup.classList.toggle("active");
});

// Close popup
closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  whatsappPopup.classList.remove("active");
});

// Prevent popup from closing when clicking inside it
whatsappPopup.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Send message
function sendWhatsAppMessage() {
  const message = messageInput.value.trim() || DEFAULT_MESSAGE;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
}

sendBtn.addEventListener("click", sendWhatsAppMessage);

messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendWhatsAppMessage();
  }
});

// Close popup when clicking outside
document.addEventListener("click", (e) => {
  if (!whatsappPopup.contains(e.target) && !whatsappBtn.contains(e.target)) {
    whatsappPopup.classList.remove("active");
  }
});
