const CONFIG = {
    // 1. Data Pasangan
    pasangan: {
        pihak1: {
            nama: "Nama Kamu",
            kota: "Bogor, Indonesia",
            foto: "assets/foto-saya.jpg"
        },
        pihak2: {
            nama: "Nama Pasangan",
            kota: "Kota Pasangan",
            foto: "assets/foto-pasangan.jpg"
        }
    },

    // 2. Playlist Spotify Embed
    spotifyEmbed: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EJDs4ryKICT21?utm_source=generator&theme=0&si=dddad0548c784927" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',

    // 3. Target Pertemuan Berikutnya
    nextMeeting: {
        tanggal: "2027-01-01T00:00:00",
        lokasi: "Stasiun/Bandara/Kafe Favorit"
    },

    // 4. Timeline Momen Penting
    timeline: [
        {
            tanggal: "15 Agustus 2023",
            judul: "Pertama Kali Bertemu",
            cerita: "Tulis cerita singkat tentang bagaimana kalian pertama kali bertemu di sini.",
            foto: "assets/timeline-1.jpg"
        },
        {
            tanggal: "1 Januari 2024",
            judul: "Mulai LDR",
            cerita: "Tulis pesan semangat tentang keputusan kalian memulai LDR.",
            foto: "assets/timeline-2.jpg"
        }
    ],

    // 5. Surat "Open When..." (Menjadi 2 Opsi Sahaja)
    openWhen: [
        {
            kondisi: "Buka saat kamu kangen...",
            pesan: "Klik tombol di bawah ini untuk melihat pesan/foto khusus di Google Drive:",
            driveLink: "https://drive.google.com/your-folder-link-1"
        },
        {
            kondisi: "Buka saat kamu sedang lelah...",
            pesan: "Aku sudah menyiapkan sesuatu untuk menyemangatimu di sini:",
            driveLink: "https://drive.google.com/your-folder-link-2"
        }
    ],

    // 6. Galeri Foto
    galeri: [
        { url: "assets/galeri-1.jpg", kategori: "Liburan" },
        { url: "assets/galeri-2.jpg", kategori: "Video Call" },
        { url: "assets/galeri-3.jpg", kategori: "Random" }
    ]
};