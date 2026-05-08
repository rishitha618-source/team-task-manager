# Team Task Manager

A full-stack task management application built using React, Node.js, Express, PostgreSQL, and Prisma ORM.

## Live Demo

Frontend:
https://team-task-manager-production-5cd2.up.railway.app

Backend API:
https://team-task-manager-production-5bca.up.railway.app/api

GitHub Repository:
https://github.com/rishitha618-source/team-task-manager

---

# Features

## Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Role-Based Access Control

## Dashboard
- Total Tasks
- Completed Tasks
- In Progress Tasks
- TODO Tasks
- Overdue Tasks Tracking

## Task Management
- Create Tasks
- Update Task Status
- Assign Tasks
- Due Dates
- Task Analytics

## Project Management
- Create Projects
- View Projects
- Project Details

## Deployment
- Frontend deployed on Railway
- Backend deployed on Railway
- PostgreSQL database integration

---

# Tech Stack

## Frontend
- React
- React Router DOM
- Axios
- CSS

## Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT
- bcryptjs

## Deployment
- Railway
- GitHub

---

# Folder Structure

```bash
team-task-manager/
│
├── backend/
│   ├── prisma/
│   ├── src/
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# Environment Variables

## Backend

Create a `.env` file inside backend folder:

```env
DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_secret_key
PORT=5000
```

## Frontend

Create a `.env` file inside frontend folder:

```env
VITE_API_URL=http://localhost:5000/api
```

---

# Local Setup Instructions

## Clone Repository

```bash
git clone https://github.com/rishitha618-source/team-task-manager.git
```

## Backend Setup

```bash
cd backend
npm install
```

### Run Prisma Migration

```bash
npx prisma migrate dev
```

### Start Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# API Endpoints

## Authentication

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

---

## Tasks

### Get Tasks

```http
GET /api/tasks
```

### Create Task

```http
POST /api/tasks
```

### Update Task

```http
PUT /api/tasks/:id
```

---

## Projects

### Get Projects

```http
GET /api/projects
```

### Create Project

```http
POST /api/projects
```

---

# Production Deployment

## Backend
- Railway Deployment
- Environment Variables configured
- PostgreSQL Database connected

## Frontend
- Railway Deployment
- Production API integration
- CORS enabled

---

# Future Improvements

- Task Filtering
- Task Search
- Team Collaboration
- Notifications
- File Uploads
- Activity Logs
- Dark Mode
- Drag and Drop Task Board

---

# Author

Rishitha