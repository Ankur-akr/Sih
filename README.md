# 🎓 Virtual Classroom for Rural Colleges | SIH 2025

**A technology-driven initiative to bridge the digital education gap in rural India.**

Developed as a prototype for **Smart India Hackathon (SIH) 2025**, this project proposes an affordable, accessible, and low-bandwidth digital learning ecosystem designed specifically for rural colleges and underserved educational institutions.

The solution combines a lightweight virtual classroom platform with a proposed low-cost hardware device called **OCD (Online Classroom Device)**, enabling students to access quality digital education even in areas with limited internet connectivity and technological infrastructure.

---

## 🏆 Smart India Hackathon 2025

| Details | Information |

| Hackathon | Smart India Hackathon 2025 |
| Problem Statement ID | SIH25101 |
| Problem Statement | Remote Classroom for Rural Colleges |
| Theme | Smart Education |
| PS Category | Software |
| Team Name | Tinkerers |
| Project | Virtual Classroom for Rural Colleges |

---

## 💡 Problem Statement

Students in rural colleges often face challenges accessing quality digital education because of:

- Unreliable or limited internet connectivity.
- Limited access to smartphones, laptops, and computers.
- High costs of digital learning infrastructure.
- Lack of accessible online classroom facilities.
- The digital divide between rural and urban educational institutions.

Traditional video conferencing platforms often require stable internet connections and relatively powerful devices, making them less suitable for many rural educational environments.

## 🚀 Our Solution

We propose an integrated digital classroom ecosystem consisting of two major components:

### 1. Virtual Classroom – Software

A lightweight, audio-first virtual classroom platform optimized for low-bandwidth environments.

**Proposed Features:**

- Audio-first online classroom experience.
- Optimized for 2G/3G network connectivity.
- Audio compression using the Opus codec (20–30 kbps).
- Compressed presentation slides synchronized with audio.
- Automatic reconnection during network interruptions.
- Offline lecture downloads targeting ≤15 MB per hour.
- Mobile-first interface designed for entry-level Android devices.

### 2. OCD – Online Classroom Device (Hardware)

A proposed affordable, plug-and-play hardware solution that enables students to attend online classes through standard televisions.

**Key Highlights:**

- Designed for compatibility with standard TVs.
- Affordable estimated one-time hardware cost of ₹500–700.
- Reduces dependence on individual smartphones and computers.
- Designed to make digital classrooms accessible to more students.

### 3. Integrated Ecosystem

The combination of software and hardware addresses two major barriers to rural digital education:

| Challenge | Proposed Solution |
|---|---|
| Poor internet connectivity | Low-bandwidth virtual classroom |
| Limited access to devices | OCD TV-compatible hardware |
| Network interruptions | Automatic reconnection |
| Expensive data consumption | Audio compression and offline downloads |
| Limited digital infrastructure | Affordable, accessible classroom ecosystem |

---

## 🖥️ Prototype – Student & Faculty Dashboard

This repository contains the frontend prototype demonstrating the proposed digital classroom platform through separate student and faculty interfaces.

### Student Dashboard

- Student dashboard with academic overview.
- Enrolled courses and learning progress.
- Live-class information.
- Lecture materials and learning resources.
- Upcoming quizzes and assignments.
- Announcements and achievements.
- Student profile interface.

### Faculty Dashboard

- Faculty dashboard with academic activity overview.
- Student and course statistics.
- Live-class management interface.
- Lecture-material upload interface.
- Announcement management interface.
- Upcoming class schedule.
- Academic activity and progress indicators.

### Common Interface Features

- Separate Student and Faculty portals.
- Role-selection login interface.
- Interactive dashboard navigation.
- Responsive layouts.
- Sidebar navigation and collapsible menu.
- Dark-mode styling.
- Logout functionality.

---

## 🛠️ Technology Stack

The current website prototype uses fundamental frontend technologies.

| Technology | Purpose |
|---|---|
| HTML5 | Dashboard structure and components |
| CSS3 | Responsive UI, layouts, and styling |
| JavaScript | Client-side interactions and navigation |

**Note:** The repository currently demonstrates the frontend interface. Backend services, database integration, secure authentication, actual live streaming, and hardware integration are part of the broader proposed solution and are not implemented in this prototype.

---

## 📂 Project Structure

```text
Sih/
│
├── index.html
├── style.css
├── script.js
│
├── student.html
├── student.css
│
├── faculty.html
├── faculty.css
│
├── finalsih/
│   └── test/
│       ├── index.html
│       ├── style.css
│       ├── script.js
│       ├── student.html
│       ├── student.css
│       ├── faculty.html
│       └── faculty.css
│
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- A modern web browser.
- Git.
- Visual Studio Code (recommended).

### 1. Clone the Repository

```bash
git clone https://github.com/Ankur-akr/Sih.git
```

### 2. Navigate to the Project

```bash
cd Sih
```

### 3. Run the Application

Open `index.html` directly in your browser.

Alternatively, use the **Live Server** extension in Visual Studio Code:

1. Open the project folder.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

### 4. Explore the Dashboard

- Open the login interface.
- Enter demo credentials.
- Select Student or Faculty.
- Navigate through the respective dashboard.

---

## 🔬 Technical Approach

The proposed system follows a lightweight and bandwidth-conscious architecture.

### Software Approach

1. Capture classroom audio using the Opus codec.
2. Compress presentation slides into optimized images.
3. Synchronize slides with the audio stream.
4. Deliver classroom content over low-bandwidth networks.
5. Implement automatic reconnection during connectivity interruptions.
6. Provide offline lecture downloads for students.

### Hardware Approach

1. Develop a low-cost OCD hardware module.
2. Enable connectivity with standard televisions.
3. Receive and display classroom streaming content.
4. Provide an affordable alternative to individual computing devices.

*These describe the proposed technical approach from the SIH presentation, not functionality already delivered by the current website prototype.*

---

## 🌍 Impact & Benefits

### Educational Impact
- Improves access to quality education in rural colleges.
- Enables students to attend digital classrooms.
- Supports technical education in underserved institutions.
- Reduces the rural–urban digital learning divide.

### Economic Impact
- Affordable hardware with an estimated cost of ₹500–700.
- Open-source software approach.
- Reduced dependence on expensive digital infrastructure.

### Social Impact
- Promotes inclusive digital education.
- Supports students from underserved communities.
- Creates opportunities for skill development and employability.

---

## 🔮 Future Enhancements

- Implement secure student and faculty authentication.
- Develop backend APIs and database integration.
- Build functional low-bandwidth audio streaming.
- Integrate Opus-based audio compression.
- Implement synchronized presentation sharing.
- Add offline lecture downloads.
- Develop automatic network reconnection.
- Integrate OCD hardware with the virtual classroom platform.
- Introduce real-time attendance and classroom analytics.
- Expand the platform to support multiple colleges and institutions.

---

## 👥 Team

**Team Tinkerers**

Smart India Hackathon 2025

**Problem Statement:** SIH25101 – Remote Classroom for Rural Colleges

---

## 👨‍💻 Repository Author

**Ankur Kumar Rai**

- GitHub: [@Ankur-akr](https://github.com/Ankur-akr)
- Project Repository: [Virtual Classroom for Rural Colleges](https://github.com/Ankur-akr/Sih)

---

## 📌 Project Status

**Current Stage:** Frontend Prototype

This repository represents the initial website prototype developed for the Smart India Hackathon 2025 solution. It demonstrates the proposed student and faculty user experience and serves as a foundation for further development of the complete virtual classroom ecosystem.

**Our Vision:** Making quality digital education accessible to every student, regardless of geographical location, internet connectivity, or financial limitations.

---
