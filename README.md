# Midterm Project Documentation & Technical Report

**Course:** Web Application Development

**Project Name:** Movie Website: info, ratings, trailers, reviews

**Students:** Madina Kairbayeva, Tamerlan Iskakov, Abdyssadykov Daniyar.

---

## 1. Project Team & Contribution Breakdown

The project was developed collaboratively by a team of three members. The responsibilities were distributed as follows:

* **Tamerlan Iskakov**: 
  * Developed the core **HTML structure** across all 5 pages.
  * Created semantic markup, content layout, structured lists, data tables, and input forms.
* **Madina Kairbayeva**: 
  * Designed and implemented the complete **CSS UI/UX design** and visual style.
  * Configured CSS variables, color scheme, typography, custom animations, hover effects, CSS Grid layout, and mobile responsiveness.
* **Daniyar Abdyssadykov**: 
  * Integrated the **Bootstrap 5 framework** for layout utilities and component responsiveness.
  * Authored project documentation, code review, and the final **README report**.

---

## 2. Project Overview & Features

This web application is a multi-page, responsive movie platform designed for cinema lovers. Users can browse popular films, explore ratings, read and submit reviews, and watch embedded movie trailers.

### Pages Overview:
1. **Home Page (`index.html`)**: Features a Hero banner with background styling, project intro, and navigation calls-to-action.
2. **Movie Catalog (`movies.html`)**: Displays movie cards organized in a responsive grid layout.
3. **Reviews & Form (`reviews.html`)**: Shows community reviews rendered via CSS Grid and includes a review submission form (`#review-form-container`).
4. **Ratings & Statistics (`ratings.html`)**: Displays movie ratings inside a structured, accessible table with hover states and zebra striping (`#movie-ratings-table`).
5. **Trailers (`trailers.html`)**: Contains embedded video players for watching movie trailers.

---

## 3. Features Implemented

* **Global Sticky Navigation Bar**: Persistent navigation menu with active page states and smooth transition effects across all pages (`#main-navbar`).
* **Hero Banner & Call-to-Action**: High-impact welcome section on the homepage with dynamic background overlays and quick action buttons.
* **Interactive Movie Catalog**: Styled movie cards with hover effects, dynamic shadows, and detailed movie descriptions.
* **Custom Review Submission Form**: Fully structured HTML form with client-side validation (`required` attributes), dropdown selectors, text areas, and styled focus states (`#review-form-container`).
* **Interactive Review Cards Grid**: User reviews presented in a clean, modern CSS Grid layout with responsive auto-fitting cards.
* **Data & Statistics Table**: A structured data table displaying movie ratings, release years, and genre information with alternating zebra striping (`:nth-child`) and row hover highlights (`#movie-ratings-table`).
* **Embedded Trailer Video Players**: Integrated media players allowing users to view movie trailers directly within the application.
* **Responsive Design & Accessibility**: Fully adaptive layouts across mobile, tablet, and desktop viewports, complete with semantic HTML tags and image `alt` attributes.


## 4. Technologies Used

* **HTML5**:
  * Semantic layout elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`).
  * Accessible forms (`<input>`, `<select>`, `<textarea>`, `<label>`).
  * Data tables (`<table>`, `<thead>`, `<tbody>`, `<th>`, `<tr>`, `<td>`).
* **CSS3**:
  * Centralized CSS Custom Properties / Variables defined in `:root` (colors, fonts, sizes).
  * Advanced selectors (Tag, Class, and ID selectors like `#main-navbar`, `#review-form-container`, `#movie-ratings-table`).
  * Structural and dynamic pseudo-classes (`:hover`, `:focus`, `:nth-child(odd)`, `:nth-child(even)`).
  * Flexbox and CSS Grid layout techniques.
  * Positioning (`position: sticky`, `position: relative`, `position: absolute`).
  * Media Queries (`@media (max-width: 768px)` and `@media (max-width: 576px)`).
* **Bootstrap 5**:
  * Responsive grid system (`container`, `row`, `col-md-*`).
  * Cross-browser normalization and base component utilities.
* **Google Fonts**:
  * External typography integration (`Poppins`).
* **Git & GitHub**:
  * Version control, collaborative branch management, and team integration.
