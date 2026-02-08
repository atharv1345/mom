let momName = "Mom";
let typingText = "";
let status = "Sent ✓";
let showHidden = false;

const fullText = "Typing a message to the strongest woman I know...💗💗💗";


  document.getElementById("title").innerText =
    `💐 A Little Message for mummy 💐`;

  // Typing animation
  let index = 0;
  const typingInterval = setInterval(() => {
    document.getElementById("typingText").innerText =
      fullText.slice(0, index);
    index++;
    if (index > fullText.length) clearInterval(typingInterval);
  }, 40);

  // Message status updates
  setTimeout(() => {
    document.getElementById("status").innerText = "Delivered ✓✓";
  }, 2000);

  setTimeout(() => {
    document.getElementById("status").innerText = "Read ✅✅";
  }, 4000);

  // 🌸 Falling flowers
  setInterval(() => {
    const flower = document.createElement("div");
    flower.innerHTML = "🌸";
    flower.style.position = "fixed";
    flower.style.top = "-20px";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = "20px";
    flower.style.animation = "fall 8s linear";
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 8000);
  }, 600);

  // ✨ Stars
  const starsContainer = document.getElementById("stars");
  for (let i = 0; i < 40; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.innerHTML = "✨";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (2 + Math.random() * 3) + "s";
    starsContainer.appendChild(star);
  }

  // 🔊 Music autoplay with fade-in
  const audio = document.getElementById("bgMusic");
  audio.volume = 0;

  const startAudio = () => {
    audio.play().then(() => {
      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 0.4) {
          vol += 0.02;
          audio.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 200);
    }).catch(() => {});
    document.removeEventListener("click", startAudio);
  };

  startAudio();
  document.addEventListener("click", startAudio);

  // 💖 Hidden message
  document.getElementById("flowerBtn").addEventListener("click", () => {
    const hidden = document.getElementById("hiddenMessage");
    hidden.style.display = "block";

    hidden.innerHTML = `
      <strong>This is for you mom.</strong><br><br>
      Dear mummy,<br><br>
      You are not just part of my story.<br>
      You are the reason it exists.<br><br>
      If love could rewrite the stars,<br>
      they would spell mummy across the sky.<br><br>
      — The luckiest soul alive 💖
    `;
  });

