# MovieHub

**Project Topic:** Dynamic Movie Catalog, Rating Management, and Live API Explorer

**Group:** IT-2504

**Group Members:** Madina Kairbayeva, Tamerlan Iskakov, Abdyssadykov Daniyar

**GitHub Repository:** https://github.com/mkairbaeva664-collab/Movie_website

**Published Website:** https://mkairbaeva664-collab.github.io/Movie_website/

---

## Short Description
MovieHub is a responsive, multi-page web application designed for movie enthusiasts to explore film catalogs, watch official trailers, read and post reviews, and manage personal movie ratings. Expanding upon our midterm and endterm versions, the final project integrates persistent client-side state via `localStorage` (Light/Dark theme switching and user authentication), an interactive jQuery FAQ accordion, and real-time movie/show data fetching from a public REST API.

## Technologies Used
* **Markup & Styling:** HTML5 (Semantic Elements), CSS3 (Custom Properties / CSS Variables, Flexbox, Grid, Media Queries)
* **CSS Framework:** Bootstrap 5.3
* **Scripting & DOM Manipulation:** JavaScript, `localStorage` API, Fetch API (`async/await`)
* **JavaScript Library:** jQuery 3.7.1 (`.slideToggle()`, `.fadeIn()`, `.fadeOut()`, dynamic filtering)
* **External API:** TVMaze Public REST API (`https://api.tvmaze.com`)
* **Deployment & Version Control:** Git, GitHub, GitHub Pages

## Website Structure
1. **`index.html` (Home):** Hero banner, platform overview, and an interactive 5-question FAQ section powered by jQuery `.slideToggle()`.
2. **`movies.html` (Catalog):** Local movie catalog with real-time search, genre filtering, custom jQuery Lightbox poster gallery, and a Live API Explorer powered by TVMaze API.
3. **`ratings.html` (Ratings):** Interactive CRUD (Create, Read, Update, Delete) movie rating table persisted in `localStorage`.
4. **`trailers.html` (Trailers):** Curated collection of movie trailers with direct YouTube links and real-time search/genre filtering.
5. **`reviews.html` (Reviews):** Community movie review cards and a user review submission form.
6. **`register.html` (Sign In / Register):** Tabbed authentication interface featuring client-side form validation, password strength meter, and `localStorage`-based session management.

## Features Implemented
* **Light / Dark Theme Toggle:** Site-wide theme switcher using CSS variables and `localStorage` (`movieHubTheme`), preserving user preference across page reloads and navigation.
<img width="785" height="57" alt="image" src="https://github.com/user-attachments/assets/5665714b-b2fb-4f45-b316-f79ecf70a15e" />
<img width="616" height="422" alt="image" src="https://github.com/user-attachments/assets/541058ef-64d0-4f00-bbb2-32aadb58b3e8" />

* **User Authentication (`localStorage`):** Tabbed Sign-In and Registration forms with RegEx validation, account persistence, dynamic navigation bar updates (`Hello, [Name]` & `Sign Out`), and profile view.
<img width="1207" height="427" alt="image" src="https://github.com/user-attachments/assets/3f9f2486-6319-4378-87b7-f999eed4b36c" />
<img width="713" height="703" alt="image" src="https://github.com/user-attachments/assets/9ab2e9e5-33f2-4cc3-8c24-f37f6571fad8" />
<img width="652" height="677" alt="image" src="https://github.com/user-attachments/assets/79e5fb7b-bb0a-487e-b10f-2d9bad06151b" />
<img width="612" height="711" alt="image" src="https://github.com/user-attachments/assets/1616f42f-fa1d-4381-a486-4349e0a9edea" />

* **jQuery FAQ Accordion:** Smooth expanding/collapsing FAQ section on the Home page using `.slideToggle()` with dynamic `+` / `−` visual indicators.
<img width="714" height="511" alt="image" src="https://github.com/user-attachments/assets/57899db4-74c6-4ad7-8fa1-2b0b6efca943" />
<img width="403" height="331" alt="image" src="https://github.com/user-attachments/assets/9b103494-e47f-4c59-b2d3-92d9f62ffeac" />

* **Public API Integration (TVMaze API):** Asynchronous `fetch()` integration on the Catalog page allowing users to search thousands of titles dynamically, view posters/ratings/summaries, and handle network or empty-result errors gracefully.
<img width="1100" height="493" alt="image" src="https://github.com/user-attachments/assets/0c2ac508-ff4c-427d-9c1f-f850a2aa66b7" />
<img width="957" height="701" alt="image" src="https://github.com/user-attachments/assets/369b7b55-984d-4628-9acd-07538f6f251d" />
<img width="861" height="709" alt="image" src="https://github.com/user-attachments/assets/5f27a75f-0fd6-41ea-bf90-17c15bff3e00" />
<img width="488" height="700" alt="image" src="https://github.com/user-attachments/assets/5ffdc8fb-955e-459d-b979-bc364c0d0991" />

* **Real-Time Search & Genre Filter:** Instantaneous, case-insensitive filtering across movies and trailers.
<img width="828" height="226" alt="image" src="https://github.com/user-attachments/assets/de34fed0-1e05-4338-8f8b-5fc94990b70c" />
<img width="645" height="707" alt="image" src="https://github.com/user-attachments/assets/85282216-7bea-423e-b120-a60010fc13ec" />

* **Interactive Lightbox Gallery:** Enlarged poster modal with Next/Previous controls, keyboard navigation, and jQuery fade transitions.
<img width="441" height="721" alt="image" src="https://github.com/user-attachments/assets/872ee3c3-d710-4f2a-b27c-917295471ef8" />
<img width="565" height="721" alt="image" src="https://github.com/user-attachments/assets/627e26b4-f764-4460-a834-ece1313b8579" />

* **CRUD Movie Management:** Full Create, Read, Update, and Delete operations on the Ratings page with `localStorage` persistence.
<img width="663" height="664" alt="image" src="https://github.com/user-attachments/assets/0ffdef94-5b7f-4ab0-9603-af1a5d2a0626" />
<img width="558" height="293" alt="image" src="https://github.com/user-attachments/assets/5edfaeaa-0172-45e2-8aea-fcf584aeca18" />
<img width="556" height="738" alt="image" src="https://github.com/user-attachments/assets/04de1c67-1838-452a-b4f5-2f225c6ca841" />
<img width="1016" height="718" alt="image" src="https://github.com/user-attachments/assets/839a764e-47e2-4e61-849a-b6b65907228f" />
<img width="508" height="685" alt="image" src="https://github.com/user-attachments/assets/80819876-3cb8-42c8-8d90-9a66ed930110" />

## Group Members & Individual Contributions

**1. Tamerlan Iskakov**
* **JavaScript – Light/Dark Theme Toggle & Authentication (`localStorage`):**
  * Engineered the site-wide Light/Dark theme switcher using CSS custom properties and `localStorage` persistence across all 6 pages.
  * Implemented the tabbed Sign-In / Registration authentication flow with input validation, session storage (`movieHubUser`), dynamic navbar state rendering, and Sign-Out functionality.
* **Public API Integration (TVMaze API):**
  * Integrated the external TVMaze REST API using JavaScript `fetch()` and `async/await`.
  * Built dynamic DOM rendering for API search results (posters, genres, ratings, and sanitized summaries), interactive search/reset controls, loading spinners, and `try...catch` error handling.
* **Dynamic Search & Filter:**
  * Developed real-time, case-insensitive title search and multi-genre filtering on the Catalog and Trailers pages.

**2. Madina Kairbayeva**
* **HTML5 & CSS3 Architecture & Responsive Design:**
  * Designed and structured the semantic HTML5 layout across all 6 pages (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
  * Styled the consistent visual theme, responsive layouts (Flexbox, Grid, Bootstrap 5, and media queries for desktop, tablet, and mobile), and Light/Dark theme color palettes in `style.css`.
* **jQuery FAQ Accordion:**
  * Built the 5-question FAQ section on `index.html` using jQuery `.slideToggle()` for smooth animations and dynamic `+` / `−` state indicators.
* **Form Validation & Lightbox Gallery:**
  * Developed client-side registration validation (RegEx email check, password strength indicator, password match) and the interactive jQuery Lightbox poster gallery.
* **Final Project Report:**
  * Compiled and formatted the group project report, including objectives, architecture descriptions, screenshots, and contribution documentation.

**3. Abdyssadykov Daniyar**
* **Dynamic Table with CRUD Operations:**
  * Built a comprehensive JavaScript-driven data table for movie management on `ratings.html`.
  * **Create:** Enabled the insertion of new movie entries via a Bootstrap modal form.
  * **Read:** Rendered all movie records dynamically into a formatted table with `localStorage` persistence.
  * **Update:** Provided functionality to edit and update existing movie titles, genres, and ratings.
  * **Delete:** Implemented safe item removal logic with user confirmation prompts.

## AI Usage Acknowledgment
In accordance with the course AI Usage Policy, AI tools were used as supporting assistants during development for debugging JavaScript logic, refining CSS theme variables, and structuring documentation. All generated suggestions were reviewed, adapted, and integrated by the team members.
