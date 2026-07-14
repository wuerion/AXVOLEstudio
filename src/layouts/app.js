
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", 'c610f918-6dc9-4759-ba05-58823c4536dc');

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

window.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  
  // Espera a que termine la coreografía visual antes de desvanecer
  setTimeout(() => {
    preloader.classList.add('fade-out');
  }, 3200); // 3.2 segundos de duración total
});