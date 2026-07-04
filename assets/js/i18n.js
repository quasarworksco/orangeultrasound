/* ============================================================
   Orange Ultrasound — Bilingüe (ES por defecto / EN)
   El español vive en el HTML; aquí sólo definimos el inglés.
   ============================================================ */
(function () {
  'use strict';

  var EN = {
    // Navegación
    'nav.home': 'Home',
    'nav.care': 'Care',
    'nav.why': 'Why us?',
    'nav.studies': 'Studies',
    'nav.contact': 'Contact',
    'nav.callCta': 'Call us',

    // Hero
    'hero.badge': 'Walk-ins welcome for most studies',
    'hero.titleA': 'Accurate imaging',
    'hero.titleB': 'to care for your health',
    'hero.subA': 'Ultrasound for everyone',
    'hero.subB': ' — Quality ultrasound studies at affordable prices, with warm, professional care in Orlando, FL.',
    'hero.ctaBook': 'Book your appointment',
    'hero.hl1t': 'From $139',
    'hero.hl1s': 'Affordable prices',
    'hero.hl2t': 'Report included',
    'hero.hl2s': 'By a board-certified radiologist',
    'hero.cardT': 'We care for your health',
    'hero.cardS': 'as if you were our family',

    // Atención para todos
    'care.eyebrow': 'Accessible care',
    'care.title': 'Care for everyone, with or without insurance',
    'care.lead': 'We believe quality diagnostics should be within reach of the whole community. That is why we offer fair prices and work with most health insurance plans.',
    'care.f1t': 'Affordable prices',
    'care.f1p': 'Rates designed for our community patients, without compromising medical quality.',
    'care.f2t': 'We accept most health insurance plans',
    'care.f2p': 'Have insurance? We will gladly verify it for you. No insurance? We will take care of you too.',

    // ¿Por qué elegirnos?
    'why.eyebrow': 'Our difference',
    'why.title': 'Why choose Orange Ultrasound?',
    'why.lead': 'Technology, human experience and fair prices, together to care for you and your family.',
    'why.c1t': 'Modern equipment',
    'why.c1p': 'State-of-the-art technology for more accurate imaging.',
    'why.c2t': 'Certified sonographers',
    'why.c2p': 'Professionals with extensive experience, always up to date.',
    'why.c3t': 'Fast results',
    'why.c3p': 'We understand your time is valuable.',
    'why.c4t': 'Care in Spanish and English',
    'why.c4p': 'For your comfort and peace of mind.',
    'why.c5t': 'Affordable prices',
    'why.c5p': 'Medical quality within your budget.',
    'why.c6t': 'With and without insurance',
    'why.c6p': 'We accept patients with and without insurance. Care for everyone.',
    'why.c7t': 'Walk-ins welcome for most studies',
    'why.c7p': 'Come when you need to: we see you without an appointment for most of our studies.',
    'why.c7cta': 'Call us',

    // Tecnología
    'tech.eyebrow': 'Medical innovation',
    'tech.title': 'Technology that makes the difference',
    'tech.lead': 'High-end equipment in expert hands, so your diagnosis is clear, reliable and on time.',
    'tech.i1t': 'High-resolution imaging',
    'tech.i1p': 'More detail for more accurate diagnoses.',
    'tech.i2t': 'Latest-generation ultrasound machines',
    'tech.i2p': 'Modern technology for results you can trust.',
    'tech.i3t': 'A comfortable, safe and professional environment',
    'tech.i3p': 'A space designed for your peace of mind at every visit.',
    'tech.cta': 'Book your study',
    'tech.statN': 'HD',
    'tech.statL': 'High resolution',

    // Estudios
    'studies.eyebrow': 'Full catalog',
    'studies.title': 'Studies we offer',
    'studies.lead': 'A wide range of ultrasounds for the whole family, explained in plain language. Do not see your study? Call us and we will gladly guide you.',
    'studies.cat': 'Category',
    'studies.women': 'Women',
    'studies.w1': 'Obstetric',
    'studies.w2': 'Gynecological',
    'studies.w3': 'Transvaginal',
    'studies.w4': 'Breast',
    'studies.w5': 'Fertility',
    'studies.general': 'General',
    'studies.g1': 'Complete Abdomen',
    'studies.g2': 'Liver & Biliary Tract',
    'studies.g3': 'Pancreas',
    'studies.g4': 'Spleen',
    'studies.g5': 'Appendix',
    'studies.g6': 'Soft Tissue',
    'studies.uro': 'Urological',
    'studies.u1': 'Renal',
    'studies.u2': 'Bladder',
    'studies.u3': 'Prostate',
    'studies.u4': 'Scrotal',
    'studies.u5': 'Urinary Tract',
    'studies.vascular': 'Vascular',
    'studies.v1': 'Carotid',
    'studies.v2': 'Arterial (Extremities)',
    'studies.v3': 'Venous (Extremities)',
    'studies.v4': 'DVT (Deep Vein Thrombosis)',
    'studies.thyroid': 'Thyroid & Neck',
    'studies.t1': 'Thyroid',
    'studies.t2': 'Parathyroid',
    'studies.t3': 'Lymph Nodes',
    'studies.other': 'Other Studies',
    'studies.o1': '3D/4D Ultrasound',
    'studies.o2': 'Color Doppler',
    'studies.o3': 'Procedure Guidance',
    'studies.note': '<strong>Walk-ins welcome</strong> for most studies. Care in Spanish and English.',

    // Prioridad
    'priority.eyebrow': 'Our commitment',
    'priority.title': 'Your health is our priority',
    'priority.lead': 'Compassionate care, reliable diagnoses and prices that fit your needs.',
    'priority.i1t': 'Walk-ins welcome',
    'priority.i1p': 'For most studies.',
    'priority.i2t': 'Fast and reliable',
    'priority.i2p': 'On-time results you can trust.',
    'priority.i3t': 'For the whole family',
    'priority.i3p': 'We care for your health as if you were our family.',
    'priority.cta': 'Book your appointment',

    // Contacto
    'contact.eyebrow': 'We are here to help',
    'contact.title': 'Book your appointment or write to us',
    'contact.lead': 'Walk-ins welcome for most studies. We are glad to assist you in Spanish and English.',
    'contact.phoneT': 'Phone',
    'contact.addrT': 'Address',
    'contact.emailT': 'Email',
    'contact.hoursT': 'Business hours',
    'contact.hoursP': 'Monday to Saturday, 9:00 AM – 4:00 PM',
    'contact.formTitle': 'Write to us',
    'contact.formLead': 'Fill in your details and send them via WhatsApp or email. We will get back to you as soon as possible.',
    'contact.fName': 'Name',
    'contact.fPhone': 'Phone',
    'contact.fEmail': 'Email',
    'contact.fStudy': 'Study of interest',
    'contact.fStudyPh': 'Select a study (optional)',
    'contact.fStudyOther': 'Other / Not sure',
    'contact.fMsg': 'Message',
    'contact.sendWa': 'Send via WhatsApp',
    'contact.sendMail': 'Send via email',
    'contact.formNote': 'On submit, WhatsApp or your email will open with the message ready. We do not share your data.',

    // Placeholders
    'ph.name': 'Your name',
    'ph.email': 'email@example.com',
    'ph.message': 'Tell us how we can help...',

    // Footer
    'footer.closingA': 'Imaging that builds trust,',
    'footer.closingB': 'results that make a difference.',
    'footer.about': 'Quality ultrasound at affordable prices in Orlando, FL. We care for your health as if you were our family.',
    'footer.navTitle': 'Navigation',
    'footer.contactTitle': 'Contact',
    'footer.rights': 'All rights reserved.'
  };

  var META = {
    es: {
      title: 'Orange Ultrasound | Ecografías y Ultrasonidos en Orlando, FL',
      desc: 'Orange Ultrasound: ecografías y ultrasonidos en Orlando, FL a precios accesibles desde $139. Atención bilingüe, sin cita previa en la mayoría de los estudios e informe por radiólogo certificado.'
    },
    en: {
      title: 'Orange Ultrasound | Ultrasound & Sonograms in Orlando, FL',
      desc: 'Orange Ultrasound: affordable ultrasound studies in Orlando, FL from $139. Bilingual care, walk-ins welcome for most studies, and a board-certified radiologist report.'
    }
  };

  var STORE_KEY = 'ou-lang';
  var esCacheText = {};
  var esCachePh = {};
  var cached = false;

  function cacheSpanish() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      esCacheText[el.getAttribute('data-i18n')] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      esCachePh[el.getAttribute('data-i18n-ph')] = el.getAttribute('placeholder') || '';
    });
    cached = true;
  }

  function apply(lang) {
    if (!cached) cacheSpanish();
    var useEn = lang === 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = useEn ? EN[key] : esCacheText[key];
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      var val = useEn ? EN[key] : esCachePh[key];
      if (val != null) el.setAttribute('placeholder', val);
    });

    // <html lang> + metadatos
    document.documentElement.setAttribute('lang', lang);
    var meta = META[lang] || META.es;
    document.title = meta.title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', meta.desc);

    // Estado de los botones
    document.querySelectorAll('.lang-toggle button[data-lang]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  // Idioma inicial: preferencia guardada, si no, español
  var initial = 'es';
  try { if (localStorage.getItem(STORE_KEY) === 'en') initial = 'en'; } catch (e) {}

  function init() {
    cacheSpanish();
    if (initial === 'en') apply('en');

    document.querySelectorAll('.lang-toggle button[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () { apply(btn.getAttribute('data-lang')); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
