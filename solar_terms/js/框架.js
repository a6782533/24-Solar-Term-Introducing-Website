window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.ph');
    let timeoutId;

    links.forEach(link => {
        let image;
        link.addEventListener('mouseenter', () => {
            timeoutId = setTimeout(() => {
                link.style.backgroundColor = '#add8e6';
                link.style.color = '#fff';
                const imagePath = link.getAttribute('data-image');
                if (!image) {
                    image = document.createElement('img');
                    image.src = imagePath;
                    image.classList.add('image');
                    link.appendChild(image);
                } else {
                    image.style.display = 'block';
                }
            }, 500);
        });

        link.addEventListener('mouseleave', () => {
            clearTimeout(timeoutId);
            link.style.backgroundColor = 'white';
            link.style.color = 'initial';
            if (image) {
                image.style.display = 'none';
            }
        });
    });
});