# Spotify Clone Backend API 🎵

A robust RESTful API built with Node.js, Express, and MongoDB that mimics the core backend functionalities of a music streaming platform. This project features secure JWT-based authentication, role-based access control (Normal Users vs. Artists), and cloud-based media storage.

## 🚀 Key Features

*   **Role-Based Access Control (RBAC):** Distinct permissions for `user` and `artist` roles. Only artists can upload music and create albums.
*   **Secure Authentication:** Passwords are encrypted using `bcryptjs`. Session management is handled securely via JSON Web Tokens (JWT) stored in HTTP-only cookies.
*   **Cloud Media Storage:** Audio files are parsed using `multer` (memory storage) and uploaded directly to **ImageKit** for reliable cloud delivery.
*   **Advanced MongoDB Queries:** Utilizes `mongoose` for relational data mapping (`.populate()`) between Users, Music, and Albums, alongside pagination techniques (`.limit()` and `.skip()`).
*   **Data Validation:** Middleware implementation using `express-validator` to ensure clean and formatted incoming data.

## 🛠️ Tech Stack

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB Atlas & Mongoose
*   **Authentication:** `jsonwebtoken` (JWT) & `cookie-parser`
*   **Security:** `bcryptjs`
*   **File Handling:** `multer` & `imagekit`
*   **Testing:** `jest` & `supertest`

## 📂 Architecture (MVC Pattern)

```text
spotify-backend/
├── src/
│   ├── controllers/      # API business logic (auth, music, albums)
│   ├── middlewares/      # JWT verification, Role checks, Validation
│   ├── models/           # Mongoose schemas (User, Music, Album)
│   ├── routes/           # Express route definitions
│   ├── services/         # Third-party integrations (ImageKit setup)
│   └── app.js            # Express app setup and global middlewares
├── .env                  # Environment variables (Ignored by git)
├── .gitignore            
├── server.js             # Server entry point
└── package.json