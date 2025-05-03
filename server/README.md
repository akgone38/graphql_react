# 📦 GraphQL React Fullstack App

This project is a fullstack GraphQL application using:

- 🚀 **Apollo Server** with **Express.js** on the backend
- ⚛️ **React** frontend (in `client/` folder)
- 🌐 Data fetched from `https://jsonplaceholder.typicode.com` via `axios`

---

## 📁 Project Structure

. ├── client/ # React frontend ├── server/ # Express + Apollo Server backend │ ├── graphql/ │ │ ├── schema.js # GraphQL schema definitions │ │ └── resolvers.js# GraphQL resolvers │ ├── data/ # Static data (if any) │ └── index.js # Main server file

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+ recommended
- npm or yarn

---

## 📡 Backend Setup (Apollo Server)

1. Go to the `server/` folder:

   ```bash
   cd server
Install dependencies:
npm install
Start the server:

node index.js
GraphQL server will be running at:

http://localhost:8000/graphql
🌐 Frontend Setup (React)
Open a new terminal and go to the client/ folder:

cd client
Install dependencies:

npm install
Start the React app:

npm start
React app will open at:

http://localhost:3000

📊 API Features
Queries
getTodos: Get first 10 todos

getAllUsers: Get first 10 users

getUser(id: ID!): Get a user by ID (1-10)

Types
User: id, name, username, email, phone, website

Todo: id, title, completed, user (resolved via API)

⚠️ Common Issues
client folder not uploading to GitHub?
Make sure it's not a separate Git repo. Run:

rm -rf client/.git
git rm --cached -r client
git add client
git commit -m "Fix: Add client folder"
git push

📜 License
This project is for learning purposes. No commercial license.

🙌 Contributions
Feel free to fork this repo and create a pull request if you want to add improvements or features!






