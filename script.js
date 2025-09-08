function getLiveStatus() {
    return JSON.parse(sessionStorage.getItem('liveStatus')) || { isLive: false, title: '', startTime: null };
}

function setLiveStatus(status) {
    sessionStorage.setItem('liveStatus', JSON.stringify(status));
}

function getUploadedLectures() {
    return JSON.parse(sessionStorage.getItem('uploadedLectures')) || [];
}

function setUploadedLectures(lectures) {
    sessionStorage.setItem('uploadedLectures', JSON.stringify(lectures));
}

// Global modal functions
function showModal(message) {
    const modal = document.getElementById('message-modal');
    const modalText = document.getElementById('modal-text');
    if (modal && modalText) {
        modalText.textContent = message;
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('message-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Login logic
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;
    const error = document.getElementById("error-message");

    if (error) {
        error.textContent = "";
    }

    if (!username || !password || !role) {
        if (error) {
            error.textContent = "Please enter username, password, and select a role.";
        } else {
            showModal("Please enter username, password, and select a role.");
        }
        return;
    }

    if (role === "student") {
        window.location.href = "student.html";
    } else if (role === "faculty") {
        window.location.href = "faculty.html";
    }
}

// Logout logic
function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

// Live timer functionality
let timerInterval = null;
function startTimer() {
    const liveStatus = getLiveStatus();
    if (!liveStatus.isLive || !liveStatus.startTime) return;
    
    const startTime = liveStatus.startTime;
    const timerDisplay = document.getElementById('live-timer');
    if (!timerDisplay) return;

    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        const now = Date.now();
        const duration = now - startTime;
        const seconds = Math.floor((duration / 1000) % 60);
        const minutes = Math.floor((duration / (1000 * 60)) % 60);
        const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        timerDisplay.textContent = `Duration: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            login();
        });
    }

    const logoutButtons = document.querySelectorAll(".logout-btn");
    logoutButtons.forEach(button => {
        button.addEventListener("click", logout);
    });
    
    // Smooth scroll for quick stats
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const targetId = card.getAttribute('data-target');
            if (targetId) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Faculty specific functionality
    if (document.body.classList.contains("faculty-page")) {
        const liveToggleBtn = document.getElementById("live-toggle-btn");
        const lectureUploadForm = document.getElementById("lecture-upload-form");
        
        if (liveToggleBtn) {
            liveToggleBtn.addEventListener("click", function() {
                const liveStatus = getLiveStatus();
                if (liveStatus.isLive) {
                    setLiveStatus({ isLive: false, title: '', startTime: null });
                    showModal("Live class has ended.");
                    if (timerInterval) clearInterval(timerInterval);
                } else {
                    const lectureTitle = "Web Development Basics";
                    setLiveStatus({ isLive: true, title: lectureTitle, startTime: Date.now() });
                    showModal(`Live class "${lectureTitle}" has started!`);
                    startTimer();
                }
                updateFacultyDashboard();
            });
        }
        
        if (lectureUploadForm) {
            lectureUploadForm.addEventListener("submit", function(e) {
                e.preventDefault();
                const title = document.getElementById("lecture-title").value;
                const file = document.getElementById("lecture-file").files[0];

                if (title && file) {
                    const newLecture = {
                        title: title,
                        filename: file.name
                    };
                    const lectures = getUploadedLectures();
                    lectures.push(newLecture);
                    setUploadedLectures(lectures);
                    showModal(`Lecture "${title}" uploaded successfully.`);
                    lectureUploadForm.reset();
                    updateFacultyDashboard();
                } else {
                    showModal("Please provide both a title and a file.");
                }
            });
        }
        
        updateFacultyDashboard();
    }
    
    // Student specific functionality
    if (document.body.classList.contains("student-page")) {
        const watchLiveBtn = document.getElementById("watch-live-btn");
        if (watchLiveBtn) {
            watchLiveBtn.addEventListener("click", function() {
                const liveStatus = getLiveStatus();
                showModal(`You are now watching the live lecture: "${liveStatus.title}".`);
            });
        }
        
        updateStudentDashboard();
    }
});

function updateFacultyDashboard() {
    const liveStatus = getLiveStatus();
    const liveToggleBtn = document.getElementById("live-toggle-btn");
    const liveStatusText = document.getElementById("live-status-faculty");
    const liveTimer = document.getElementById('live-timer');

    if (liveStatusText) {
        if (liveStatus.isLive) {
            liveStatusText.textContent = `Live: ${liveStatus.title}`;
            liveStatusText.classList.remove('status-offline');
            liveStatusText.classList.add('status-online');
            liveToggleBtn.textContent = "■ End Live Class";
            liveToggleBtn.classList.add("end-live");
            liveTimer.classList.remove('hidden');
            startTimer();
        } else {
            liveStatusText.textContent = "Offline";
            liveStatusText.classList.remove('status-online');
            liveStatusText.classList.add('status-offline');
            liveToggleBtn.textContent = "▶ Start Live Class";
            liveToggleBtn.classList.remove("end-live");
            liveTimer.classList.add('hidden');
            if (timerInterval) clearInterval(timerInterval);
        }
    }
    
    const lecturesList = document.getElementById("faculty-lectures-list");
    if (lecturesList) {
        lecturesList.innerHTML = '';
        const lectures = getUploadedLectures();
        lectures.forEach(lecture => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${lecture.title}</span>
                <button class="download-btn" data-filename="${lecture.filename}">⬇ Download</button>
            `;
            lecturesList.appendChild(li);
        });
        
        document.querySelectorAll(".download-btn").forEach(button => {
            button.addEventListener("click", function() {
                const filename = this.getAttribute("data-filename");
                showModal(`Simulating download of: ${filename}`);
            });
        });
    }
}

function updateStudentDashboard() {
    const liveStatus = getLiveStatus();
    const liveStatusText = document.getElementById("live-status-student");
    const watchLiveBtn = document.getElementById("watch-live-btn");

    if (liveStatus.isLive) {
        liveStatusText.textContent = `Live: ${liveStatus.title}`;
        liveStatusText.classList.remove('status-offline');
        liveStatusText.classList.add('status-online');
        watchLiveBtn.style.display = "inline-block";
    } else {
        liveStatusText.textContent = "Offline";
        liveStatusText.classList.remove('status-online');
        liveStatusText.classList.add('status-offline');
        watchLiveBtn.style.display = "none";
    }

    const lecturesList = document.getElementById("student-lectures-list");
    if (lecturesList) {
        lecturesList.innerHTML = '';
        const lectures = getUploadedLectures();
        lectures.forEach(lecture => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${lecture.title}</span>
                <button class="download-btn" data-filename="${lecture.filename}">⬇ Download</button>
            `;
            lecturesList.appendChild(li);
        });
        
        document.querySelectorAll(".download-btn").forEach(button => {
            button.addEventListener("click", function() {
                const filename = this.getAttribute("data-filename");
                showModal(`Simulating download of: ${filename}`);
            });
        });
    }
}