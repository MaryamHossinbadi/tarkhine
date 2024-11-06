let likeBtn = document.querySelector('.like-btn');

likeBtn.addEventListener('click', function (e) {
    toggleLike();
    if (likeBtn.classList.contains('liked')){
        likeBtn.textContent = 'Unlike'
    }else {
        likeBtn.textContent = 'Like'
    }
});

function toggleLike() {
    likeBtn.classList.toggle('liked')
}