document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Profil Pasangan
    document.getElementById('nama1').textContent = CONFIG.pasangan.pihak1.nama;
    document.getElementById('kota1').textContent = CONFIG.pasangan.pihak1.kota;
    document.getElementById('foto1').src = CONFIG.pasangan.pihak1.foto;

    document.getElementById('nama2').textContent = CONFIG.pasangan.pihak2.nama;
    document.getElementById('kota2').textContent = CONFIG.pasangan.pihak2.kota;
    document.getElementById('foto2').src = CONFIG.pasangan.pihak2.foto;

    // 2. Render Countdown Timer
    document.getElementById('lokasi-ketemu').textContent = `Lokasi pertemuan: ${CONFIG.nextMeeting.lokasi}`;
    const targetDate = new Date(CONFIG.nextMeeting.tanggal).getTime();
    const countdownElement = document.getElementById('countdown-timer');

    const updateCountdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(updateCountdown);
            countdownElement.innerHTML = "<h3 style='color: var(--accent-color);'>Hari ini kita bertemu! 🤍</h3>";
            return;
        }

        document.getElementById('hari').textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById('jam').textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('menit').textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('detik').textContent = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);

    // 3. Render Timeline
    const timelineContainer = document.getElementById('timeline-container');
    CONFIG.timeline.forEach(item => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <img src="${item.foto}" alt="${item.judul}" loading="lazy">
            <div class="timeline-content">
                <span>${item.tanggal}</span>
                <h4>${item.judul}</h4>
                <p>${item.cerita}</p>
            </div>
        `;
        timelineContainer.appendChild(div);
    });

    // 4. Render Open When Cards (Link Google Drive)
    const openWhenContainer = document.getElementById('open-when-container');
    CONFIG.openWhen.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'open-when-card';
        
        div.innerHTML = `
            <strong>💌 ${item.kondisi}</strong>
            <div class="card-content" id="card-${index}">
                <p style="margin-bottom: 1rem; font-size: 0.9rem; color: var(--text-secondary);">${item.pesan}</p>
                <a href="${item.driveLink}" target="_blank" class="btn-gdrive">📂 Buka di Google Drive</a>
            </div>
        `;
        
        // Toggle ekspansi kartu
        div.addEventListener('click', (e) => {
            // Jika tombol link yang diklik, jangan tutup kartunya
            if (e.target.tagName.toLowerCase() === 'a') return; 
            
            const content = document.getElementById(`card-${index}`);
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        });
        openWhenContainer.appendChild(div);
    });

    // 5. Render Galeri
    const galleryContainer = document.getElementById('gallery-container');
    CONFIG.galeri.forEach(item => {
        const img = document.createElement('img');
        img.src = item.url;
        img.alt = item.kategori;
        img.loading = "lazy";
        galleryContainer.appendChild(img);
    });

    // 6. Render Playlist Spotify
    document.getElementById('playlist-container').innerHTML = CONFIG.spotifyEmbed;
});