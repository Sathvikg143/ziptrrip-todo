const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("ZipTrrip Todo API is running...");
});

app.use("/todos", todoRoutes);
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found."
    });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});