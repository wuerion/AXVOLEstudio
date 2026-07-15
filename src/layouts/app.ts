const form = document.getElementById("contact-form") as HTMLFormElement;
const result = document.getElementById("result");

if (form && result) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const emailValue = (document.getElementById("email") as HTMLInputElement)
      .value;

    // Forzamos explícitamente el mapeo del replyTo con el valor real del correo
    formData.append("replyTo", emailValue);

    result.textContent = "Enviando mensaje...";
    result.className = "mt-4 text-center lg:px-4 text-gray-500";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.textContent =
            "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.";
          result.className =
            "mt-4 text-center lg:px-4 text-green-600 font-medium";
          form.reset();
        } else {
          console.log(response);
          result.textContent = json.message;
          result.className = "mt-4 text-center lg:px-4 text-red-600";
        }
      })
      .catch((error) => {
        console.log(error);
        result.textContent = "Algo salió mal. Por favor, inténtalo de nuevo.";
        result.className = "mt-4 text-center lg:px-4 text-red-600";
      });
  });
}

// Seleccionamos todos los botones y el textarea
  const botones = document.querySelectorAll('#btn-start-project');
  const textarea = document.getElementById('message') as HTMLTextAreaElement;

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      // Obtenemos el nombre del servicio desde el atributo data
      const servicio = boton.getAttribute('data-service');
      
      // Modificamos el valor del textarea
      if (textarea) {
        textarea.value = `Hola buen día, quisiera una ${servicio} con: `;
        
        // Opcional: Hace scroll suave automático hasta el formulario
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
        
        // Opcional: Pone el cursor al final del texto para que el cliente escriba ya
        textarea.focus();
      }
    });
  });

// animacion del inicio
window.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");

  // Espera a que termine la coreografía visual antes de desvanecer
  setTimeout(() => {
    preloader.classList.add("fade-out");
  }, 3200); // 3.2 segundos de duración total
});
