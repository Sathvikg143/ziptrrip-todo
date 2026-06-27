import { useEffect, useState } from "react";

function TodoForm({ onAdd, editingTodo, onUpdate }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");

    useEffect(() => {

        if (editingTodo) {

            setTitle(editingTodo.title);
            setDescription(editingTodo.description);
            setPriority(editingTodo.priority);

        }

    }, [editingTodo]);

    function handleSubmit(e) {

        e.preventDefault();

        const todo = {

            title,
            description,
            priority

        };

        if (editingTodo) {

            onUpdate({
                ...editingTodo,
                ...todo
            });

        } else {

            onAdd(todo);

        }

        setTitle("");
        setDescription("");
        setPriority("Medium");

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="todo-form"
        >

            <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <textarea
                placeholder="Enter description"
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
                }
            />

            <select
                value={priority}
                onChange={(e) =>
                    setPriority(e.target.value)
                }
            >

                <option>Low</option>
                <option>Medium</option>
                <option>High</option>

            </select>

            <button type="submit">

                {
                    editingTodo

                        ? "Update Todo"

                        : "+ Add Todo"

                }

            </button>

        </form>

    );

}

export default TodoForm;