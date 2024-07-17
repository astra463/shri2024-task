document.addEventListener('DOMContentLoaded', function () {
  // Загружаем HTML слайдера
  fetch('components/swiper.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('swiper-container').innerHTML = data;

          // Инициализация Swiper после загрузки HTML
          const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          });
      });
});

