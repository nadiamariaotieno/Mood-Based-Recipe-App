📄 Mood-Based Recipe Recommendation App
🧩 Overview

The Mood-Based Recipe Recommendation App is a full-stack web application that suggests recipes based on a user’s current mood.

Users select how they feel, and the system dynamically fetches a matching recipe from a SQLite database. If they don’t like the suggestion, they can request a new one instantly.

This project demonstrates full-stack development using a REST API, database integration, and a responsive frontend.

✨ Features

Mood-based recipe recommendation

Randomized recipe selection

Dynamic UI updates without page reload

RESTful API built with Express

SQLite database for persistent storage

Responsive UI styled with Tailwind CSS

“Get another recipe” functionality

🛠 Tech Stack
Frontend

HTML

Tailwind CSS

Vanilla JavaScript (Fetch API)

Backend

Node.js

Express.js

Database

SQLite (better-sqlite3)

Version Control

Git & GitHub

🏗 Architecture

The application follows a client–server architecture:

Frontend → sends mood request → Express API → queries SQLite → returns JSON → UI updates dynamically

Static frontend files are served using Express middleware.

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/nadiamariaotieno/Mood-Based-Recipe-App.git
cd Mood-Based-Recipe-App

Install dependencies:

npm install

Run the server:

node server.js

Open in browser:

http://localhost:3000
🔌 API Endpoint
Get recipe by mood
GET /recipe/:mood

Example:

/recipe/happy

Response:

{
  "id": 1,
  "name": "Fruit Smoothie Bowl",
  "ingredients": "...",
  "instructions": "..."
}
🚀 Future Improvements

User authentication

Add custom recipes

Recipe images

Filter by dietary preference

Deploy to cloud (Render / Railway)

Convert to React frontend

👩‍💻 Author

Nadia Otieno

GitHub:
https://github.com/nadiamariaotieno
