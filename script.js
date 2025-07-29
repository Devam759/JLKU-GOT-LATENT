// Hardcoded names and dares
const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Eve",
    "Frank"
];

const dares = [
    "Sing a song",
    "Do 10 jumping jacks",
    "Tell a joke",
    "Dance for 30 seconds",
    "Imitate a celebrity",
    "Share an embarrassing story"
];

const spinBtn = document.getElementById('spinBtn');
const dareBtn = document.getElementById('dareBtn');
const selectedNameDiv = document.getElementById('selectedName');
const selectedDareDiv = document.getElementById('selectedDare');

dareBtn.style.display = 'none';
selectedDareDiv.style.display = 'none';

spinBtn.disabled = false;
dareBtn.disabled = false;

function animateSlotScroll(items, targetDiv, duration = 2000, interval = 60, prefix = '', callback) {
    let elapsed = 0;
    let currentIndex = 0;
    targetDiv.textContent = '';
    const scrollInterval = setInterval(() => {
        targetDiv.textContent = items[currentIndex];
        currentIndex = (currentIndex + 1) % items.length;
        elapsed += interval;
        if (elapsed >= duration) {
            clearInterval(scrollInterval);
            // Pick a random item for the final result
            const finalIndex = Math.floor(Math.random() * items.length);
            targetDiv.textContent = prefix + items[finalIndex];
            if (callback) callback(items[finalIndex]);
        }
    }, interval);
}

spinBtn.addEventListener('click', function () {
    spinBtn.disabled = true;
    dareBtn.style.display = 'none';
    selectedDareDiv.style.display = 'none';
    selectedDareDiv.textContent = '';
    animateSlotScroll(names, selectedNameDiv, 4000, 60, 'Selected: ', function(selectedName) {
        dareBtn.style.display = 'inline-block';
        spinBtn.disabled = false;
    });
});

dareBtn.addEventListener('click', function () {
    if (dares.length > 0) {
        dareBtn.disabled = true;
        selectedDareDiv.style.display = 'block'; // Make visible before animation
        animateSlotScroll(dares, selectedDareDiv, 4000, 60, 'Dare: ', function(selectedDare) {
            dareBtn.disabled = false;
        });
    }
});
