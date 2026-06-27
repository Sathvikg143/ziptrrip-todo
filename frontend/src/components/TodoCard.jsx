import { useNavigate } from "react-router-dom";

function TodoCard({
    todo,
    onDelete,
    onEdit,
    onToggle
}) {

    const navigate = useNavigate();

    return (

        <div className="todo-card">

            <h2
    className={
        todo.completed
            ? "completed-title"
            : ""
    }
>
    {todo.title}
</h2>

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
                        todo.completed ? "completed" : "pending"
                    }`}
                >
                    {todo.completed ? "Completed" : "Pending"}
                </span>
            </p>

            <div className="button-group">

                <button
    className="view-btn"
    onClick={() =>
        navigate(`/todo?id=${todo.id}`)
    }
>
    View
</button>

                <button
                    className="edit-btn"
                    onClick={() => onEdit(todo)}
                >
                    Edit
                </button>

                <button
                    className="delete-btn"
                    onClick={() => {
                        if (window.confirm("Delete this todo?")) {
                            onDelete(todo.id);
                        }
                    }}
                >
                    Delete
                </button>

                <button
                    className="complete-btn"
                    onClick={() => onToggle(todo)}
                >
                    {todo.completed
                        ? "Mark Pending"
                        : "Mark Complete"}
                </button>

            </div>

        </div>

    );
}

export default TodoCard;