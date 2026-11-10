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