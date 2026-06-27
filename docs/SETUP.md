# Project Setup Guide

This guide explains how to run the project locally.

---

# Prerequisites

Make sure the following software is installed:

* Node.js (v18 or later recommended)
* npm
* Git
* Visual Studio Code (recommended)

---

# Clone the Repository

```bash
git clone <repository-url>
```

```bash
cd ziptrrip-todo
```

---

# Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm run dev
```

The backend will run at:

```text
http://localhost:5000
```

---

# Frontend Setup

Open a new terminal.

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

---

# Project Workflow

1. Start the backend server.
2. Start the frontend server.
3. Open:

```text
http://localhost:5173
```

4. Use the application.

---

# Available Features

* Create Todo
* View Todos
* Update Todo
* Delete Todo
* Toggle Completion Status
* Search Todos
* View Todo Details
* Responsive User Interface

---

# Troubleshooting

## Backend not starting

* Verify Node.js is installed.
* Run:

```bash
npm install
```

again.

---

## Frontend cannot connect to backend

Ensure the backend is running on:

```text
http://localhost:5000
```

---

## Port already in use

Terminate the existing process or configure another available port.

---

# Notes

This project uses a JSON file (`todos.json`) for data persistence instead of a database, as permitted by the assignment requirements.
