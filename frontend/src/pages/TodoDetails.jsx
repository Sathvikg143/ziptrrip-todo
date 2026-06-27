import { useEffect, useState } from "react";
import {
    useSearchParams,
    useNavigate
} from "react-router-dom";
import API from "../services/api";

function TodoDetails() {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const id = searchParams.get("id");

    const [todo, setTodo] = useState(null);

    useEffect(() => {

        fetchTodo();

    }, [id]);

    async function fetchTodo() {

        try {

            const response =
                await API.get(`/todos/${id}`);

            setTodo(response.data.data);

        }

        catch (error) {

            console.error(error);

        }

    }

    if (!todo) {

        return <h2>Loading...</h2>;

    }

    return (

        <div className="container">
            <button
    className="view-btn back-btn"
    onClick={() => navigate("/")}
>
    ← Back to Todos
</button>

            <h1>Todo Details</h1>

            <div className="todo-card">

                <h2>{todo.title}</h2>

                <p>{todo.description}</p>

                <p>
    <strong>Priority:</strong>{" "}
    <span className={`priority ${todo.priority.toLowerCase()}`}>
        {todo.priority}
    </span>
</p>

                <p>
    <strong>Status:</strong>{" "}
    <span
        className={`status ${
            todo.completed
                ? "completed"
                : "pending"
        }`}
    >
        {todo.completed
            ? "Completed"
            : "Pending"}
    </span>
</p>

                <p>

                    <strong>Created:</strong>

                    {new Date(todo.createdAt).toLocaleString()}

                </p>

            </div>

        </div>

    );

}

export default TodoDetails;