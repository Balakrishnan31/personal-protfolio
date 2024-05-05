document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('.scroll-to');

    scrollLinks.forEach(scrollLink => {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetPosition = document.querySelector(targetId).offsetTop;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});
let likeCount = 0;

        // Check if user has already liked
        window.onload = function() {
            let liked = localStorage.getItem('liked');
            if (liked === 'true') {
                likeCount = parseInt(localStorage.getItem('likeCount'));
                document.getElementById('likeCount').innerText = likeCount;
            }
        };

        function increaseLikes() {
            let liked = localStorage.getItem('liked');
            if (liked !== 'true') {
                likeCount++;
                localStorage.setItem('liked', 'true');
                localStorage.setItem('likeCount', likeCount);
                document.getElementById('likeCount').innerText = likeCount;
            }
        }