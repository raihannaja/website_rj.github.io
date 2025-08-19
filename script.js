
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

fadeEls.forEach(el => {
    observer.observe(el);
});



window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');

    // Tunggu minimal 3 detik sebelum menghilang
    const minDuration = 2000; // 2000 ms = 2 detik

    // Hitung sudah berapa lama halaman dimulai
    const pageLoadTime = performance.now(); // Waktu sejak halaman mulai

    // Jika halaman dimuat sangat cepat, tahan preloader
    if (pageLoadTime < minDuration) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            preloader.style.transition = 'opacity 0.5s ease';

            // Scroll ke atas setelah preloader hilang
            window.scrollTo(0, 0);
        }, minDuration - pageLoadTime);
    } else {
        // Jika halaman memang lambat, langsung sembunyikan
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        preloader.style.transition = 'opacity 0.5s ease';
        window.scrollTo(0, 0);
    }
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav ul");
hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamburger.classList.toggle("active");
});

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});

// Alternatif: Paksa scroll ke atas saat load
window.onload = function () {
    window.scrollTo(0, 0);
};

