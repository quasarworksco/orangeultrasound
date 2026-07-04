# Orange Ultrasound — Sitio web

Sitio web profesional, responsivo (mobile-first) y **bilingüe (español / inglés)** para
Orange Ultrasound, clínica de ecografías y ultrasonidos en Orlando, FL.

Construido con **HTML, CSS y JavaScript puro** (sin build, sin dependencias): carga rápida
y se puede publicar en cualquier hosting estático.

## Estructura

```
index.html            Página principal (todas las secciones)
assets/
  css/styles.css      Sistema de diseño + estilos de todas las secciones
  js/main.js          Header, menú móvil, animaciones de scroll y formulario
  js/i18n.js          Traducción español/inglés (toggle ES/EN)
  img/favicon.svg     Ícono de ondas de sonido (favicon)
```

## Cómo verlo localmente

Abre `index.html` en el navegador, o sirve la carpeta con un servidor estático:

```bash
python3 -m http.server 8000
# luego visita http://localhost:8000
```

## Publicar (hosting)

Sube todos los archivos a cualquier hosting estático: **Netlify, Vercel, GitHub Pages,
Cloudflare Pages** o el hosting que ya tengas. No requiere servidor ni base de datos.

## Formulario de contacto

El formulario **no usa backend**: al enviar arma el mensaje con los datos y abre
**WhatsApp** (al 321-300-8302) o el **correo** (a orangeultrasoundinfo@gmail.com),
según el botón que se pulse.

---

## ✅ Pendiente de completar con datos reales

Estos elementos usan valores de ejemplo (placeholder). Reemplázalos cuando tengas la info:

1. **Horario de atención** — hoy dice "Lunes a Viernes, horario a confirmar".
   Actualízalo en `index.html` (busca `contact.hoursP`) y en `assets/js/i18n.js`.
2. **Enlaces de redes sociales** — Instagram, Facebook y TikTok apuntan a `#`.
   Pon las URLs reales en los `href="#"` de los botones sociales (en la sección de
   contacto y en el footer).
3. **Fotografías** — hoy se muestran degradados de marca como respaldo. Sustituye las
   imágenes por fotos reales de la clínica:
   - Hero: profesional realizando un ultrasonido.
   - "Atención para todos": familia multigeneracional.
   - "Tecnología": equipo de ultrasonido de alta gama.
   Cambia los `src` de las etiquetas `<img>` (idealmente sube las fotos a `assets/img/`).
4. **Precio "desde $139"** y **"informe por radiólogo certificado"** — confirma que
   siguen vigentes.
5. **Dominio** — actualiza `og:` y `canonical` en `<head>` cuando tengas el dominio final.
