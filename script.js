// Contestant Pool and Dares
// To remove a contestant from the active pool, set active: false
const csvEntries = [
    { active: true,  yourName: "Aarav Sharma",     dare: "Sing the chorus of Baby by Justin Bieber in the canteen." },
    { active: true,  yourName: "Priya Singh",       dare: "Ask a random student to rate your outfit out of 10." },
    { active: true,  yourName: "Rohan Gupta",       dare: "Do the chicken dance for 30 seconds in the middle of the lawn." },
    { active: true,  yourName: "Sneha Agarwal",     dare: "Walk backwards until someone asks what you're doing." },
    { active: false,  yourName: "Aditya Joshi",      dare: "Propose dramatically to a tree and wait for its answer." },
    { active: false,  yourName: "Ishita Bansal",     dare: "Speak only in a fake British accent for the next 10 minutes." },
    { active: false,  yourName: "Kabir Malhotra",    dare: "Ask five strangers if they believe in aliens." },
    { active: false,  yourName: "Neha Choudhary",    dare: "Do your best Shah Rukh Khan pose and dialogue in public." },
    { active: false,  yourName: "Arjun Meena",       dare: "Call your best friend and sing Happy Birthday even if it isn't their birthday." },
    { active: false,  yourName: "Mehak Saini",       dare: "Compliment five random people without repeating the same compliment." },
    { active: false,  yourName: "Vansh Goel",        dare: "Pretend to be a motivational speaker for one minute in front of a group." },
    { active: false,  yourName: "Simran Kaur",       dare: "Do 20 jumping jacks while loudly counting backwards." },
    { active: false,  yourName: "Nikhil Yadav",      dare: "Ask a random person to teach you their best dance move." },
    { active: false,  yourName: "Ritika Goyal",      dare: "Recite the alphabet like you're giving an emotional movie speech." },
    { active: false,  yourName: "Sarthak Mittal",    dare: "Freeze like a mannequin for one full minute wherever you are." }
];

// Only include entries explicitly marked as active
const names = csvEntries.filter(e => e.active === true && e.yourName).map(e => e.yourName);

let animationState = 'idle'; // 'idle', 'spinning', 'selected', 'revealed'
let spinTimeoutId = null;
let logoAnim = null;
let currentSelectedName = null;

const spinBtn = document.getElementById('spinBtn');
const dareBtn = document.getElementById('dareBtn');
const selectedNameDiv = document.getElementById('selectedName');
const selectedDareDiv = document.getElementById('selectedDare');

const riserAudio = new Audio('assets/Riser Sound Effect.mp3');
const applauseAudio = new Audio('assets/Applause Sound Effect.mp3');

function showError(message) {
    selectedNameDiv.textContent = message;
    selectedNameDiv.classList.add('show-center');
    selectedNameDiv.style.color = '#ff4444'; // Red error text
}

function selectNextContestant() {
    if (names.length === 0) {
        showError("No contestants available.");
        return null;
    }
    
    const finalIndex = Math.floor(Math.random() * names.length);
    return names[finalIndex];
}

function settleLogoInstantly() {
    if (logoAnim) {
        logoAnim.cancel();
        logoAnim = null;
    }
    const logo = document.querySelector('.logo');
    logo.style.position = 'fixed';
    logo.style.left     = '40px';
    logo.style.top      = '40px';
    logo.style.width    = '120px';
    logo.style.maxWidth = '120px';
    logo.style.margin   = '0';
    logo.style.transform = '';
    logo.style.transformOrigin = '';
    logo.style.willChange = 'auto';
    logo.classList.add('logo-settled');
}

function animateNameReveal(allNames, targetName, targetDiv, callback) {
    let elapsed = 0;
    let totalDuration = 15000; // 15 seconds
    targetDiv.textContent = '';

    function scheduleNext(interval) {
        spinTimeoutId = setTimeout(() => {
            if (elapsed >= totalDuration) {
                targetDiv.textContent = targetName;
                spinTimeoutId = null;
                
                // Stop riser audio
                riserAudio.pause();
                riserAudio.currentTime = 0;
                
                if (callback) callback(targetName);
                return;
            }

            const randomIndex = Math.floor(Math.random() * allNames.length);
            targetDiv.textContent = allNames[randomIndex];
            elapsed += interval;

            if (elapsed < 3000) {
                scheduleNext(200);
            } else if (elapsed < 8000) {
                scheduleNext(50);
            } else if (elapsed < 10000) {
                scheduleNext(200);
            } else {
                if (elapsed === 10000) {
                    riserAudio.currentTime = 0;
                    riserAudio.play();
                }
                scheduleNext(1000);
            }
        }, interval);
    }
    
    scheduleNext(200);
}

spinBtn.addEventListener('click', function () {
    if (names.length === 0) {
        showError("No contestants available.");
        return;
    }

    currentSelectedName = selectNextContestant();
    if (!currentSelectedName) return;

    // Smooth logo movement animation
    const logo = document.querySelector('.logo');
    const rect = logo.getBoundingClientRect();

    logo.style.willChange = 'transform';
    logo.style.position = 'fixed';
    logo.style.left   = rect.left + 'px';
    logo.style.top    = rect.top  + 'px';
    logo.style.width  = rect.width + 'px';
    logo.style.maxWidth = 'none';
    logo.style.minWidth = 'unset';
    logo.style.margin = '0';
    logo.style.transformOrigin = 'top left';
    logo.style.zIndex = '10';

    const finalLeft  = 40;
    const finalTop   = 40;
    const finalWidth = 120;
    const tx    = finalLeft - rect.left;
    const ty    = finalTop  - rect.top;
    const scale = finalWidth / rect.width;

    logoAnim = logo.animate([
        { transform: 'translate3d(0px,   0px,   0) scale(1)',           offset: 0    },
        { transform: 'translate3d(0px,   0px,   0) scale(0.96)',        offset: 0.08 },
        { transform: `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`, offset: 1  }
    ], {
        duration: 850,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards'
    });

    logoAnim.onfinish = () => {
        logo.style.left     = finalLeft  + 'px';
        logo.style.top      = finalTop   + 'px';
        logo.style.width    = finalWidth + 'px';
        logo.style.maxWidth = finalWidth + 'px';
        logo.style.transform = '';
        logo.style.transformOrigin = '';
        logo.style.willChange = 'auto';
        logoAnim.cancel();
        logoAnim = null;
        logo.classList.add('logo-settled');
    };

    spinBtn.classList.add('move-up');
    selectedNameDiv.classList.remove('show-center', 'show-center-with-dare');
    selectedNameDiv.style.color = ''; // Reset error color if any
    spinBtn.disabled = true;
    spinBtn.style.display = 'none';
    dareBtn.style.display = 'none';
    selectedDareDiv.style.display = 'none';
    selectedDareDiv.textContent = '';
    
    animationState = 'spinning';

    animateNameReveal(names, currentSelectedName, selectedNameDiv, function(selectedName) {
        dareBtn.style.display = 'inline-block';
        dareBtn.classList.add('below-name');
        spinBtn.disabled = false;
        
        selectedNameDiv.textContent = selectedName;
        selectedNameDiv.classList.add('show-center');
        
        // Play applause sound
        applauseAudio.currentTime = 0;
        applauseAudio.volume = 1;
        applauseAudio.play();
        setTimeout(() => {
            let fadeInterval = setInterval(() => {
                if (applauseAudio.volume > 0.05) {
                    applauseAudio.volume -= 0.05;
                } else {
                    applauseAudio.volume = 0;
                    applauseAudio.pause();
                    clearInterval(fadeInterval);
                }
            }, 50);
        }, 3000);
        
        animationState = 'selected';
    });
});

dareBtn.addEventListener('click', function () {
    dareBtn.disabled = true;
    dareBtn.classList.add('fade-out');
    setTimeout(() => {
        dareBtn.style.display = 'none';
    }, 500);

    revealDare();
});

function revealDare() {
    animationState = 'revealed';
    
    let dareText = '';
    const selectedEntry = csvEntries.find(entry => entry.yourName && entry.yourName.toLowerCase() === currentSelectedName.toLowerCase());
    if (selectedEntry) {
        dareText = selectedEntry.dare;
    }
    
    if (!dareText) {
        dareText = "No dare assigned.";
    }
    
    selectedNameDiv.classList.remove('show-center');
    selectedNameDiv.classList.add('show-center-with-dare');
    selectedNameDiv.innerHTML = `<span class="contestant-name">${currentSelectedName}</span><span class="dare-colon"> : </span><span class="contestant-dare">${dareText}</span>`;
    
    setTimeout(() => {
        const dareSpan = selectedNameDiv.querySelector('.contestant-dare');
        if (dareSpan) {
            dareSpan.classList.add('visible');
        }
    }, 50);
}

function skipToReveal() {
    if (animationState !== 'spinning' && animationState !== 'selected') {
        return;
    }
    
    if (spinTimeoutId) {
        clearTimeout(spinTimeoutId);
        spinTimeoutId = null;
    }
    
    riserAudio.pause();
    riserAudio.currentTime = 0;
    applauseAudio.pause();
    applauseAudio.currentTime = 0;
    
    settleLogoInstantly();
    
    spinBtn.style.display = 'none';
    dareBtn.style.display = 'none';
    
    revealDare();
}

function resetGame() {
    location.reload();
}

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (key === 'r') {
        if (confirm("Reset UI? This will reload the screen back to initial state.")) {
            resetGame();
        }
    } else if (key === ' ' || e.code === 'Space') {
        if (spinBtn.style.display !== 'none' && !spinBtn.disabled) {
            e.preventDefault();
            spinBtn.click();
        }
    } else if (e.key === 'Escape') {
        skipToReveal();
    }
});
