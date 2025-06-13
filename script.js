// Cookie 同意邏輯
function acceptCookies() {
    document.getElementById('cookie-consent').style.display = 'none';
    localStorage.setItem('cookieAccepted', 'true');
  }
  
  window.onload = function () {
    if (!localStorage.getItem('cookieAccepted')) {
      document.getElementById('cookie-consent').style.display = 'block';
    }
  };
  
  // 輪播邏輯
  const slide = document.querySelector('.carousel-slide');
  const images = document.querySelectorAll('.carousel-slide img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  let index = 0;
  
  // 動態設定 carousel 寬度
  slide.style.width = `${images.length * 100}%`;
  images.forEach(img => {
    img.style.width = `${100 / images.length}%`;
    img.style.flexShrink = "0";
  });
  
  function showSlide(i) {
    index = (i + images.length) % images.length;
    slide.style.transform = `translateX(-${index * (100 / images.length)}%)`;
  }
  
  nextBtn.addEventListener('click', () => showSlide(index + 1));
  prevBtn.addEventListener('click', () => showSlide(index - 1));
  
  // 自動輪播
  setInterval(() => {
    showSlide(index + 1);
  }, 5000);
