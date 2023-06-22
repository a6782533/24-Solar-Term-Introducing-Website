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

window.addEventListener('scroll', function() {

    var div1 = document.getElementById('chun1');
    var div2 = document.getElementById('chun2');
    var div3 = document.getElementById('chun3');
    var div4 = document.getElementById('chun4');
    var div5 = document.getElementById('chun5');
    var div6 = document.getElementById('chun6');


    var position = div1.getBoundingClientRect().top;
    var under = div6.getBoundingClientRect().bottom;

    var offset1 = window.innerHeight * 0.9 ; // 触发动画的位置，这里设置为窗口高度的0.9
    var offset2 = window.innerHeight * 0.1 ;
    if ((position < offset1 && under > window.innerHeight)||(position<=0&&under>=offset2)) {
        div1.classList.add('chuntian1');
        div2.classList.add('chuntian2');
        div3.classList.add('chuntian3');
        div4.classList.add('chuntian4');
        div5.classList.add('chuntian5');
        div6.classList.add('chuntian6');
    } else {
        div1.classList.remove('chuntian1');
        div2.classList.remove('chuntian2');
        div3.classList.remove('chuntian3');
        div4.classList.remove('chuntian4');
        div5.classList.remove('chuntian5');
        div6.classList.remove('chuntian6');
    }
    
});