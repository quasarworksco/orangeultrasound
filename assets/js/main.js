/* ============================================================
   Orange Ultrasound — Interacciones base
   (El toggle de idioma y las animaciones de scroll se
    completarán en la Parte 8)
   ============================================================ */
(function () {
  'use strict';

  const header = document.getElementById('site-header');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  /* Sombra del header al hacer scroll */
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Menú móvil */
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });

    // Cerrar al pulsar un enlace
    navLinks.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Año actual en el footer */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Formulario de contacto: enviar por WhatsApp o por correo */
  const form = document.getElementById('contact-form');
  if (form) {
    const WHATSAPP_NUMBER = '13213008302';         // +1 321-300-8302
    const EMAIL_TO = 'orangeultrasoundinfo@gmail.com';
    let chosenAction = 'whatsapp';

    // Recordar qué botón se pulsó
    form.querySelectorAll('button[data-action]').forEach((btn) => {
      btn.addEventListener('click', () => { chosenAction = btn.dataset.action; });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const val = (name) => (form.elements[name]?.value || '').trim();
      const name = val('name');
      const phone = val('phone');

      // Validación mínima
      if (!name || !phone) {
        if (!name) form.elements['name'].focus();
        else form.elements['phone'].focus();
        form.reportValidity?.();
        return;
      }

      const email = val('email');
      const study = val('study');
      const message = val('message');

      const lines = [
        'Hola Orange Ultrasound, quisiera más información.',
        '',
        'Nombre: ' + name,
        'Teléfono: ' + phone,
      ];
      if (email) lines.push('Correo: ' + email);
      if (study) lines.push('Estudio de interés: ' + study);
      if (message) lines.push('Mensaje: ' + message);

      const body = lines.join('\n');

      if (chosenAction === 'email') {
        const subject = 'Solicitud de cita / información — ' + name;
        window.location.href =
          'mailto:' + EMAIL_TO +
          '?subject=' + encodeURIComponent(subject) +
          '&body=' + encodeURIComponent(body);
      } else {
        window.open(
          'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(body),
          '_blank', 'noopener'
        );
      }
    });
  }
})();
