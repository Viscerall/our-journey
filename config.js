const CONFIG = {
    // 1. Data Pasangan
    pasangan: {
        pihak1: {
            nama: "Nama Kamu",
            kota: "Bogor, Indonesia", // Kota asal
            timezone: "Asia/Jakarta",
            foto: "assets/foto-saya.jpg" // Ganti dengan nama file fotomu
        },
        pihak2: {
            nama: "Nama Pasangan",
            kota: "Kota Pasangan",
            timezone: "Asia/Tokyo", // Sesuaikan jika beda negara
            foto: "assets/foto-pasangan.jpg" // Ganti dengan nama file foto pasangan
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
        // Kamu bisa copy-paste blok di atas jika ingin menambah momen lain
    ],

    // 4. Surat "Open When..."
    openWhen: [
        {
            kondisi: "Buka saat kamu kangen...",
            pesan: "Jarak kita mungkin jauh, tapi perasaanku selalu dekat. Lihat kalender, kita akan segera bertemu!",
            voiceNote: "assets/vn-kangen.m4a" // Kosongkan tanda kutip ("") jika tidak ada audio
        },
        {
            kondisi: "Buka saat kamu sedang lelah...",
            pesan: "Kerjaan/kuliah memang berat, tapi kamu pasti bisa melewatinya. Istirahatlah sejenak, aku bangga padamu.",
            voiceNote: ""
        }
    ],

    // 5. Galeri Foto
    galeri: [
        { url: "assets/galeri-1.jpg", kategori: "Liburan" },
        { url: "assets/galeri-2.jpg", kategori: "Video Call" },
        { url: "assets/galeri-3.jpg", kategori: "Random" }
    ],

    // 6. Playlist Spotify (Ambil dari opsi 'Share' -> 'Embed track/playlist' di Spotify)
    spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
};