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

    // 2. Target Pertemuan Berikutnya
    nextMeeting: {
        tanggal: "2027-01-01T00:00:00", // Format: YYYY-MM-DDTHH:MM:SS
        lokasi: "Stasiun/Bandara/Kafe Favorit"
    },

    // 3. Timeline Momen Penting
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

    // 4. Surat "Open When..." (Hanya Link Google Drive)
    openWhen: [
        {
            kondisi: "Buka saat kamu kangen...",
            pesan: "Klik tombol di bawah ini untuk melihat pesan/foto khusus di Google Drive:",
            driveLink: "https://drive.google.com/your-folder-link-1" // Masukkan link Google Drive kamu
        },
        {
            kondisi: "Buka saat kamu sedang lelah...",
            pesan: "Aku sudah menyiapkan sesuatu untuk menyemangatimu di sini:",
            driveLink: "https://drive.google.com/your-folder-link-2"
        },
        {
            kondisi: "Buka saat kamu butuh mendengar suaraku...",
            pesan: "Dengarkan rekaman suaraku melalui link Google Drive berikut:",
            driveLink: "https://drive.google.com/your-folder-link-3"
        }
    ],

    // 5. Galeri Foto
    galeri: [
        { url: "assets/galeri-1.jpg", kategori: "Liburan" },
        { url: "assets/galeri-2.jpg", kategori: "Video Call" },
        { url: "assets/galeri-3.jpg", kategori: "Random" }
    ],

    // 6. Playlist Spotify Embed
    spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
};