# 📝 Notely - Full Stack Note-Taking App

**Notely** is a modern, responsive MERN stack application built to capture ideas and manage notes efficiently. It features a robust backend for data persistence and a clean React-based frontend.

## 🚀 Live Demo

* **Frontend (UI):** [View Live Site](https://notely-notetaking.vercel.app)
* **Backend (API):** [View deployed backed on Render](https://notely-xzcc.onrender.com)

---

## ✨ Features
* **Full CRUD Functionality:** Create, view, edit, and delete notes.
* **Responsive Dashboard:** Optimized for all screen sizes using Tailwind CSS.
* **Real-time Navigation:** Smooth client-side routing with React Router.
* **Data Persistence:** Integrated with MongoDB Atlas via Mongoose.

---

## 🛠️ Tech Stack

### **Frontend**
* **React.js & Vite**: Fast development and functional components.
* **Tailwind CSS**: Modern utility-first styling.
* **Axios**: Promised-based HTTP client for API communication.

### **Backend**
* **Node.js & Express**: Efficient server-side logic.
* **Mongoose**: Clean data modeling for MongoDB.
* **CORS**: Secure cross-origin resource sharing.
* **Dotenv**: Management of secure environment variables.

---

## 📂 Project Structure

As seen in the VS Code explorer:

```text
NOTELY/
├── backend/
│   ├── src/                # Backend source code
│   ├── .env                # Environment variables (Mongo URI)
│   ├── server.js           # Main entry point for the API
│   └── package.json        # Backend dependencies
└── frontend/
    ├── src/                # React source code (Components/API)
    ├── vite.config.js      # Build configuration
    ├── index.html          # HTML entry point
    └── package.json        # Frontend dependencies
```
## 🛡️ API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/notes` | Create a new note |
| **GET** | `/notes` | Fetch all existing notes |
| **GET** | `/notes/:id` | Fetch a single note by ID |
| **PATCH** | `/notes/:id` | Update an existing note |
| **DELETE** | `/notes/:id` | Delete a specific note |

---

## ⚙️ Setup & Installation

1.  **Clone the repo:**
    ```bash
    git clone <repo-url>
    ```

2.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    # Ensure your .env file is configured locally 
    node server.js
    ```

3.  **Frontend Setup:**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
---

## 👤 Author

**Niteesha** * **Education:** B.Tech in Information Technology, **Andhra University** (Class of 2027)
* **Specialization:** Aspiring Full-Stack Developer specializing in the **MERN Stack**
