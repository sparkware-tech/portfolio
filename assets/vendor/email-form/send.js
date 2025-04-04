(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your public key
    emailjs.init("Qbbs3_FCvHjFlSEWT"); // Public Key

    // Attach event listener for form submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Show loading spinner (optional)
      document.querySelector(".loading").style.display = "block";

      // Collect form data
      const formData = new FormData(this);
      const formParams = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      // Send email via EmailJS
      emailjs
        .send("service_jlhkf8u", "template_vn62dge", formParams) // Service ID and Template ID
        .then(
          function (response) {
            document.querySelector(".sent-message").style.display = "block";
            document.getElementById("contact-form").reset();
          },
          function (error) {
            document.querySelector(".error-message").style.display = "block";
          }
        )
        .finally(() => {
          // Hide loading spinner
          document.querySelector(".loading").style.display = "none";
        });
    });
  });
})();
