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


    
// 获取图片容器和所有图片
const slideshow = document.getElementById("slideshow");
const images = slideshow.getElementsByTagName("img");

let currentIndex = 0;

// 显示指定索引的图片
function showImage(index) {
  // 移除之前的active类名
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }

  // 添加active类名以显示当前图片
  images[index].classList.add("active");
}

// 切换到下一张图片
function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

// 设置定时器，每隔1秒切换一张图片
setInterval(nextImage, 1000);

// 初始显示第一张图片
showImage(currentIndex);
