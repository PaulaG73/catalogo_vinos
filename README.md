# Catálogo Semana Santa — Vinóloga

SPA en Vue 3 que muestra oferta de packs de vino para Semana Santa: Presentación de marca, carrusel de tarjetas con datos desde JSON y pie de página con direccionamiento a whatsapp.

---

## Descripción

Sitio de una sola vista principal con navegación por anclas (Packs, Contacto), diseño responsive y estética alineada a la identidad Vinóloga (paleta y tipografía Nunito en todo el sitio).

---

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| [Vue 3](https://vuejs.org/) | Framework (`<script setup>`) |
| [Vue Router 4](https://router.vuejs.org/) | Enrutamiento SPA |
| [Vuex 4](https://vuex.vuejs.org/) | Estado global (plantilla del proyecto) |
| [Bootstrap 5](https://getbootstrap.com/) | Layout y componentes UI |
| [Google Fonts — Nunito](https://fonts.google.com/specimen/Nunito) | Tipografía general (cuerpo y títulos) |
| [Firebase](https://firebase.google.com/) | Dependencia del stack (según uso en el proyecto) |

---

## Características

- Sección **Sobre mí / El mundo de Vinóloga** con imagen y texto
- **Carrusel horizontal** de packs (auto-scroll, pausa con hover/teclado/táctil, flechas)
- Tarjetas alimentadas desde `src/data/catalogoPacks.json`
- **Footer** con WhatsApp y copyright

---

## Estructura relevante

```
src/
├── components/
│   ├── NavBar.vue
│   ├── FooterComponent.vue
│   └── CardComponent.vue
├── data/
│   └── catalogoPacks.json
├── views/
│   └── HomeView.vue
├── router/
│   └── index.js
├── store/
│   └── index.js
├── App.vue
└── main.js
public/
└── index.html
```

---

## Instalación y uso

### Requisitos previos
- Node.js >= 14
- npm >= 6

### Instalación

```bash
npm install
```

### Servidor de desarrollo

```bash
npm run serve
```

Abre [http://localhost:8080](http://localhost:8080) en tu navegador.

### Build para producción

```bash
npm run build
```

### Lint

```bash
npm run lint
```

---

## Contacto

- WhatsApp: [+56 9 9645 0950](https://wa.me/56996450950)

---

*Desarrollado por Paula Gajardo Schmidlin, con Vue CLI · 2026*
