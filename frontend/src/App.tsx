import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Authors from "./pages/Authors";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Головна</Link> |{" "}
                <Link to="/books">Книги</Link> |{" "}
                <Link to="/authors">Автори</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/authors" element={<Authors />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;