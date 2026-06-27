const { v4: uuidv4 } = require("uuid");
const { readTodos, writeTodos } = require("../utils/fileUtils");

// GET /todos
const getTodos = async (req, res) => {
    try {
        const todos = await readTodos();
        res.status(200).json({
    success: true,
    count: todos.length,
    data: todos
});
    } catch (error) {
        res.status(500).json({ success: false,
            message: "Failed to fetch todos." });
    }
};

// GET /todos/:id
const getTodoById = async (req, res) => {
    try {
        const todos = await readTodos();

        const todo = todos.find(todo => todo.id === req.params.id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found."
            });
        }

        res.status(200).json({
    success: true,
    data: todo
});

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch todo."
        });
    }
};

// POST /todos
const createTodo = async (req, res) => {

    try {

        const todos = await readTodos();

        const { title, description, priority } = req.body;
        // Validate title
if (!title || title.trim() === "") {
    return res.status(400).json({
        success: false,
        message: "Title is required."
    });
}

// Validate priority
const validPriorities = ["Low", "Medium", "High"];

if (priority && !validPriorities.includes(priority)) {
    return res.status(400).json({
        success: false,
        message: "Priority must be Low, Medium or High."
    });
}

        const newTodo = {
            id: uuidv4(),
            title,
            description,
            priority,
            completed: false,
            createdAt: new Date().toISOString()
        };

        todos.push(newTodo);

        await writeTodos(todos);

        res.status(201).json({
    success: true,
    message: "Todo created successfully.",
    data: newTodo
});

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to create todo."
        });

    }

};

// PUT /todos/:id
const updateTodo = async (req, res) => {

    try {

        const todos = await readTodos();

        const index = todos.findIndex(todo => todo.id === req.params.id);

        if (index === -1) {
            return res.status(404).json({
                success: false,
                message: "Todo not found."
            });
        }

        todos[index] = {
            ...todos[index],
            ...req.body
        };

        await writeTodos(todos);

        res.status(200).json({
    success: true,
    message: "Todo updated successfully.",
    data: todos[index]
});

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to update todo."
        });

    }

};

// DELETE /todos/:id
const deleteTodo = async (req, res) => {

    try {

        const todos = await readTodos();

        const filteredTodos = todos.filter(
            todo => todo.id !== req.params.id
        );

        if (filteredTodos.length === todos.length) {

            return res.status(404).json({
                success: false,
                message: "Todo not found."
            });

        }

        await writeTodos(filteredTodos);

        res.status(200).json({
    success: true,
    message: "Todo deleted successfully."
});

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to delete todo."
        });

    }

};

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};