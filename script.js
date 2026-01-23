/* ============================
   Mobile Navigation
============================ */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    });
  });
}

/* ============================
   FAQ Accordion
============================ */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  if (!question) return;

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

/* ============================
   Smooth Scrolling
============================ */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/* ============================
   Visa Form (INLINE FORM)
   IMPORTANT: NO preventDefault
============================ */
const visaForm = document.getElementById("visaForm");

if (visaForm) {
  visaForm.addEventListener("submit", () => {
    alert("Thank you for your application! We will contact you soon.");
    // Let FormSubmit handle POST naturally
  });
}

/* ============================
   WhatsApp Chat Widget
============================ */
const WHATSAPP_NUMBER = "12029485431";
const DEFAULT_MESSAGE = "Hello! I have a question about your services.";

const whatsappBtn = document.getElementById("whatsappBtn");
const whatsappPopup = document.getElementById("whatsappPopup");
const closeBtn = document.getElementById("closeBtn");
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");

if (whatsappBtn && whatsappPopup) {
  whatsappBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    whatsappPopup.classList.toggle("active");
  });
}

if (closeBtn && whatsappPopup) {
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    whatsappPopup.classList.remove("active");
  });
}

if (whatsappPopup) {
  whatsappPopup.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

function sendWhatsAppMessage() {
  if (!messageInput) return;

  const message = messageInput.value.trim() || DEFAULT_MESSAGE;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
}

if (sendBtn) {
  sendBtn.addEventListener("click", sendWhatsAppMessage);
}

if (messageInput) {
  messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendWhatsAppMessage();
    }
  });
}

document.addEventListener("click", (e) => {
  if (
    whatsappPopup &&
    whatsappBtn &&
    !whatsappPopup.contains(e.target) &&
    !whatsappBtn.contains(e.target)
  ) {
    whatsappPopup.classList.remove("active");
  }
});

/* ============================
   Apply Now Modal
============================ */
const applyNowBtn = document.getElementById("applyNowFooterBtn");
const applyModal = document.getElementById("applyModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const visaFormModal = document.getElementById("visaFormModal");

if (applyNowBtn && applyModal) {
  applyNowBtn.addEventListener("click", (e) => {
    e.preventDefault();
    applyModal.classList.add("active");
  });
}

if (closeModalBtn && applyModal) {
  closeModalBtn.addEventListener("click", () => {
    applyModal.classList.remove("active");
  });
}

if (applyModal) {
  applyModal.addEventListener("click", (e) => {
    if (e.target === applyModal) {
      applyModal.classList.remove("active");
    }
  });
}

/* ============================
   Modal Form Submission
   IMPORTANT: NO preventDefault
============================ */
if (visaFormModal && applyModal) {
  visaFormModal.addEventListener("submit", () => {
    alert("Thank you for your application! We will contact you soon.");
    applyModal.classList.remove("active");
    // FormSubmit will now correctly receive all fields
  });
}