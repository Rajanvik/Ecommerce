document.addEventListener("DOMContentLoaded", function() {
    const ratingStars = document.querySelectorAll('.star');
    const currentRating = document.querySelector('.current-rating');

    ratingStars.forEach((star, index) => {
        star.addEventListener('click', () => {
            let currentStar = index + 1;

            // Update stars color
            for (let i = 0; i < ratingStars.length; i++) {
                if (i < currentStar) {
                    ratingStars[i].classList.remove('text-gray-300');
                    ratingStars[i].classList.add('text-yellow-400');
                } else {
                    ratingStars[i].classList.remove('text-yellow-400');
                    ratingStars[i].classList.add('text-gray-300');
                }
            }

            currentRating.innerText = currentStar.toFixed(1); // Set rating to one decimal place
        });
    });
});
