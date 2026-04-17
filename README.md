# Frontend Mentor - Agency landing page

This is a solution to the [Agency landing page on Frontend Mentor](https://www.frontendmentor.io/challenges/agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Accessibility highlights](#accessibility-highlights)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Open and close the mobile navigation menu
- Navigate the page using keyboard only

### Screenshot

| Desktop View                   | Mobile View                   |
| ------------------------------ | ----------------------------- |
| ![](./screenshot/desktop.webp) | ![](./screenshot/mobile.webp) |

### Links

[Live Site URL](https://github.com/KapteynUniverse/Agency-landing-page)

[Solution URL](https://www.frontendmentor.io/solutions/sunnyside-landing-page-zXoCtPmggi)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (variables)
- Mobile-first workflow
- CSS Grid (including `subgrid`)
- Flexbox
- Modern CSS (clamp, custom properties, logical properties)
- Vanilla JavaScript (DOM manipulation & accessibility handling)

### What I learned

While building this project, I improved my understanding of:

- **Responsive typography using `clamp()`**
  - Creating fluid font sizes and spacing without media queries

- **Advanced layout techniques**
  - Using `subgrid` for consistent alignment across sections
  - Grid stacking for overlaying content on images

- **Accessible navigation menus**
  - Managing focus when opening/closing the menu
  - Using `aria-expanded`, `aria-controls`, and proper labels
  - Implementing the `inert` attribute to trap focus

- **State-driven UI with JavaScript**
  - Toggling classes for UI state (open/close menu)
  - Syncing UI with accessibility attributes

- **Improving keyboard accessibility**
  - Skip links (`Skip to main content`, `Skip to footer`)

### Accessibility highlights

- Skip navigation links for keyboard users
- Proper use of ARIA attributes:
  - `aria-expanded`
  - `aria-controls`
  - `aria-label`
- Focus management when opening the mobile menu
- `inert` attribute used to disable background interaction
- Semantic HTML structure (`header`, `main`, `footer`, `nav`, `section`, `article`)
- Focus-visible styles for interactive elements

### Useful resources

- [Skip Links](https://youtu.be/VUR0I5mqq7I?si=tOwS9B2UlMXzKzRq) - Helped me implement keyboard-friendly skip navigation for better accessibility.
- [Making accessible navbar menus](https://youtu.be/m7YDWNz65iI?si=VYUq1a-RMV4tnVgs) – Great explanation of accessible mobile navigation patterns.
- [Labeling multiple `<nav>` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements#labeling_section_content) – Helped clarify how to properly label multiple navigation regions.
- [MDN: `inert` attribute](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert) - Learned how to disable interaction outside modal/navigation.
- [CSS Subgrid for Perfect Alignment](https://youtu.be/APxt2mKOsss?si=i1eUDd0QhogWdbzl) – Helped me understand how to align content across grid sections consistently.
- [CSS Grid stacking](https://youtu.be/8327_1PINWI?si=3U8MxyVMP2ikOmQo) – Useful for layering text over images cleanly.

## Author

- Frontend Mentor - [Asilcan Toper](https://www.frontendmentor.io/profile/KapteynUniverse)
