import Home from "./Pages/home";
import Result from "./Pages/result";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </Router>
    </>
);
}