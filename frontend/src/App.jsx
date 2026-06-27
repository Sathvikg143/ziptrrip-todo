import { Routes, Route } from "react-router-dom";

import TodoList from "./pages/TodoList";
import TodoDetails from "./pages/TodoDetails";

function App() {
    return (
        <Routes>
            <Route
    path="/"
    element={<TodoList />}
/>

<Route
    path="/todo"
    element={<TodoDetails />}
/>

<Route
    path="*"
    element={
        <h2
            style={{
                textAlign: "center",
                marginTop: "50px"
            }}
        >
            404 - Page Not Found
        </h2>
    }
/>

            <Route
                path="/todo"
                element={<TodoDetails />}
            />
        </Routes>
    );
}

export default App;