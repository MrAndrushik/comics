import Header from "./components/Header";
import "./sass/style.scss";
import "./sass/normilize.scss";
import { Route, Routes } from "react-router";
import Showcase from "./pages/Showcase";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Showcase />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
