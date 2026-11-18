//Light/Dark theme
document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("movieHubTheme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        if (themeToggleBtn) themeToggleBtn.textContent = "Dark Mode";
    } else {
        if (themeToggleBtn) themeToggleBtn.textContent = "Light Mode";
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("light-theme");
            const isLight = document.body.classList.contains("light-theme");

            localStorage.setItem("movieHubTheme", isLight ? "light" : "dark");
            themeToggleBtn.textContent = isLight ? "Dark Mode" : "Light Mode";
        });
    }
});

//Registration form
const form = document.getElementById("registrationForm");

if (form) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const messageError = document.getElementById("messageError");

    const passwordStrength = document.getElementById("passwordStrength");
    const formMessage = document.getElementById("formMessage");

    function showError(input, errorElement, message) {
        errorElement.textContent = message;
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }

    function showSuccess(input, errorElement) {
        errorElement.textContent = "";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }

    function validateName() {
        const name = nameInput.value.trim();

        if (name === "") {
            showError(nameInput, nameError, "Name is required.");
            return false;
        }

        if (name.length < 2) {
            showError(nameInput, nameError, "Name must contain at least 2 characters.");
            return false;
        }

        showSuccess(nameInput, nameError);
        return true;
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            showError(emailInput, emailError, "Email is required.");
            return false;
        }

        if (!emailRegex.test(email)) {
            showError(emailInput, emailError, "Please enter a valid email address.");
            return false;
        }

        showSuccess(emailInput, emailError);
        return true;
    }

    function checkPasswordStrength() {
        const password = passwordInput.value;
        let strength = 0;

        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        if (password === "") {
            passwordStrength.textContent = "";
            passwordStrength.className = "password-strength";
            return;
        }

        if (strength <= 2) {
            passwordStrength.textContent = "Weak password";
            passwordStrength.className = "password-strength strength-weak";
        } else if (strength <= 4) {
            passwordStrength.textContent = "Medium password";
            passwordStrength.className = "password-strength strength-medium";
        } else {
            passwordStrength.textContent = "Strong password";
            passwordStrength.className = "password-strength strength-strong";
        }
    }

    function validatePassword() {
        const password = passwordInput.value;

        if (password === "") {
            showError(passwordInput, passwordError, "Password is required.");
            return false;
        }

        if (password.length < 8) {
            showError(passwordInput, passwordError, "Password must contain at least 8 characters.");
            return false;
        }

        showSuccess(passwordInput, passwordError);
        return true;
    }

    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (confirmPassword === "") {
            showError(confirmPasswordInput, confirmPasswordError, "Please confirm your password.");
            return false;
        }

        if (password !== confirmPassword) {
            showError(confirmPasswordInput, confirmPasswordError, "Passwords do not match.");
            return false;
        }

        showSuccess(confirmPasswordInput, confirmPasswordError);
        return true;
    }

    function validateMessage() {
        const message = messageInput.value.trim();

        if (message === "") {
            showError(messageInput, messageError, "Message is required.");
            return false;
        }

        if (message.length < 10) {
            showError(messageInput, messageError, "Message must contain at least 10 characters.");
            return false;
        }

        showSuccess(messageInput, messageError);
        return true;
    }

    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);

    passwordInput.addEventListener("input", function() {
        checkPasswordStrength();
        validatePassword();

        if (confirmPasswordInput.value !== "") {
            validateConfirmPassword();
        }
    });

    confirmPasswordInput.addEventListener("input", validateConfirmPassword);
    messageInput.addEventListener("input", validateMessage);

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isMessageValid = validateMessage();

        if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isMessageValid) {
            const accountData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                password: passwordInput.value
            };
            localStorage.setItem("movieHubRegisteredAccount", JSON.stringify(accountData));

            localStorage.setItem("movieHubUser", JSON.stringify({
                isLoggedIn: true,
                name: accountData.name,
                email: accountData.email
            }));
            location.reload();
        }
    });
}

//jQuery
if (typeof jQuery !== "undefined") {

    //Gallery
    $(document).ready(function() {
        function getVisibleImages() {
            return $(".movie-item:visible .card-img-top");
        }
        
        let currentIndex = 0;

        function openLightbox(index) {
            const images = getVisibleImages();
            currentIndex = index;

            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            } else if (currentIndex >= images.length) {
                currentIndex = 0;
            }

            const selectedImage = images.eq(currentIndex);
            const imageSrc = selectedImage.attr("src");
            const movieTitle = selectedImage
                .closest(".movie-card")
                .find(".card-title")
                .text();

            $("#lightboxImage").attr("src", imageSrc);
            $("#lightboxImage").attr("alt", movieTitle);
            $("#lightboxTitle").text(movieTitle);

            $("#movieLightbox")
                .css("display", "grid")
                .hide()
                .fadeIn(300);
        }

        function closeLightbox() {
            $("#movieLightbox").fadeOut(300);
        }

        function showPrevious() {
            currentIndex--;
            const images = getVisibleImages();
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            openLightbox(currentIndex);
        }

        function showNext() {
            currentIndex++;
            const images = getVisibleImages();
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            openLightbox(currentIndex);
        }

        $(document).on("click", ".movie-item:visible .card-img-top", function() {
            const images = getVisibleImages();
            const index = images.index(this);
            openLightbox(index);
        });

        $("#closeLightbox").on("click", closeLightbox);
        $("#prevMovie").on("click", showPrevious);
        $("#nextMovie").on("click", showNext);

        $("#movieLightbox").on("click", function(event) {
            if (event.target === this) {
                closeLightbox();
            }
        });

        $(document).on("keydown", function(event) {
            if ($("#movieLightbox").is(":visible")) {
                if (event.key === "ArrowLeft") showPrevious();
                if (event.key === "ArrowRight") showNext();
                if (event.key === "Escape") closeLightbox();
            }
        });
    });

    //Real time search and filter
    $(document).ready(function() {
        let currentGenre = 'All';

        function filterMovies() {
            let searchQuery = $('#search-input').val().toLowerCase();
            let visibleCount = 0;

            $('.movie-item').each(function() {
                let title = $(this).data('title').toLowerCase();
                let genre = $(this).data('genre');

                let matchesSearch = title.includes(searchQuery);
                let matchesGenre = (currentGenre === 'All' || genre === currentGenre);

                if (matchesSearch && matchesGenre) {
                    $(this).show();
                    visibleCount++;
                } else {
                    $(this).hide();
                }
            });

            if (visibleCount === 0) {
                $('#no-movies-msg').show();
            } else {
                $('#no-movies-msg').hide();
            }
        }

        $('#search-input').on('input', function() {
            filterMovies();
        });

        $('.filter-btn').on('click', function() {
            $('.filter-btn').removeClass('active');
            $(this).addClass('active');
            
            currentGenre = $(this).data('genre');
            filterMovies();
        });
    });

    //Ratings page
    $(document).ready(function() {
        if ($('#ratingsTableBody').length === 0) {
            return;
        }

        let movies = [
            { id: 1, title: "Inception", genre: "Sci-Fi", rating: 9.0 },
            { id: 2, title: "The Godfather", genre: "Crime", rating: 9.2 },
            { id: 3, title: "Pulp Fiction", genre: "Drama", rating: 8.9 },
            { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
            { id: 5, title: "Parasite", genre: "Thriller", rating: 8.6 }
        ];

        const savedMovies = localStorage.getItem("movieHubMovies");

        if (savedMovies !== null) {
            movies = JSON.parse(savedMovies);
        }

        let editingId = null;

        const movieModal = new bootstrap.Modal(
            document.getElementById("movieModal")
        );

        function saveMovies() {
            localStorage.setItem("movieHubMovies", JSON.stringify(movies));
        }

        function displayMovies() {
            const tableBody = $('#ratingsTableBody');
            tableBody.empty();

            if (movies.length === 0) {
                $('#emptyMoviesMessage').show();
            } else {
                $('#emptyMoviesMessage').hide();
            }

            movies.forEach(function(movie, index) {
                const row = $('<tr></tr>');

                row.append($('<td></td>').text(index + 1));
                row.append($('<td></td>').text(movie.title));
                row.append($('<td></td>').text(movie.genre));
                row.append($('<td></td>').text(Number(movie.rating).toFixed(1) + ' / 10'));

                const actionsTd = $('<td></td>');
                const editBtn = $('<button class="btn btn-sm btn-outline-warning edit-btn me-1">Edit</button>').attr('data-id', movie.id);
                const deleteBtn = $('<button class="btn btn-sm btn-outline-danger delete-btn">Delete</button>').attr('data-id', movie.id);

                actionsTd.append(editBtn, deleteBtn);
                row.append(actionsTd);

                tableBody.append(row);
            });

            $('#movieCount').text("Total movies: " + movies.length);
        }

        $('#addMovieBtn').on('click', function() {
            editingId = null;
            $('#movieForm')[0].reset();
            $('#movieModalTitle').text("Add Movie");
            movieModal.show();
        });

        $('#movieForm').on('submit', function(event) {
            event.preventDefault();

            const title = $('#movieTitle').val().trim();
            const genre = $('#movieGenre').val();
            const rating = Number($('#movieRating').val());

            if (!title || !genre || $('#movieRating').val() === '' ||
                !Number.isFinite(rating) || rating < 0 || rating > 10) {
                alert("Please enter valid movie information.");
                return;
            }

            if (editingId === null) {
                const newMovie = {
                    id: Date.now(),
                    title: title,
                    genre: genre,
                    rating: rating
                };
                movies.push(newMovie);
            } else {
                const movie = movies.find(function(item) {
                    return item.id === editingId;
                });

                if (movie) {
                    movie.title = title;
                    movie.genre = genre;
                    movie.rating = rating;
                }
            }

            saveMovies();
            displayMovies();

            movieModal.hide();
            $('#movieForm')[0].reset();
        });

        $(document).on('click', '.edit-btn', function() {
            editingId = Number($(this).data('id'));

            const movie = movies.find(function(item) {
                return item.id === editingId;
            });

            if (movie) {
                $('#movieTitle').val(movie.title);
                $('#movieGenre').val(movie.genre);
                $('#movieRating').val(movie.rating);
                $('#movieModalTitle').text("Edit Movie");
                movieModal.show();
            }
        });

        $(document).on('click', '.delete-btn', function() {
            const movieId = Number($(this).data('id'));
            const confirmed = confirm("Are you sure you want to delete this movie?");

            if (confirmed) {
                movies = movies.filter(function(movie) {
                    return movie.id !== movieId;
                });

                saveMovies();
                displayMovies();
            }
        });

        displayMovies();
    });

    //FAQ Accordion
    $(document).ready(function() {
        $(".faq-question").on("click", function() {
            const $item = $(this).closest(".faq-item");
            const $answer = $item.find(".faq-answer");
            const $icon = $(this).find(".faq-icon");

            $answer.stop(true, true).slideToggle(300);

            $item.toggleClass("active");
            if ($item.hasClass("active")) {
                $icon.text("−");
            } else {
                $icon.text("+");
            }
        });
    });
}

//Sign in / Sign out
document.addEventListener("DOMContentLoaded", function () {
    const authNavItem = document.getElementById("authNavItem");

    function loginUser(name, email) {
        const userData = {
            isLoggedIn: true,
            name: name,
            email: email
        };
        localStorage.setItem("movieHubUser", JSON.stringify(userData));
        updateAuthUI();
    }

    function logoutUser() {
        localStorage.removeItem("movieHubUser");
        updateAuthUI();
    }

    function updateAuthUI() {
        const savedUserJSON = localStorage.getItem("movieHubUser");
        const user = savedUserJSON ? JSON.parse(savedUserJSON) : null;

        if (authNavItem) {
            authNavItem.innerHTML = "";

            if (user && user.isLoggedIn) {
                const wrapper = document.createElement("div");
                wrapper.className = "d-flex align-items-center gap-2 ms-lg-2 mt-2 mt-lg-0";

                const greeting = document.createElement("span");
                greeting.className = "nav-link fw-semibold text-danger mb-0";
                greeting.textContent = "Hello, " + user.name;

                const signOutBtn = document.createElement("button");
                signOutBtn.className = "btn btn-sm btn-outline-secondary";
                signOutBtn.type = "button";
                signOutBtn.textContent = "Sign Out";
                signOutBtn.addEventListener("click", logoutUser);

                wrapper.append(greeting, signOutBtn);
                authNavItem.appendChild(wrapper);
            } else {
                const isRegisterPage = window.location.pathname.endsWith("register.html");
                const link = document.createElement("a");
                link.className = "nav-link" + (isRegisterPage ? " active" : "");
                link.href = "register.html";
                link.textContent = "Sign In / Register";
                authNavItem.appendChild(link);
            }
        }

        const loggedInProfile = document.getElementById("loggedInProfile");
        const authFormsWrapper = document.getElementById("authFormsWrapper");

        if (loggedInProfile && authFormsWrapper) {
            if (user && user.isLoggedIn) {
                document.getElementById("profileUserName").textContent = user.name;
                document.getElementById("profileUserEmail").textContent = user.email;
                loggedInProfile.style.display = "block";
                authFormsWrapper.style.display = "none";
            } else {
                loggedInProfile.style.display = "none";
                authFormsWrapper.style.display = "block";
            }
        }
    }

    const showSignInTab = document.getElementById("showSignInTab");
    const showRegisterTab = document.getElementById("showRegisterTab");
    const signInForm = document.getElementById("signInForm");
    const regForm = document.getElementById("registrationForm");

    if (showSignInTab && showRegisterTab && signInForm && regForm) {
        showSignInTab.addEventListener("click", function () {
            signInForm.style.display = "block";
            regForm.style.display = "none";
            showSignInTab.classList.replace("btn-outline-red", "btn-red");
            showRegisterTab.classList.replace("btn-red", "btn-outline-red");
        });

        showRegisterTab.addEventListener("click", function () {
            signInForm.style.display = "none";
            regForm.style.display = "block";
            showRegisterTab.classList.replace("btn-outline-red", "btn-red");
            showSignInTab.classList.replace("btn-red", "btn-outline-red");
        });
    }

    if (signInForm) {
        signInForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const loginName = document.getElementById("loginName");
            const loginEmail = document.getElementById("loginEmail");
            const loginPassword = document.getElementById("loginPassword");

            const nameErr = document.getElementById("loginNameError");
            const emailErr = document.getElementById("loginEmailError");
            const passErr = document.getElementById("loginPasswordError");
            const msgBox = document.getElementById("signInMessage");

            let isValid = true;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (loginName.value.trim().length < 2) {
                nameErr.textContent = "Please enter your name (min 2 chars).";
                loginName.classList.add("is-invalid");
                isValid = false;
            } else {
                nameErr.textContent = "";
                loginName.classList.remove("is-invalid");
            }

            if (!emailRegex.test(loginEmail.value.trim())) {
                emailErr.textContent = "Please enter a valid email address.";
                loginEmail.classList.add("is-invalid");
                isValid = false;
            } else {
                emailErr.textContent = "";
                loginEmail.classList.remove("is-invalid");
            }

            if (loginPassword.value.length < 6) {
                passErr.textContent = "Password must be at least 6 characters.";
                loginPassword.classList.add("is-invalid");
                isValid = false;
            } else {
                passErr.textContent = "";
                loginPassword.classList.remove("is-invalid");
            }

            if (isValid) {
                const savedAccountJSON = localStorage.getItem("movieHubRegisteredAccount");

                if (!savedAccountJSON) {
                    msgBox.textContent = "Account not found. Please register first!";
                    msgBox.style.color = "#dc3545";
                    return;
                }

                const savedAccount = JSON.parse(savedAccountJSON);

                if (savedAccount.email === loginEmail.value.trim() && savedAccount.password === loginPassword.value) {
                    msgBox.textContent = "";
                    loginUser(savedAccount.name, savedAccount.email);
                    signInForm.reset();
                } else {
                    msgBox.textContent = "Incorrect email or password!";
                    msgBox.style.color = "#dc3545";
                }
            }
        });
    }

    const profileSignOutBtn = document.getElementById("profileSignOutBtn");
    if (profileSignOutBtn) {
        profileSignOutBtn.addEventListener("click", logoutUser);
    }

    updateAuthUI();
});

//API
document.addEventListener("DOMContentLoaded", function () {
    const apiContainer = document.getElementById("apiMoviesContainer");
    if (!apiContainer) return;

    const apiSearchForm = document.getElementById("apiSearchForm");
    const apiSearchInput = document.getElementById("apiSearchInput");
    const apiResetBtn = document.getElementById("apiResetBtn");
    const apiLoading = document.getElementById("apiLoading");
    const apiErrorMsg = document.getElementById("apiErrorMsg");

    async function fetchMoviesFromAPI(query = "Avengers") {
        apiContainer.innerHTML = "";
        apiErrorMsg.style.display = "none";
        apiLoading.style.display = "block";

        try {
            const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();

            if (!Array.isArray(data) || data.length === 0) {
                apiErrorMsg.textContent = `No results found for "${query}". Try another title.`;
                apiErrorMsg.style.display = "block";
                return;
            }

            renderApiMovies(data.slice(0, 6));
        } catch (error) {
            apiErrorMsg.textContent = "Failed to load data from API. Please check your internet connection and try again.";
            apiErrorMsg.style.display = "block";
            console.error("API Fetch Error:", error);
        } finally {
            apiLoading.style.display = "none";
        }
    }

    function renderApiMovies(items) {
        apiContainer.innerHTML = "";

        items.forEach(function (item) {
            const show = item.show;

            const col = document.createElement("div");
            col.className = "col-md-4";

            const card = document.createElement("div");
            card.className = "card movie-card h-100";

            const img = document.createElement("img");
            img.className = "card-img-top";
            img.loading = "lazy";
            img.alt = show.name || "Poster";
            img.src = (show.image && show.image.medium)
                ? show.image.medium
                : "https://via.placeholder.com/300x420?text=No+Poster";

            const cardBody = document.createElement("div");
            cardBody.className = "card-body d-flex flex-column";

            const title = document.createElement("h5");
            title.className = "card-title";
            title.textContent = show.name || "Untitled";

            const meta = document.createElement("p");
            meta.className = "small text-danger fw-semibold mb-2";
            const genresText = (show.genres && show.genres.length > 0) ? show.genres.join(", ") : "General";
            const ratingText = (show.rating && show.rating.average) ? `★ ${show.rating.average}/10` : "No rating";
            meta.textContent = `${genresText} | ${ratingText}`;

            const summary = document.createElement("p");
            summary.className = "card-text flex-grow-1";
            const cleanSummary = show.summary
                ? show.summary.replace(/<[^>]*>/g, "")
                : "No description available.";
            summary.textContent = cleanSummary.length > 130
                ? cleanSummary.slice(0, 130) + "..."
                : cleanSummary;

            const linkBtn = document.createElement("a");
            linkBtn.className = "btn btn-outline-danger mt-2";
            linkBtn.href = show.url || "#";
            linkBtn.target = "_blank";
            linkBtn.rel = "noopener noreferrer";
            linkBtn.textContent = "More Info";

            cardBody.append(title, meta, summary, linkBtn);
            card.append(img, cardBody);
            col.appendChild(card);
            apiContainer.appendChild(col);
        });
    }

    apiSearchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const query = apiSearchInput.value.trim();
        if (query.length > 0) {
            fetchMoviesFromAPI(query);
        }
    });

    apiResetBtn.addEventListener("click", function () {
        apiSearchInput.value = "";
        fetchMoviesFromAPI("Avengers");
    });

    fetchMoviesFromAPI("Avengers");
});
