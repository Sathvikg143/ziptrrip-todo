const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../data/todos.json");

async function readTodos() {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
}

async function writeTodos(todos) {
    await fs.writeFile(
        filePath,
        JSON.stringify(todos, null, 2)
    );
}

module.exports = {
    readTodos,
    writeTodos
};