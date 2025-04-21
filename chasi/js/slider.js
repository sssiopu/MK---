document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        // Основные параметры
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        
        // Пагинация
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        
        // Навигация
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Эффекты
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        
        // Адаптация
        breakpoints: {
            1200: {
                // Настройки для больших экранов
            },
            768: {
                // Настройки для планшетов
            },
            480: {
                // Настройки для мобильных
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Обработка кликов по кнопкам "В корзину"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Здесь можно добавить логику добавления в корзину
            console.log('Товар добавлен в корзину');
            
            // Анимация кнопки
            this.textContent = 'ДОБАВЛЕНО';
            this.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                this.textContent = 'В КОРЗИНУ';
                this.style.backgroundColor = 'var(--primary_color)';
            }, 2000);
        });
    });
    
    // Обработка поиска
    const searchInput = document.querySelector('.search-box input');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const productName = card.querySelector('.product-name').textContent.toLowerCase();
            
            if (productName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});