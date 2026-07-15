document.addEventListener('DOMContentLoaded', () => {

    // 1. SCROLL PROGRESS BAR INDICATOR
    window.onscroll = function() {
        // Hitung seberapa jauh layar di-scroll
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        
        // Aplikasikan lebar ke div myBar
        document.getElementById("myBar").style.width = scrolled + "%";

        // 2. EFEK NAVBAR MENYUSUT & BAYANGAN
        const navbar = document.querySelector('.modern-navbar');
        if (winScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // 3. INTERSECTION OBSERVER UNTUK ANIMASI MUNCUL (REVEAL)
    // Mencari semua elemen yang memiliki kelas reveal
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealOptions = {
        threshold: 0.15, // Memicu animasi saat 15% elemen terlihat di layar
        rootMargin: "0px 0px -50px 0px" 
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return; // Jika belum terlihat, jangan lakukan apa-apa
            } else {
                // Tambahkan kelas 'active' untuk memicu CSS animasi
                entry.target.classList.add('active');
                // Hentikan pantauan pada elemen ini agar animasi tidak berulang-ulang
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Terapkan observer ke setiap elemen
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

});