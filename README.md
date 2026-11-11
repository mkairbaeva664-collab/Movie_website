# MovieHub - Interactive Movie Catalog

**Project Topic:** Dynamic Movie Catalog and Review Platform

**Group:** IT-2504

**Group members:** Madina Kairbayeva, Tamerlan Iskakov, Abdyssadykov Daniyar

**Published Website:** https://mkairbaeva664-collab.github.io/Movie_website/

## Short Description
MovieHub is a responsive, interactive web application designed for movie enthusiasts to browse catalogs, view trailers, and manage movie data. This endterm project extends our static midterm website by introducing dynamic JavaScript and jQuery functionalities. Key enhancements include real-time search and filtering, client-side form validation, an interactive image gallery, and a fully functional CRUD table, all executed dynamically without requiring page reloads.

## Technologies Used
* **Markup & Styling:** HTML5, CSS3
* **CSS Framework:** Bootstrap 5.3
* **Scripting & DOM Manipulation:** JavaScript (ES6+), jQuery (v3.6)
* **Deployment & Version Control:** Git, GitHub

## Features Implemented
* **Real-time Search & Filter:** Dynamically search movies by title and filter by genre simultaneously using immediate event listeners.
* **Client-Side Validation:** Secure registration form with regex-based email verification, real-time password strength indication, and match checks.
* **CRUD Movie Management:** A dynamic data table allowing users to Create, Read, Update, and Delete movie records on the fly.
* **Interactive Gallery:** A responsive poster gallery featuring a custom Lightbox with navigation and smooth jQuery transition animations.

## Group Members & Individual Contributions

**1. Madina Kairbayeva**
* **Form Validation (2.1):** 
  * Developed the user registration form with strict client-side validation.
  * Implemented mandatory field checks for Name, Email, and Password.
  * Built RegEx-based email format verification.
  * Created a dynamic password strength indicator (Weak / Medium / Strong) and "Confirm Password" match logic.
  * Configured real-time UI feedback (success/error messages) and prevented form submission upon validation failures.
* **Image Gallery (2.4):**
  * Designed a responsive movie poster gallery utilizing the Bootstrap Grid system.
  * Implemented a custom Lightbox feature for enlarged image viewing upon click.
  * Added Next and Previous navigation controls inside the lightbox.
  * Applied smooth UI transitions utilizing jQuery `.fadeIn()` and `.fadeOut()` effects.

**2. Tamerlan Iskakov**
* **Dynamic Search & Filter (2.2):**
  * Engineered the real-time search bar for querying movies by title.
  * Implemented genre-based category filters (All, Action, Comedy, Horror, Drama, Romance).
  * Programmed the search and filter logic to be strictly case-insensitive.
  * Synchronized the simultaneous operation of text-based search and category buttons.
  * Integrated a dynamic "No movies found" alert when query conditions yield no results.
  * Utilized `.on('input')` event listeners to update the catalog DOM immediately without reloading the page.

**3. Abdyssadykov Daniyar**
* **Dynamic Table with CRUD Operations (2.3):**
  * Built a comprehensive JavaScript-driven data table for movie management.
  * **Create:** Enabled the insertion of new movie entries.
  * **Read:** Rendered all movie records dynamically into a formatted table.
  * **Update:** Provided functionality to edit and update existing movie information.
  * **Delete:** Implemented safe item removal logic with user confirmation prompts.
* **Documentation & Publishing:**
  * Structured and updated the existing `README.md` to reflect all endterm enhancements and individual contributions.
  * Managed the GitHub repository integrity and project structure.
  * Deployed the finalized project to a live hosting environment and prepared all requisite submission links.
