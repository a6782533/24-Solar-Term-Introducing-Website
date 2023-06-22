$(function(){
    $('#fullpage').fullpage( {
        navigation: true,

        afterLoad: function(anchorLink,index) {
            if (index == 1) {
              var img = document.getElementById('img_1');
              img.style.opacity = 1;
              img.style.width = '500px';
              img.style.height = '300px';
              var texts = document.getElementsByClassName('fade-in-1');
              for (var i = 0; i < texts.length; i++) {
                texts[i].style.transition = 'opacity 1s ease';
                texts[i].style.opacity = '1';
              }
            }
            if (index == 2) {
                var texts = document.getElementsByClassName('fade-in-2-first');
                for (var i = 0; i < texts.length; i++) {
                  texts[i].style.transition = 'opacity 1s ease';
                  texts[i].style.opacity = '1';
                }
                setTimeout(() => {
                  texts = document.getElementsByClassName('fade-in-2');
                  for (var i = 0; i < texts.length; i++) {
                  texts[i].style.transition = 'opacity 1s ease';
                  texts[i].style.opacity = '1';
                  }
                }, 500);
                setTimeout(() => {
                  var img = document.getElementById('img_2');
                  img.style.opacity = 1;
                  img.style.width = '500px';
                  img.style.height = '300px';
                }, 1000);
            }
            if (index == 3) {
              var texts = document.getElementsByClassName('fade-in-3-first');
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
              setTimeout(() => {
                var img = document.getElementById('img_3');
                img.style.opacity = 1;
                img.style.width = '500px';
                img.style.height = '300px';
              }, 1000);
            }
            if (index == 4) {
                var img = document.getElementById('img_4');
                img.style.opacity = 1;
                img.style.width = '500px';
                img.style.height = '300px';
                var texts = document.getElementsByClassName('fade-in-4');
                for (var i = 0; i < texts.length; i++) {
                  texts[i].style.transition = 'opacity 1s ease';
                  texts[i].style.opacity = '1';
                }
            }
            if (index == 5) {
                var img = document.getElementById('img_5');
                img.style.opacity = 1;
                img.style.width = '500px';
                img.style.height = '300px';
                var texts = document.getElementsByClassName('fade-in-5');
                for (var i = 0; i < texts.length; i++) {
                  texts[i].style.transition = 'opacity 1s ease';
                  texts[i].style.opacity = '1';
                }
            }
            if (index == 6) {
              var img = document.getElementById('img_6');
              img.style.opacity = 1;
              img.style.width = '500px';
              img.style.height = '300px';
              var texts = document.getElementsByClassName('fade-in-6');
              for (var i = 0; i < texts.length; i++) {
                texts[i].style.transition = 'opacity 1s ease';
                texts[i].style.opacity = '1';
              }
          }
          }
    });

});