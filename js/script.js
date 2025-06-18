// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Rolagem Suave para links de navegação
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault(); // Impede o comportamento padrão do link

          const targetId = this.getAttribute('href'); // Pega o ID da seção (ex: #home)
          const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

          if (targetElement) {
              // Rola suavemente até o elemento
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });

  // 2. Lógica para o formulário de Contato (Envio para WhatsApp)
  const contactForm = document.querySelector('#contato form'); // Seleciona o formulário de contato

  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault(); // IMPEDE o envio padrão do formulário (que recarregaria a página)

          // Pega os valores dos campos do formulário
          const nome = document.getElementById('nome').value;
          const email = document.getElementById('email').value;
          const telefone = document.getElementById('telefone').value;
          const mensagem = document.getElementById('mensagem').value;

          // Substitua 'SEU_NUMERO_WHATSAPP' pelo seu número completo com código do país (ex: 5545999998888)
          // Certifique-se de que o número não tenha parênteses, espaços ou hífens.
          const seuNumeroWhatsApp = '5545999434668'; // 👈 **MUDE AQUI PARA O SEU NÚMERO!**

          // Monta a mensagem para o WhatsApp
          let whatsappMessage = `Olá, vim do site Grupo Essencial!\n\n`;
          whatsappMessage += `*Nome:* ${nome}\n`;
          whatsappMessage += `*Email:* ${email}\n`;
          if (telefone) { // Adiciona o telefone se for preenchido
              whatsappMessage += `*Telefone:* ${telefone}\n`;
          }
          whatsappMessage += `*Mensagem:* ${mensagem}\n\n`;
          whatsappMessage += `Gostaria de mais informações.`;

          // Codifica a mensagem para ser usada na URL (importante para espaços e caracteres especiais)
          const encodedMessage = encodeURIComponent(whatsappMessage);

          // Monta a URL do WhatsApp
          const whatsappURL = `https://wa.me/${seuNumeroWhatsApp}?text=${encodedMessage}`;

          // Abre o WhatsApp (em nova aba para não sair do site)
          window.open(whatsappURL, '_blank');

          // Opcional: Limpar o formulário após o envio
          this.reset();

          // Opcional: Mensagem de feedback para o usuário
          alert('Sua mensagem será enviada via WhatsApp! Você será redirecionado para o chat.');
      });
  }
});