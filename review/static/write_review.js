document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
        star.classList.add('selected');
        let ratingValue = star.getAttribute('data-value');
        for (let i = 0; i < ratingValue; i++) {
            document.querySelectorAll('.star')[i].classList.add('selected');
        }
    });
});

document.getElementById('submit-review').addEventListener('click', () => {
    let business = document.getElementById('business-search').value;
    let rating = document.querySelectorAll('.star.selected').length;
    let review = document.getElementById('review-text').value;

    if (business && rating && review) {
        alert(`Review Submitted!\nBusiness: ${business}\nRating: ${rating}\nReview: ${review}`);
        // Here you would typically send this data to a server
    } else {
        alert('Please fill out all fields before submitting your review.');
    }
});
