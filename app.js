document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Profil Pasangan
    document.getElementById('nama1').textContent = CONFIG.pasangan.pihak1.nama;
    document.getElementById('kota1').textContent = CONFIG.pasangan.pihak1.kota;
    document.getElementById('foto1').src = CONFIG.pasangan.pihak1.foto;
    document.getElementById('foto1').alt = CONFIG.pasangan.pihak1.nama;

    document.getElementById('nama2').textContent = CONFIG.pasangan.pihak2.nama;
    document.getElementById('kota2').textContent = CONFIG.pasangan.pihak2.kota;
    document.getElementById('foto2').src = CONFIG.pasangan.pihak2.foto;
    document.getElementById('foto2').alt = CONFIG.pasangan.pihak2.nama;

    // 2. Render Countdown Timer
    document.getElementById('lokasi-ketemu').textContent = `Lokasi pertemuan: ${CONFIG.nextMeeting.lokasi}`;
    const targetDate = new Date(CONFIG.nextMeeting.tanggal).getTime();
    const countdownElement = document.getElementById('countdown-timer');

    if (isNaN(targetDate)) {
        countdownElement.innerHTML = '<p class="countdown-message">Tanggal target belum diatur dengan benar</p>';
    } else {
        const renderCountdown = () => {
            const distance = targetDate - Date.now();

            if (distance <= 0) {
                const lewat = Math.abs(distance);
                countdownElement.innerHTML = lewat < 86400000
                    ? '<p class="countdown-message">Hari ini kita bertemu.</p>'
                    : '<p class="countdown-message">Sampai jumpa di pertemuan berikutnya.</p>';
                return false;
            }

            document.getElementById('hari').textContent  = Math.floor(distance / 86400000);
            document.getElementById('jam').textContent   = Math.floor((distance % 86400000) / 3600000);
            document.getElementById('menit').textContent = Math.floor((distance % 3600000) / 60000);
            document.getElementById('detik').textContent = Math.floor((distance % 60000) / 1000);
            return true;
        };

        if (renderCountdown()) {
            const timer = setInterval(() => { if (!renderCountdown()) clearInterval(timer); }, 1000);
        }
    }

    // 3. Render Timeline
    const timelineContainer = document.getElementById('timeline-container');
    CONFIG.timeline.forEach(item => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <img src="${item.foto}" alt="${item.judul}" loading="lazy" decoding="async">
            <div class="timeline-content">
                <span>${item.tanggal}</span>
                <h3>${item.judul}</h3>
                <p>${item.cerita}</p>
            </div>
        `;
        timelineContainer.appendChild(div);
    });

    // 4. Render Open When Cards (Link Google Drive)
    const openWhenContainer = document.getElementById('open-when-container');
    CONFIG.openWhen.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'open-when-card glass';

        div.innerHTML = `
            <strong>${item.kondisi}</strong>
            <div class="card-content" id="card-${index}">
                <p>${item.pesan}</p>
                <a href="${item.driveLink}" target="_blank" rel="noopener" class="btn-gdrive">Buka di Google Drive</a>
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
        img.loading = 'lazy';
        img.decoding = 'async';
        galleryContainer.appendChild(img);
    });

    // 6. Render Playlist Spotify
    document.getElementById('playlist-container').innerHTML = CONFIG.spotifyEmbed;
});
