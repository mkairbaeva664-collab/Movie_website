//FORM VALIDATION
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

        if (password.length >= 8) {
            strength++;
        }

        if (/[A-Z]/.test(password)) {
            strength++;
        }

        if (/[a-z]/.test(password)) {
            strength++;
        }

        if (/[0-9]/.test(password)) {
            strength++;
        }

        if (/[^A-Za-z0-9]/.test(password)) {
            strength++;
        }

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

        if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isMessageValid) 
            {
            formMessage.textContent = "Registration successful!";
            formMessage.style.color = "green";

            form.reset();

            const inputs = form.querySelectorAll("input, textarea");

            inputs.forEach(function(input) {
                input.classList.remove("is-valid", "is-invalid");
            });

            passwordStrength.textContent = "";
            passwordStrength.className = "password-strength";
        } else {
            formMessage.textContent = "Please correct the errors in the form.";
            formMessage.style.color = "red";
        }
    });
}


//2. IMAGE GALLERY / LIGHTBOX

//2. IMAGE GALLERY / LIGHTBOX

if (typeof jQuery !== "undefined") {

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

        // Используем делегирование событий для видимых карточек
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
                if (event.key === "ArrowLeft") {
                    showPrevious();
                }
                if (event.key === "ArrowRight") {
                    showNext();
                }
                if (event.key === "Escape") {
                    closeLightbox();
                }
            }
        });
    });
}

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