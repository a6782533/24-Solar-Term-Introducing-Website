document.addEventListener('DOMContentLoaded', function() {
    var navbarLinks = document.querySelectorAll('.navbar ul li a');
    var sections = document.querySelectorAll('div > h3');

    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
        e.preventDefault();

        var targetId = this.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);

        if (targetSection) {
            var targetOffsetTop = targetSection.offsetTop;
            window.scrollTo({
            top: targetOffsetTop,
            behavior: 'smooth'
            });
        }
        });
    });
    });
