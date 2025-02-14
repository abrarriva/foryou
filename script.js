// Fungsi saat tombol login ditekan 
function startLove() {
    let username = document.getElementById("username").value.trim().toLowerCase();
    
    // Validasi nama, hanya "linda" yang diterima (mengabaikan kapitalisasi)
    if (username === "") {
        alert("Masukkan namamu dulu! ❤");
        return;
    }
    if (username !== "linda") {
        alert("Sayang, nama yang kamu masukkan nggak cocok. Hanya 'Linda' yang bisa masuk ke sini 💔");
        return;
    }

    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("lovePage").classList.remove("hidden");
    document.getElementById("userDisplay").textContent = "Linda";
}

// Kata-kata romantis yang akan muncul otomatis
const loveQuotes = [
    "Aku selalu senang melihat senyummu, sayang. 💕",
    "Kamu adalah alasan aku tersenyum setiap hari. 😊💕",
    "Setiap detik bersamamu adalah anugerah. 💫",
    "Aku nggak bisa berenti mikirin kamu, sayang. 🥺💖",
    "Aku ingin bersamamu dalam setiap detik hidupku. ⏳❤"
];

let index = 0;
const quoteBox = document.getElementById("quoteBox");

// Fungsi untuk mengganti teks kata-kata romantis satu per satu
function startLoveQuotes() {
    setInterval(() => {
        if (index < loveQuotes.length) {
            let para = document.createElement("p");
            para.textContent = loveQuotes[index];
            quoteBox.appendChild(para);
            index++;
            setTimeout(() => {
                para.remove();
            }, 3000); // Menghilangkan kata setelah 3 detik
        }
    }, 3000);
}

// Inisialisasi audio
let loveSong = document.getElementById("loveSong");

let currentSlide = 1;
function nextSlide() {
    const slides = document.querySelectorAll(".container");
    slides.forEach((slide) => {
        slide.classList.add("hidden"); // Menyembunyikan semua slide terlebih dahulu
    });

    if (currentSlide === 1) {
        document.getElementById("quotesPage").classList.remove("hidden");
        startLoveQuotes();  // Menampilkan kata-kata romantis satu per satu
        loveSong.currentTime = 88; // Mulai lagu dari menit ke 1:28 (88 detik)
        loveSong.play(); // Memastikan lagu tetap berjalan
        currentSlide++;
    } else if (currentSlide === 2) {
        document.getElementById("photoSlidePage").classList.remove("hidden");

        // Menampilkan 6 foto dengan deskripsi zigzag
        document.getElementById("photo1").src = "loveyou1.png"; // Ganti dengan file foto yang sesuai
        document.getElementById("photo1-desc").textContent = "Kita selalu bersama di setiap langkah. 💖";

        document.getElementById("photo2").src = "loveyou2.png"; // Ganti dengan file foto yang sesuai
        document.getElementById("photo2-desc").textContent = "Kamu alasan aku senyum tiap hari. 😊";

        document.getElementById("photo3").src = "loveyou3.png"; // Ganti dengan file foto yang sesuai
        document.getElementById("photo3-desc").textContent = "Hatiku nyaman cuma sama kamu. ✨";

        document.getElementById("photo4").src = "loveyou6.png"; // Ganti dengan file foto yang sesuai
        document.getElementById("photo4-desc").textContent = "Bersamamu adalah kebahagiaan sejati. ❤️";

        document.getElementById("photo5").src = "loveyou5.png"; // Ganti dengan file foto yang sesuai
        document.getElementById("photo5-desc").textContent = "Tempat ternyaman di dunia? Pelukan kamu. 🌟";

        document.getElementById("photo6").src = "loveyou4.png"; // Ganti dengan file foto yang sesuai
        document.getElementById("photo6-desc").textContent = "Kamu adalah segalanya bagiku. 💕";

        loveSong.play(); // Memastikan lagu tetap berjalan
        currentSlide++;
    } else if (currentSlide === 3) {
        document.getElementById("finalQuotePage").classList.remove("hidden");
        const finalQuoteBox = document.getElementById("finalQuoteBox");
        finalQuoteBox.innerHTML = "<p>Kamu rumahku selamanya, sayang 💖 Selamat Valentine buat kita! Semoga makin bucin tiap hari. 😘💕</p>";
        loveSong.play(); // Memastikan lagu tetap berjalan
        currentSlide++;
    } else if (currentSlide === 4) {
        document.getElementById("finalSlide").classList.remove("hidden"); // Tampilkan slide terakhir
        loveSong.play(); // Memastikan lagu tetap berjalan
        currentSlide++;
    }
}

// Menghentikan lagu saat mencapai waktu 2:43 (163 detik)
loveSong.ontimeupdate = function() {
    if (loveSong.currentTime >= 163) { // 2 menit 43 detik
        loveSong.pause();  // Menghentikan lagu
    }
};

// Efek Partikel Love Berjatuhan
particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        shape: {
            type: "image",
            image: {
                src: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
                width: 20,
                height: 20
            }
        },
        size: { value: 10 },
        move: {
            speed: 1,
            direction: "down",
            random: true
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" }
        }
    }
});

// Fungsi untuk melihat gambar saat diklik
function viewImage(imageUrl) {
    window.open(imageUrl, '_blank');
}
