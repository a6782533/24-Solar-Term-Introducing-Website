$(function () {
  $('#fullpage').fullpage({
    navigation: true,

    afterLoad: function (anchorLink, index) {
      if (index == 1) {
        setTimeout(() => {
          var texts = document.getElementsByClassName('fade-in-1-first');
          for (var i = 0; i < texts.length; i++) {
            texts[i].style.transition = 'opacity 1s ease';
            texts[i].style.opacity = '1';
          }
        }, 200);
        setTimeout(() => {
          texts = document.getElementsByClassName('fade-in-1');
          for (var i = 0; i < texts.length; i++) {
            texts[i].style.transition = 'opacity 1s ease';
            texts[i].style.opacity = '1';
          }
        }, 800);
        setTimeout(function () {
          var img = document.getElementById('img_1');
          img.style.opacity = 1;
          img.style.width = '500px';
          img.style.height = '300px';
        }, 1300);
      }
      if (index == 2) {
        var texts = document.getElementsByClassName('fade-in-2');
        for (var i = 0; i < texts.length; i++) {
          texts[i].style.transition = 'opacity 1s ease';
          texts[i].style.opacity = '1';
        }
        setTimeout(() => {
          texts = document.getElementsByClassName('fade-in-3');
          for (var i = 0; i < texts.length; i++) {
            texts[i].style.transition = 'opacity 1s ease';
            texts[i].style.opacity = '1';
          }
        }, 500);
      }
      if (index == 3) {
        var texts = document.getElementsByClassName('fade-in-4');
        for (var i = 0; i < texts.length; i++) {
          texts[i].style.transition = 'opacity 1s ease';
          texts[i].style.opacity = '1';
        }
        setTimeout(function () {
          var img = document.getElementById('img_3');
          img.style.opacity = 1;
          img.style.width = '500px';
          img.style.height = '250px';
        }, 500);
      }
      if (index == 4) {
        var texts = document.getElementsByClassName('fade-in-5');
        for (var i = 0; i < texts.length; i++) {
          texts[i].style.transition = 'opacity 1s ease';
          texts[i].style.opacity = '1';
        }
        setTimeout(() => {
          var img = document.getElementById('img_4');
          img.style.opacity = 1;
          img.style.width = '500px';
          img.style.height = '300px';
        }, 500);
      }
      if (index == 5) {
        var texts = document.getElementsByClassName('fade-in-6');
        for (var i = 0; i < texts.length; i++) {
          texts[i].style.transition = 'opacity 1s ease';
          texts[i].style.opacity = '1';
        }
        setTimeout(() => {
          var img = document.getElementById('img_5');
          img.style.opacity = 1;
          img.style.width = '500px';
          img.style.height = '300px';
        }, 500);
      }
      if (index == 6) {
          var texts = document.getElementsByClassName('fade-in-7-first');
          for (var i = 0; i < texts.length; i++) {
            texts[i].style.transition = 'opacity 1s ease';
            texts[i].style.opacity = '1';
          }
        setTimeout(() => {
          texts = document.getElementsByClassName('fade-in-7');
          for (var i = 0; i < texts.length; i++) {
            texts[i].style.transition = 'opacity 1s ease';
            texts[i].style.opacity = '1';
          }
        }, 500);
      }
    }
  });

});