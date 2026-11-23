/**
 * DIGITAL UP WEB - JAVASCRIPT
 * FAQ accordion, phone mask, and direct WhatsApp quote dispatcher
 */

document.addEventListener('DOMContentLoaded', () => {
  initFaqClean();
  initPhoneMask();
  initContactForm();
});

// 1. Clean FAQ Accordion
function initFaqClean() {
  const faqItems = document.querySelectorAll('.faq-item-clean');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(i => i.classList.remove('active'));

        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

// 2. Brazilian Phone Mask: (82) 99999-9999
function initPhoneMask() {
  const phoneInput = document.getElementById('telefone');
  if (!phoneInput) return;

  phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    e.target.value = value;
  });
}

// 3. Contact Form & Direct WhatsApp Dispatch
function initContactForm() {
  const form = document.getElementById('leadForm');
  const banner = document.getElementById('formSuccessBanner');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const servico = document.getElementById('servico').value;
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !telefone || !mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const whatsNumber = '5582999451172';
    const textMsg = encodeURIComponent(
      `*Olá, João / Digital Up Web!*\n\n` +
      `Gostaria de uma solução para o meu negócio:\n\n` +
      `👤 *Nome:* ${nome}\n` +
      `📱 *WhatsApp:* ${telefone}\n` +
      `🛠️ *Interesse:* ${servico}\n` +
      `📝 *Problema a resolver:*\n"${mensagem}"\n\n` +
      `_Enviado pelo formulário do site._`
    );

    const waUrl = `https://wa.me/${whatsNumber}?text=${textMsg}`;

    if (banner) {
      banner.style.display = 'block';
      banner.innerHTML = `Mensagem preparada! Abrindo o WhatsApp de atendimento...`;
    }

    setTimeout(() => {
      window.open(waUrl, '_blank');
      form.reset();
    }, 600);
  });
}
