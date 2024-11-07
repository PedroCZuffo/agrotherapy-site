document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  event.stopPropagation();
  
  if (this.checkValidity()) {
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;

      document.getElementById('confirmedName').textContent = nome;
      document.getElementById('confirmedEmail').textContent = email;
      document.getElementById('confirmedMessage').textContent = mensagem;

      document.getElementById('formContainer').classList.add('d-none');
      
      document.getElementById('successMessage').classList.remove('d-none');
  }

  this.classList.add('was-validated');
});