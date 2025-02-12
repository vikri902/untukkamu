// Fungsi saat tombol login ditekan
function startLove() {
    let username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Masukkin dulu Sayang! ❤️");
        return;
    }

    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("lovePage").classList.remove("hidden");
    document.getElementById("userDisplay").textContent = username;

    startLoveQuotes();
    playMusic(); // Putar lagu otomatis setelah login
}

// Kata-kata romantis yang akan muncul otomatis
const loveQuotes = [
    "Cinta adalah ketika hati berbicara tanpa kata. 💕",
    "Aku mencintaimu lebih dari bintang mencintai malam. 🌙✨",
    "Hatiku berbunga-bunga setiap kali melihat senyummu. 🌸😊",
    "Kamu adalah takdir terbaik yang pernah kutemui. 💖",
    "Aku ingin bersamamu dalam setiap detik hidupku. ⏳❤️"
];

let index = 0;
const loveText = document.getElementById("loveText");

// Fungsi untuk mengganti teks setiap 3 detik
function startLoveQuotes() {
    setInterval(() => {
        loveText.textContent = loveQuotes[index];
        index = (index + 1) % loveQuotes.length;
    }, 3000);
}

// Fungsi untuk memutar atau menghentikan musik
let musicPlaying = false;
function toggleMusic() {
    let music = document.getElementById("loveMusic");
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
    } else {
        music.play();
        musicPlaying = true;
    }
}

// Putar musik otomatis setelah login
function playMusic() {
    let music = document.getElementById("loveMusic");
    music.play();
    musicPlaying = true;
}

// Efek partikel hati (menggunakan Particles.js)
particlesJS("particles-js", {
    particles: {
        number: { value: 30 },
        shape: { type: "image", image: { src: "https://cdn-icons-png.flaticon.com/512/833/833472.png", width: 100, height: 100 } },
        opacity: { value: 0.7, random: true },
        size: { value: 20, random: true },
        move: { enable: true, speed: 2, direction: "bottom", out_mode: "out" }
    }
});
