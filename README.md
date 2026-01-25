
# Product Store – MERN Stack Application

**A Scalable Full-Stack Product Management System**

Project Status: Active
Application Type: Full-Stack Web Application
Architecture: Client–Server, RESTful API
Tech Paradigm: MERN Stack

---

## Tech Stack

**Frontend**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Backend**
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

**Tools**
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

---

## 1. Introduction

Product Store is a full-stack web application developed using the **MERN stack (MongoDB, Express.js, React, Node.js)**.
The application provides a structured and scalable solution for managing product data through a modern web interface and a REST-based backend.

The primary objective of this project is to demonstrate **real-world full-stack development practices**, including API design, database integration, modular backend architecture, and frontend–backend communication.

---

## 2. Problem Statement

Managing product information manually or through unstructured systems leads to:

* Data inconsistency
* Poor scalability
* Lack of centralized control
* Difficulty in maintaining product records

This project addresses these challenges by providing a **centralized, database-driven product management system** that supports standard CRUD operations and follows industry-accepted architectural patterns.

---

## 3. Project Objectives

* Design and implement a RESTful backend using Node.js and Express
* Store and manage product data efficiently using MongoDB
* Build a responsive and interactive frontend using React
* Implement clean separation of concerns between frontend, backend, and database
* Follow scalable and maintainable coding practices

---

## 4. Key Features

* Product creation with structured input validation
* Viewing all available products in real time
* Updating existing product information
* Deleting products from the system
* RESTful API architecture
* Modular backend codebase (routes, controllers, models)
* Persistent data storage using MongoDB
* Modern frontend built with React

---

## 5. System Architecture

The application follows a **three-tier architecture**:

### 5.1 Frontend Layer (React)

* Handles user interface and user interaction
* Sends HTTP requests to the backend
* Renders product data dynamically

### 5.2 Backend Layer (Node.js + Express)

* Acts as the application server
* Implements REST API endpoints
* Handles business logic and validation

### 5.3 Database Layer (MongoDB)

* Stores product data in document format
* Provides flexible schema design
* Ensures data persistence

### 5.4 Data Access Layer (Mongoose)

* Defines product schema
* Handles database operations
* Acts as an Object Data Modeling (ODM) tool

---

## 6. Backend Design and API Structure

The backend is designed using **REST principles** and modular architecture.

### 6.1 API Endpoints

| HTTP Method | Endpoint          | Description                |
| ----------- | ----------------- | -------------------------- |
| GET         | /api/products     | Fetch all products         |
| POST        | /api/products     | Create a new product       |
| PUT         | /api/products/:id | Update an existing product |
| DELETE      | /api/products/:id | Delete a product           |

### 6.2 Backend Modules

* **Routes**: Define API endpoints
* **Controllers**: Handle request logic
* **Models**: Define MongoDB schemas
* **Config**: Database connection logic

---

## 7. Tech Stack

### Backend

* Language: JavaScript
* Runtime: Node.js
* Framework: Express.js
* Database: MongoDB
* ODM: Mongoose

### Frontend

* Library: React
* Styling: CSS
* API Communication: Fetch / Axios

### Development Tools

* npm (Node Package Manager)
* Visual Studio Code
* Postman (API testing)
* MongoDB Atlas / MongoDB Compass

---

## 8. Installation and Setup

### 8.1 Prerequisites

* Node.js (v18 or higher)
* npm
* MongoDB (Local or Atlas)

---

### 8.2 Project Setup

Install backend dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

Navigate to the frontend directory:

```bash
cd frontend
npm install
npm start
```

Application URLs:

* Backend: [http://localhost:5000](http://localhost:5000)
* Frontend: [http://localhost:3000](http://localhost:3000)

---

## 9. Application Flow

1. User accesses the Product Store application
2. Frontend loads the product interface
3. User performs an action (add, view, update, delete)
4. Frontend sends an API request to the backend
5. Backend processes the request
6. MongoDB performs database operations
7. Backend sends response to frontend
8. Frontend updates the UI accordingly

---

## 10. Screenshots

All application screenshots are stored in the `Screenshots/` directory.


---

## 11. Error Handling and Validation

* Server-side validation using Express middleware
* Proper HTTP status codes for API responses
* Graceful handling of invalid requests
* Centralized error logging

---

## 12. Scalability and Maintainability

* Modular backend architecture
* Separation of concerns
* Easily extendable API design
* Ready for authentication and authorization integration

---

## 13. Future Enhancements

* User authentication and role-based access
* Product categories and filtering
* Search functionality
* Pagination for large product lists
* Image upload support
* Admin dashboard
* Deployment using Docker
* Cloud deployment (Render, AWS, or Vercel)

---

## 14. Learning Outcomes

* Practical experience with MERN stack
* Understanding of RESTful API design
* Hands-on MongoDB integration
* Real-world frontend–backend communication
* Clean and scalable full-stack architecture

---

## 15. References

* MongoDB Documentation
* Express.js Documentation
* React Documentation
* Node.js Documentation
* Mongoose Documentation

---

### Final Note

This project demonstrates a **production-ready approach** to full-stack web development using the MERN stack, focusing on scalability, maintainability, and real-world applicability.

---

### Author Information

**Name:** Varashree H A

**Email Id:** varashree710@gmail.com

**Program:** B.Tech – Computer Science and Engineering

**Project Title:** Product Store – MERN Stack Application


