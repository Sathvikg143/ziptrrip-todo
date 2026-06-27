# REST API Documentation

## Base URL

```
http://localhost:5000
```

---

# GET /todos

Returns all todos.

### Response

```json
[
  {
    "id": "...",
    "title": "Study",
    "description": "React Assignment",
    "priority": "High",
    "completed": false
  }
]
```

---

# GET /todos/:id

Returns a single todo.

---

# POST /todos

Creates a new todo.

### Request

```json
{
  "title": "Study",
  "description": "React Assignment",
  "priority": "High"
}
```

---

# PUT /todos/:id

Updates an existing todo.

### Request

```json
{
  "title": "Updated Title",
  "description": "Updated Description",
  "priority": "Medium",
  "completed": true
}
```

---

# DELETE /todos/:id

Deletes a todo.

---

## Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | Success               |
| 201  | Created               |
| 400  | Bad Request           |
| 404  | Todo Not Found        |
| 500  | Internal Server Error |
