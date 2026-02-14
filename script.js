// ============= ELEMENTS =============
// Audio
const music1 = document.getElementById("music1");
const music2 = document.getElementById("music2");
const music3 = document.getElementById("music3");
const music4 = document.getElementById("music4");

// Containers
const signupContainer = document.getElementById("signup-container");
const envelopeContainer = document.getElementById("envelope-container");
const page1Container = document.getElementById("page1-container");
const page2Container = document.getElementById("page2-container");
const page3Container = document.getElementById("page3-container");
const letterContainer = document.getElementById("letter-container");
const giftsPageContainer = document.getElementById("gifts-page-container");
const gift1Container = document.getElementById("gift1-container");
const gift2Container = document.getElementById("gift2-container");
const gift3Container = document.getElementById("gift3-container");

// Signup elements
const nameInput = document.getElementById("name-input");
const signupBtn = document.getElementById("signup-btn");
const errorMessage = document.getElementById("error-message");

// User name displays
const userName1 = document.getElementById("user-name-1");
const userName3 = document.getElementById("user-name-3");

// Page 1 buttons (static)
const page1Yes = document.getElementById("page1-yes");
const page1No = document.getElementById("page1-no");

// Page 2 buttons (static)
const page2Yes = document.getElementById("page2-yes");
const page2No = document.getElementById("page2-no");

// Page 3 buttons (teleporting NO)
const page3Yes = document.getElementById("page3-yes");
const page3No = document.getElementById("page3-no");

// Gifts elements
const continueToGiftsBtn = document.getElementById("continueToGifts");
const clickMeBtn = document.getElementById("clickMeBtn");
const giftsContainer = document.getElementById("giftsContainer");
const giftBox1 = document.getElementById("giftBox1");
const giftBox2 = document.getElementById("giftBox2");
const giftBox3 = document.getElementById("giftBox3");
const backFromGift1 = document.getElementById("backFromGift1");
const backFromGift2 = document.getElementById("backFromGift2");
const backFromGift3 = document.getElementById("backFromGift3");

// ============= VARIABLES =============
let userNameValue = "";

// ============= MUSIC FUNCTIONS =============
function playMusic1() {
    music2.pause();
    music2.currentTime = 0;
    music3.pause();
    music3.currentTime = 0;
    music4.pause();
    music4.currentTime = 0;
    music1.volume = 0.5;
    music1.play().catch(err => {
        console.log("Music 1 play prevented:", err);
    });
}

function playMusic2() {
    music1.pause();
    music1.currentTime = 0;
    music3.pause();
    music3.currentTime = 0;
    music4.pause();
    music4.currentTime = 0;
    music2.volume = 0.5;
    music2.play().catch(err => {
        console.log("Music 2 play prevented:", err);
    });
}

function playMusic3() {
    music1.pause();
    music1.currentTime = 0;
    music2.pause();
    music2.currentTime = 0;
    music4.pause();
    music4.currentTime = 0;
    music3.volume = 0.5;
    music3.play().catch(err => {
        console.log("Music 3 play prevented:", err);
    });
}

function playMusic4() {
    music1.pause();
    music1.currentTime = 0;
    music2.pause();
    music2.currentTime = 0;
    music3.pause();
    music3.currentTime = 0;
    music4.volume = 0.5;
    music4.play().catch(err => {
        console.log("Music 4 play prevented:", err);
    });
}

// ============= PAGE TRANSITION =============
function hideAllPages() {
    signupContainer.style.display = "none";
    envelopeContainer.style.display = "none";
    page1Container.style.display = "none";
    page2Container.style.display = "none";
    page3Container.style.display = "none";
    letterContainer.style.display = "none";
    giftsPageContainer.style.display = "none";
    gift1Container.style.display = "none";
    gift2Container.style.display = "none";
    gift3Container.style.display = "none";
}

function showPage(pageToShow) {
    hideAllPages();
    pageToShow.style.display = "flex";
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// ============= SIGNUP LOGIC =============
function handleSignup() {
    console.log("Signup button clicked!");
    
    const name = nameInput.value.trim();
    console.log("Name entered:", name);
    
    if (!name) {
        errorMessage.textContent = "Please enter your name! 😺";
        console.log("No name entered");
        return;
    }
    
    userNameValue = name;
    userName1.textContent = name;
    userName3.textContent = name;
    localStorage.setItem("valentineName", name);
    errorMessage.textContent = "";
    
    console.log("Playing music and showing envelope...");
    
    // Play music
    playMusic1();
    
    // Show envelope page
    showPage(envelopeContainer);
    
    console.log("Envelope page should be visible now");
}

// Add click event listener
signupBtn.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Button clicked event fired");
    handleSignup();
});

// Handle Enter key
nameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        console.log("Enter key pressed");
        handleSignup();
    }
});

// ============= ENVELOPE CLICK =============
envelopeContainer.addEventListener("click", () => {
    console.log("Envelope clicked!");
    showPage(page1Container);
});

// ============= PAGE 1 LOGIC (Static buttons) =============
page1Yes.addEventListener("click", () => {
    console.log("Page 1: YES clicked");
    playMusic2();
    showPage(letterContainer);
});

page1No.addEventListener("click", () => {
    console.log("Page 1: NO clicked");
    showPage(page2Container);
});

// ============= PAGE 2 LOGIC (Static buttons) =============
page2Yes.addEventListener("click", () => {
    console.log("Page 2: YES clicked");
    showPage(page3Container);
});

page2No.addEventListener("click", () => {
    console.log("Page 2: NO clicked");
    playMusic2();
    showPage(letterContainer);
});

// ============= PAGE 3 LOGIC (Teleporting NO button) =============
function moveNoButton() {
    console.log("NO button moving!");
    
    // Random distance and angle
    const distance = Math.random() * 150 + 100;
    const angle = Math.random() * Math.PI * 2;
    
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;
    
    page3No.style.transition = "transform 0.3s ease";
    page3No.style.transform = `translate(${moveX}px, ${moveY}px)`;
    
    // Vibrate feedback if available
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// Mouse events
page3No.addEventListener("mouseover", moveNoButton);
page3No.addEventListener("click", function(e) {
    e.preventDefault();
    moveNoButton();
});

// Touch events for mobile
page3No.addEventListener("touchstart", function(e) {
    e.preventDefault();
    moveNoButton();
});

// YES button
page3Yes.addEventListener("click", () => {
    console.log("Page 3: YES clicked");
    playMusic2();
    showPage(letterContainer);
});

// ============= GIFTS FUNCTIONALITY =============
// Continue button from success page to gifts page
continueToGiftsBtn.addEventListener("click", () => {
    console.log("Continue to gifts clicked");
    showPage(giftsPageContainer);
    playMusic2(); // Switch to music2 when entering gifts page
});

// Show gifts when Click Me is clicked
clickMeBtn.addEventListener("click", () => {
    console.log("Click Me clicked");
    giftsContainer.style.display = "flex";
    clickMeBtn.style.display = "none";
});

// Gift 1 - Music Player (Aankhon Se Batana)
giftBox1.addEventListener("click", () => {
    console.log("Gift 1 clicked");
    showPage(gift1Container);
    playMusic3(); // Play aankhon-se-batana.mp3
});

backFromGift1.addEventListener("click", () => {
    console.log("Back from gift 1");
    showPage(giftsPageContainer);
    playMusic2(); // Back to music2 on gifts page
    // Reset gifts display
    giftsContainer.style.display = "flex";
    clickMeBtn.style.display = "none";
});

// Gift 2 - Flowers (music2 continues)
giftBox2.addEventListener("click", () => {
    console.log("Gift 2 clicked");
    showPage(gift2Container);
    // Keep music2 playing (no change)
});

backFromGift2.addEventListener("click", () => {
    console.log("Back from gift 2");
    showPage(giftsPageContainer);
    // music2 continues
    // Reset gifts display
    giftsContainer.style.display = "flex";
    clickMeBtn.style.display = "none";
});

// Gift 3 - Letter (Alag Aasmaan)
giftBox3.addEventListener("click", () => {
    console.log("Gift 3 clicked");
    showPage(gift3Container);
    playMusic4(); // Play alag-aasmaan.mp3
});

backFromGift3.addEventListener("click", () => {
    console.log("Back from gift 3");
    showPage(giftsPageContainer);
    playMusic2(); // Back to music2 on gifts page
    // Reset gifts display
    giftsContainer.style.display = "flex";
    clickMeBtn.style.display = "none";
});

// ============= INITIALIZE =============
console.log("Script loaded!");

// Check if name is already saved
const savedName = localStorage.getItem("valentineName");
if (savedName) {
    console.log("Found saved name:", savedName);
    nameInput.value = savedName;
    userNameValue = savedName;
    userName1.textContent = savedName;
    userName3.textContent = savedName;
}

// Make sure signup page is visible on load
hideAllPages();
signupContainer.style.display = "flex";

console.log("Initialization complete. Signup page should be visible.");

// Try to initialize audio on any user interaction
let audioInitialized = false;
function tryInitAudio() {
    if (!audioInitialized) {
        music1.play().catch(() => {});
        audioInitialized = true;
        console.log("Audio initialized");
    }
}

document.addEventListener("click", tryInitAudio, { once: true });
document.addEventListener("touchstart", tryInitAudio, { once: true });