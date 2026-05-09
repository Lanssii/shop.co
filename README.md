# Shop.co

Shop.co is a responsive fashion e-commerce landing page based on figma design, built with HTML, CSS, and JavaScript.
The project features a modern UI, responsive layout, interactive navigation, animated counters,
product sliders, and mobile-friendly horizontal scrolling.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Swiper.js

---

# Features

- Fully responsive design
- Mobile burger menu with sidebar navigation
- Dropdown menus
- Animated counters using `requestAnimationFrame`
- Scroll-to-top button with smooth scrolling
- Reviews slider using Swiper.js
- Horizontal product scrolling on mobile devices
- Responsive layouts for desktop, tablet, and mobile
- Newsletter subscription section
- Modern typography and clean UI
- Semantic HTML structure (`header`, `section`, `footer`)

---

# Responsive Design

The website is optimized for:

- Desktop
- Tablet
- Mobile devices

Mobile product cards support horizontal swipe scrolling using CSS scroll snapping.

---

# Fonts

The project uses:

- Satoshi (via Fontshare CDN)
- Integral CF Bold (local custom font using `@font-face`)

Example:

```css
@font-face {
  font-family: "Integral CF";
  src: url("../Demo_Fonts/Fontspring-DEMO-integralcf-bold.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
}
```

---

# JavaScript Functionality

The project includes:

- Announcement bar close functionality
- Animated statistic counters
- Interactive dropdown menus
- Swiper reviews slider
- Responsive burger menu
- Sidebar navigation
- Overlay menu closing
- Scroll-to-top button
- Smooth scrolling effects

---

# External Libraries

## Swiper.js

Used for the customer reviews slider.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>
```

---

# SEO & Meta Tags

The project includes basic SEO optimization using:

- meta description
- keywords
- author tag
- responsive viewport meta tag

Example:

```html
<meta
  name="description"
  content="Shop.co - Premium clothes online store with great offers and discounts"
/>
```

---

# Project Structure

```txt
shop-co/
│
├── index.html
│
├── favicon.ico
│
├── styles/
│   ├── reset.css
│   ├── style.css
│   ├── header.css
│   └── footer.css
│
├── scripts/
│   └── script.js
│
├── images/
│
└── Demo_Fonts/
```

---

## Figma Design

[Figma Design](https://www.figma.com/design/lxXIqtN7O97WUcZe9b3YCe/Unilab-25.1-m2-JS?node-id=1-4588&t=HgO5J2n9ppQR14Kw-0)

## Live Demo

[View Shop.co Website](https://lanssii.github.io/shop.co/)

# Author

Created by Lana Shotashvili

---

# Future Improvements

- Add shopping cart functionality
- Product filtering
- Dark mode
- Backend integration
- Authentication system
- Product pages
- API integration
