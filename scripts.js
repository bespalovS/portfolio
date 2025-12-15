  // Переключение темы
    const toggle = document.getElementById('themeToggle');
    toggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
    });

    // Плавная прокрутка
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Слайдер проектов
    const slider = document.getElementById('projectSlider');
    const slides = slider.querySelector('.slides');
    const slideItems = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');

    let currentIndex = 0;

    function updateSlider() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slideItems.length;
      updateSlider();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
      updateSlider();
    });

    // Валидация формы
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    form.addEventListener('submit', e => {
      e.preventDefault();
      status.textContent = 'Сообщение успешно отправлено (демо)';
      form.reset();
    });