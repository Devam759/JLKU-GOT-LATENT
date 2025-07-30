// Hardcoded names and dares
const names = [
    "Shreyansh Jangir",
    "Meenakshi Vydianathan",
    "Nishant bhargava",
    "Aditi Agarwal",
    "Aditya Chaudhary",
    "Amit Ranjan Pradhan",
    "Lakshita Tanwar",
    "Amrit Agrawal",
    "Chandan Prit Singh",
    "ANKUSH PANDA",
    "Pedapalli Bhaskar",
    "Anoushka SIngh",
    "Anirudh Choudhary",
    "Aadrika Roy",
    "Sirimamilla Abhishek",
    "Parth Dhoot",
    "NAKKALAPALLY OMRUTHIK",
    "Vaibhav Jain",
    "KANISHK GUPTA",
    "Aditya Saxena",
    "Nayana Tripathi",
    "Mallareddi Charan",
    "Prananya Khanna",
    "Nikita Bhatia",
    "Srijan Sharma",
    "Sunay Kundalwal",
    "Anandi Krishna Kolapkar",
    "Avirishi Pandey",
    "Nandini Rajawat",
    "Shambhavi Singh",
    "Himanshu",
    "Riddhi sharma",
    "Ashish Sharma",
    "Abheek Sharma",
    "Mrinal khandal",
    "Samarth Singh",
    "Samriddhi Singh",
    "Swara Makwana",
    "Rashi katiyar",
    "MONISHA SHARMA",
    "Pradhuman Thanvi",
    "RUSHAM CHAUDHARY",
    "Mohit Suwalka",
    "pratiki agarwal",
    "Aviral Sherawat",
    "Valmiki Rishi",
    "Ruchi choudhary",
    "Rishabh kalwar",
    "Eishit Gupta",
    "Yashwardhan Khatri",
    "Siddhi khandelwal",
    "KAVIYAA N A",
    "ABHYUDAY SINGH",
    "Manan Verma",
    "SAMARTH MYADAM",
    "Kosuru sruthi",
    "Kavya Gupta",
    "DIVIT CHATURVEDI",
    "Risha Saini",
    "TARUSHI AGARWAL",
    "Sudhi chaurasia",
    "Himani Saraf",
    "Kavya Rawat",
    "Rishikesh Bhardwaj",
    "Shivia Rawat",
    "Aman Kumawat",
    "Daksh soni",
    "Arnav Rawat",
    "Saanchi Vijayvergia",
    "Mradul Bansal",
    "Abigail Abraham",
    "Tanishq Daiya",
    "Pranjal Sharma",
    "PARIHAAN KABRA",
    "GOTTIMUKKALA VISHWAROOPA CHARY",
    "Navyaa Sharma",
    "Satyanarayana kumawat",
    "Jayadeep Naga sai",
    "Udit Mishra",
    "Gouranshi Sharma",
    "Saumya Agarwal",
    "Khushi Sharma",
    "Avneesh Kumar Dubey",
    "Kallu Ashwin Reddy",
    "Arshiyaa Yadav",
    "Anukriti choudhary",
    "Shafiuddin khan",
    "Lakshya Gupta",
    "Arnav Sharma",
    "Krish Bhola",
    "Yash Sharma",
    "CHARVI SHARMA",
    "Hardik kumawat",
    "Abhimanyu singh katiyar",
    "akshat bisht",
    "NANDINI SHAH",
    "Arham Bothra",
    "Akshat Murarka",
    "Nomish agarwal",
    "Heramb Sharma",
    "VAIBHAV CHARAN",
    "Parth mundra",
    "Aarna Agarwal",
    "Ashutosh Gupta",
    "Pari Nahata",
    "Purvee dudheria",
    "PRIYANSHI SINGHVI",
    "Daksh Jain",
    "Garvit Agrawal",
    "Kunal Singh Shekhawat",
    "YOGANT GUPTA",
    "Yashvardhan Singh",
    "Nawya dusad",
    "Naina Dayaramani",
    "PARI MALOO",
    "Droni Sehgal",
    "BADRINADH GORU",
    "Aaron Augustine",
    "VANSHIKA TAK",
    "utkarsh bhargava",
    "Priyanshu sharma",
    "Yatharth Chaturvedi",
    "Lalee gupta",
    "ARUNIL JAIN",
    "Anushka Bajaj",
    "Prekshya Sharma",
    "Tanmay sharma",
    "Kapil Rathore",
    "Yashica pareek",
    "Saurav Tank",
    "Dishika Pancholi",
    "Priyansh dadhich",
    "VANSH BHATIA",
    "Shivang pareek",
    "Akarsh Pareek",
    "shivang singhal",
    "Tisha Garg",
    "Aditi sharma",
    "Kartik Saini",
    "Avika soni jain",
    "Bhanu pratap singh",
    "Bhavisha Sabnani",
    "Azad singh",
    "SAHIL KHAROL",
    "Ananya Mittal",
    "Sangeeth Addepalli",
    "Saket Gurjar",
    "Krish Khandelwal",
    "Aditi",
    "Purvi Naruka",
    "Ankarla Varun Teja",
    "Bhavya Jain",
    "Swarn Vipin Joshi",
    "Aarav Jain",
    "Harshita Sharma",
    "Suryavanshisridevi",
    "Mahi Tripathi",
    "Chinthamani Mukesh",
    "Uduthala Ashwit",
    "Rahul Gorani",
    "NAVEEN THOLIYA",
    "Himani Menghani",
    "Vansh gupta",
    "BHAVYA JAIN",
    "Diya Agarwal",
    "Manvi Singh",
    "Ayush kherada",
    "Ayush Jaiswal",
    "Bhavishya",
    "Aadya mittal",
    "AANYA VERMA",
    "ANUBHA SHARMA",
    "Yuvraj Singh Rathore",
    "Rohan Goyal",
    "Aadipoojya Mehra",
    "Manant Srivastava",
    "Paavani Sahu",
    "Shivam Srivastava",
    "Komal verma",
    "Anvi Vashist",
    "Sakshi Pandey",
    "Konda Trigun",
    "Ayush Gadwal",
    "yash pal kilka",
    "Divyansh chopra",
    "Shabd Srivastava",
    "MANSI SOMANI",
    "Ashutosh Yadav",
    "Angel Maheshwari",
    "Baratam Sankar Narayana",
    "Pranjal Jain",
    "Vansh Doshi",
    "Jiya Dhanwani",
    "YUVRAJ SINGH",
    "Bhavya Doshi",
    "Dharam Singh Choudhary",
    "Niharika Chauhan",
    "AALAP GOSWAMI",
    "Ishan sharma",
    "Priecy gandhi",
    "Megh Singh Rathore",
    "GORLE LESSANTH",
    "Priyanshi Agnani",
    "Sameer sharma",
    "Manan",
    "Jitendra",
    "Anushri Falor",
    "Shreya Sharma",
    "shouryaveer bishnoi",
    "Daksh Shukla",
    "Tanvi Gupta",
    "K.Nipun Prathisth Reddy",
    "Kanika Suthar",
    "Drashya Jain",
    "Aditi Sharma",
    "Suhani dashora",
    "Nikita",
    "Rajan kumawat",
    "Ritik Sharma",
    "Aman choudhary",
    "Dewasi manish padmaram",
    "Deepak",
    "Sahiti Samskruti Miyapuram",
    "Priyanshu kumar",
    "Sanskriti gehlot",
    "Raghuraj Singh Shekhawat",
    "Pranjal jangid",
    "BHANU PRATAP SINGH KHANGAROT",
    "Rudrapal Singh Shekhawat",
    "Varun Rao Thumula",
    "Raghav sharma",
    "Bhavya Raj Singh Sarangdevot",
    "Chelsytanwar",
    "Raghuraj jangid",
    "Karan sharma",
    "Purvi Jain",
    "Mradul Saxena",
    "Shreyansh mishra",
    "Pawani sharma",
    "Hitesh Choudhary",
    "Ansh gupta",
    "PURUSHOTTAM KUMAR SINGH",
    "Muskan jangid",
    "Medha Kumari",
    "Aryan kumawat",
    "Aman Anchaliya",
    "Pratham Lalwani",
    "Garvishtha Asnani",
    "T ABHIRAMA KARTHIKEYA SREYAS",
    "Devalapalli Veda prakash",
    "Vansh Vaibhav Singh",
    "Gandla Vipuleshwar",
    "Harshul agarwal",
    "Katyayani rathore",
    "Himanshu Singh Chouhan",
    "Tarun Kumar",
    "Shreasth Chaturvedi",
    "Kajal Agarwal",
    "Rashi Chandnani",
    "Harshwardhan Jakhar",
    "SHINJINI MISRA",
    "ATHARV MANDAL",
    "Hemangi Sancheti",
    "Yashwanth Chandaka",
    "Chirag Negi",
    "Pragya Verma",
    "Abhishek",
    "Ashish choudhary",
    "Vibhor vyas"
];

// Add the finalists array (special list)
const finalists = [
    "devam",
    "khushi",
    "ashu",
    "manan",
    "Amishree",
    "Aadhya"
];


const dares = [
    "Sing a song Sing a song Sing a song Sing a song Sing a song Sing a song",
    "Do 10 jumping jacks Sing a song Sing a song Sing a song Sing a song Sing a song Sing a song",
    "Tell a joke Sing a song Sing a song Sing a song Sing a song Sing a song Sing a song",
    "Dance for 30 seconds Sing a song Sing a song Sing a song Sing a song Sing a song Sing a song",
    "Imitate a celebrity Sing a song Sing a song Sing a song Sing a song Sing a song Sing a song",
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

let currentSelectedName = null;

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

// Replace animateNameReveal with a new version that scrolls all names but lands on a finalist
function animateNameReveal(allNames, finalists, targetDiv, callback) {
    let elapsed = 0;
    let totalDuration = 15000; // 15 seconds
    targetDiv.textContent = '';

    function scheduleNext(interval) {
        if (elapsed >= totalDuration) {
            // End, show final name from finalists
            const finalIndex = Math.floor(Math.random() * finalists.length);
            targetDiv.textContent = finalists[finalIndex];
            if (callback) callback(finalists[finalIndex]);
            return;
        }
        setTimeout(() => {
            // Show a random name from allNames each time
            const randomIndex = Math.floor(Math.random() * allNames.length);
            targetDiv.textContent = allNames[randomIndex];
            elapsed += interval;
            // Determine next phase
            if (elapsed < 3000) {
                scheduleNext(200); // 0.2s per name for first 3s
            } else if (elapsed < 8000) {
                scheduleNext(50); // 0.05s per name for next 5s
            } else if (elapsed < 10000) {
                scheduleNext(200); // 0.2s per name for next 2s
            } else {
                scheduleNext(1000); // 1s per name for last 5s
            }
        }, interval);
    }
    // Start first phase
    scheduleNext(200);
}

spinBtn.addEventListener('click', function () {
    // Animate logo and button on first click
    document.querySelector('.logo').classList.add('move-left');
    spinBtn.classList.add('move-up');
    // Remove any previous name display class
    selectedNameDiv.classList.remove('show-center');
    spinBtn.disabled = true;
    spinBtn.style.display = 'none'; // HIDE after click
    dareBtn.style.display = 'none';
    selectedDareDiv.style.display = 'none';
    selectedDareDiv.textContent = '';
    // Use custom name reveal animation
    animateNameReveal(names, finalists, selectedNameDiv, function(selectedName) {
        dareBtn.style.display = 'inline-block';
        dareBtn.classList.add('below-name');
        spinBtn.disabled = false;
        // Show the name in the center in big letters
        selectedNameDiv.textContent = selectedName;
        selectedNameDiv.classList.add('show-center');
        currentSelectedName = selectedName; // Store the selected name
    });
});

dareBtn.addEventListener('click', function () {
    if (dares.length > 0) {
        dareBtn.disabled = true;
        dareBtn.classList.add('fade-out');
        setTimeout(() => {
            dareBtn.style.display = 'none';
        }, 500); // Match the transition duration
        selectedDareDiv.style.display = 'block'; // Make visible before animation
        selectedDareDiv.classList.add('below-dare-btn', 'huge-dare');
        selectedNameDiv.classList.remove('show-center');
        selectedNameDiv.classList.add('move-up-name'); // Move name up for equal spacing
        // Pick the dare based on the selected name's serial number
        let dareIndex = finalists.findIndex(name => name.toLowerCase() === currentSelectedName.toLowerCase());
        if (dareIndex === -1) dareIndex = 0; // fallback if not found
        selectedDareDiv.style.opacity = 0;
        selectedDareDiv.textContent = dares[dareIndex];
        setTimeout(() => {
            selectedDareDiv.style.transition = 'opacity 0.8s';
            selectedDareDiv.style.opacity = 1;
            // dareBtn.disabled = false; // Don't re-enable since it's hidden
        }, 50);
    }
});
