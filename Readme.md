📊 Time Tracker & Productivity Analytics – Chrome Extension

* COMPANY* : CODTECH IT SOLUTIONS

* NAME* : Sankritya Shukla

* INTERN ID* : CITS0D301

* DOMAIN* : Full Stack Web Development

* DURATION* : 6 WEEKS

* MENTOR* : NEELA SANTHOSH KUMAR

This Chrome Extension helps you track the time spent on websites, classify them as productive or unproductive, and view a visual dashboard of your weekly activity. Built as part of the CodTech Full Stack Internship – Task 4.

🚀 Features
⏱️ Tracks active tab time in real-time

🔗 Classifies websites (e.g. YouTube = unproductive, GitHub = productive)

📤 Sends data to a Node.js + MongoDB backend

📊 Displays a beautiful dashboard using Chart.js

🧩 Packaged as a secure, lightweight Chrome Extension

📁 Project Structure
pgsql
Copy
Edit
time-tracker-extension/
├── manifest.json
├── background.js
├── content.js
├── popup.html
├── popup.js
├── styles/
│   └── style.css
├── dashboard/
│   ├── index.html
│   ├── dashboard.js
│   └── chart.js
└── backend/
    ├── server.js
    └── models/
        └── UserData.js

🧑‍💻 Technologies Used
Chrome Extension (Manifest v3)

JavaScript, HTML, CSS

Chart.js for analytics

Node.js + Express

MongoDB + Mongoose

🛠️ How to Run Locally
🔹 1. Clone the repository
bash
Copy
Edit
git clone https://github.com/Sankritya14/time-tracker-extension.git
cd time-tracker-extension
🔹 2. Start the backend
bash
Copy
Edit
cd backend
npm install
node server.js
Make sure MongoDB is running on your machine (localhost:27017)

🔹 3. Load the extension in Chrome
Visit chrome://extensions

# OUTPUT

<img width="316" height="498" alt="Image" src="https://github.com/user-attachments/assets/f8f471a5-0b05-4621-aa20-48c04f900fc1" />
<img width="612" height="296" alt="Image" src="https://github.com/user-attachments/assets/747fb32b-3247-4d46-a407-cb4f177060ea" />
<img width="692" height="545" alt="Image" src="https://github.com/user-attachments/assets/82a793ba-7d31-484a-8944-cc36c489a602" />
Enable Developer Mode

Click Load Unpacked

Select the time-tracker-extension/ folder

