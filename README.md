# Todo App Server

A simple backend API for the Todo application built with **Node.js**, **Express.js**, and **MongoDB**. This server is responsible for managing todo tasks by providing endpoints to create, read, update, and delete tasks.

---

## Links

- **Client Repository:** https://github.com/ahanafintesher/todo-app
- **Server Repository:** https://github.com/ahanafintesher/todo-app-server
- **Live Client App:** https://todo-app-snowy-nine-74.vercel.app/

---

## Features

- Add a new task
- Get all tasks
- Update task information or task status
- Delete a task
- Store task data in MongoDB
- REST API based backend structure
- Environment variable support with `dotenv`
- CORS enabled for frontend-backend communication

---

## Tech Stack

### Backend

- **Node.js**
- **Express.js**
- **MongoDB**
- **dotenv**
- **cors**

### Database

- **MongoDB Atlas / MongoDB**

---

## API Endpoints

### Base URL (Local)

```bash
http://localhost:5000
```

### Routes

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/` | Check if the server is running |
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks` | Get all tasks |
| PATCH | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

---

## Task Data Structure

Each task in the database follows this structure:

```json
{
  "_id": "6a392451c9d009e122866f7e",
  "title": "Complete React Project",
  "description": "Finish the product listing page and integrate API data.",
  "status": "To Do"
}
```

### Field Description

| Field | Type | Description |
| --- | --- | --- |
| `_id` | ObjectId | Unique MongoDB document ID |
| `title` | String | Task title |
| `description` | String | Task description |
| `status` | String | Task status such as `To Do`, `In Progress`, or `Pending` |

---

## API Usage

### 1. Get Server Status

**GET /**

```json
"Hello World!"
```

---

### 2. Create a Task

**POST /api/tasks**

#### Request Body

```json
{
  "title": "Complete React Project",
  "description": "Finish the product listing page and integrate API data.",
  "status": "To Do"
}
```

---

### 3. Get All Tasks

**GET /api/tasks**

#### Response Example

```json
[
  {
    "_id": "6a392451c9d009e122866f7e",
    "title": "Complete React Project",
    "description": "Finish the product listing page and integrate API data.",
    "status": "To Do"
  }
]
```

---

### 4. Update a Task

**PATCH /api/tasks/:id**

#### Example Request Body

```json
{
  "status": "In Progress"
}
```

You can also update other fields by sending them in the request body.

---

### 5. Delete a Task

**DELETE /api/tasks/:id**

Deletes a task by its MongoDB `_id`.

---

## Project Structure

```bash
todo-app-server/
│── index.js
│── package.json
│── .env
```

---

## Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/ahanafintesher/todo-app-server.git
```

### 2. Move into the project directory

```bash
cd todo-app-server
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Add the following environment variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 5. Run the server

Since your current `package.json` does not include a start script, run:

```bash
node index.js
```

---

## Dependencies

```json
{
  "cors": "^2.8.6",
  "dotenv": "^17.4.2",
  "express": "^5.2.1",
  "mongodb": "^7.3.0"
}
```

---

## Notes

- The backend uses a MongoDB database named `todo`
- Tasks are stored inside the `tasks` collection
- This server is built to support the Todo App frontend
- CORS is enabled so the frontend can communicate with the backend

---

## Future Improvements

- Add request validation
- Add proper error handling
- Add authentication and user-based task management
- Add timestamps like `createdAt` and `updatedAt`
- Add filtering tasks by status
- Add pagination support

---

## Author

**Ahanaf Intesher**
