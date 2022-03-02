import "./sass/normilize.scss";
import "./sass/style.scss";
import { Route, Routes } from "react-router";
import Showcase from "./pages/Showcase";
import Card from "./pages/Card";
import Chapter from "./pages/Chapter";
import Search from "./pages/Search";
import Drama from "./pages/Drama";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Showcase />} />
                <Route path="/card" element={<Card />} />
                <Route path="/chapter" element={<Chapter />} />
                <Route path="/search" element={<Search />} />
                <Route path="/result" element={<Drama />} />
                <Route path="/result1" element={<Result />} />
                <Route path="/not" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
