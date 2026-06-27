import { useEffect, useState } from "react";
import API from "../services/api";
import TodoCard from "../components/TodoCard";
import TodoForm from "../components/TodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState("");
    const [editingTodo, setEditingTodo] = useState(null);

    useEffect(() => {
        fetchTodos();
    }, []);

    async function fetchTodos() {
        try {
            const response = await API.get("/todos");
            setTodos(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function addTodo(todo) {
        try {
            await API.post("/todos", todo);
            fetchTodos();
        } catch (error) {
            console.error(error);
        }
    }

    async function updateTodo(updatedTodo) {
        try {
            await API.put(`/todos/${updatedTodo.id}`, updatedTodo);
            fetchTodos();
            setEditingTodo(null);
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteTodo(id) {
        try {
            await API.delete(`/todos/${id}`);
            fetchTodos();
        } catch (error) {
            console.error(error);
        }
    }

    async function toggleTodo(todo) {
        try {
            await API.put(`/todos/${todo.id}`, {
                ...todo,
                completed: !todo.completed
            });

            fetchTodos();
        } catch (error) {
            console.error(error);
        }
    }

    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(search.toLowerCase())
    );
    const completed = todos.filter(
    todo => todo.completed
).length;

const pending = todos.length - completed;

    return (
        <div className="container">
            <h1>📝 ZipTrrip Todo Manager</h1>

<div className="stats">

    <span> 📋 Total : {todos.length}</span>

    <span>✅ Completed : {completed}</span>

    <span>⏳ Pending : {pending}</span>

</div>

            <p
    style={{
        marginBottom: "20px",
        color: "#555"
    }}
>
    Showing {filteredTodos.length} of {todos.length} Todos
</p>

            <input
                type="text"
                placeholder="🔍 Search todos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-bar"
            />

            <TodoForm
                onAdd={addTodo}
                editingTodo={editingTodo}
                onUpdate={updateTodo}
            />

            {filteredTodos.length === 0 ? (
                <div className="empty-state">
                    <h2>📋</h2>
                    <p>No Todos Found</p>
                    <small>Create your first task.</small>
                </div>
            ) : (
                filteredTodos.map(todo => (
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteTodo}
                        onEdit={(todo) => {
                            setEditingTodo(todo);
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        }}
                        onToggle={toggleTodo}
                    />
                ))
            )}
            
        </div>
    );
}

export default TodoList;