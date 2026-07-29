<div align="center">

<h1>⚡ Wiztron Club Website</h1>

<p>
A modern full-stack website built for the <b>Wiztron Club</b> using
React, TypeScript, Vite, Express, and Neon PostgreSQL.
</p>

<img src="https://img.shields.io/badge/React-19-blue?logo=react">
<img src="https://img.shields.io/badge/TypeScript-blue?logo=typescript">
<img src="https://img.shields.io/badge/Vite-purple?logo=vite">
<img src="https://img.shields.io/badge/Express.js-black?logo=express">
<img src="https://img.shields.io/badge/PostgreSQL-blue?logo=postgresql">
<img src="https://img.shields.io/badge/Neon-Database-brightgreen">

</div>

<hr>

<h2>📌 Overview</h2>

<p>
The Wiztron Club Website is a full-stack web application designed to
showcase the club, its members, events, and activities.
The frontend is built using React + TypeScript + Vite, while the backend
uses Express.js connected to a Neon PostgreSQL database.
</p>

<hr>

<h2>🚀 Features</h2>

<ul>
<li>Responsive modern UI</li>
<li>Dynamic Team Members section</li>
<li>Data stored in Neon PostgreSQL</li>
<li>REST API using Express.js</li>
<li>Fast React frontend powered by Vite</li>
<li>TypeScript support</li>
<li>Easy to extend for Events, Projects and Gallery</li>
</ul>

<hr>

<h2>🛠 Tech Stack</h2>

<table>
<tr>
<th>Frontend</th>
<th>Backend</th>
<th>Database</th>
</tr>

<tr>
<td>

- React
- TypeScript
- Vite
- HTML5
- CSS3

</td>

<td>

- Node.js
- Express.js

</td>

<td>

- PostgreSQL
- Neon Database

</td>
</tr>

</table>

<hr>

<h2>📂 Project Structure</h2>

<pre>
wiztron/
│
├── src/
│   ├── components/
│   ├── assets/
│   ├── pages/
│   └── App.tsx
│
├── server/
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── public/
├── package.json
└── README.md
</pre>

<hr>

<h2>⚙ Installation</h2>

<h3>Clone Repository</h3>

<pre>
git clone https://github.com/Xperia-45/wiztron.git
cd wiztron
</pre>

<h3>Install Frontend Dependencies</h3>

<pre>
npm install
</pre>

<h3>Install Backend Dependencies</h3>

<pre>
cd server
npm install
</pre>

<hr>

<h2>🔑 Environment Variables</h2>

Create a <code>.env</code> file inside the <code>server</code> folder.

<pre>
DATABASE_URL=your_neon_database_connection_string
PORT=5000
</pre>

<hr>

<h2>▶ Running the Project</h2>

<h3>Frontend</h3>

<pre>
npm run dev
</pre>

Runs on

<pre>
http://localhost:5173
</pre>

<h3>Backend</h3>

<pre>
cd server
node index.js
</pre>

Runs on

<pre>
http://localhost:5000
</pre>

<hr>

<h2>📡 API Endpoint</h2>

<table>
<tr>
<th>Method</th>
<th>Endpoint</th>
<th>Description</th>
</tr>

<tr>
<td>GET</td>
<td>/members</td>
<td>Fetch all team members</td>
</tr>

</table>

<hr>

<h2>🗄 Database Schema</h2>

<pre>
members
-------
id
name
role
image_url
linkedin
description
</pre>

<hr>

<h2>🌟 Future Improvements</h2>

<ul>
<li>Admin Dashboard</li>
<li>Authentication</li>
<li>Event Management</li>
<li>Projects Section</li>
<li>Gallery</li>
<li>Blog</li>
<li>Contact Form</li>
<li>Dark Mode</li>
</ul>

<hr>

<h2>👨‍💻 Developed By</h2>

<p>
<b>AYUSH</b><br>
First Year AIML Engineering Student
</p>

<p>
Made with ❤️ using React, Express & PostgreSQL.
</p>

<div align="center">

⭐ If you like this project, consider giving it a star!

</div>
