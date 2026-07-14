import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

import CandidateDashboard from "./pages/CandidateDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import "./css/App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route
                    path="/candidate"
                    element={<CandidateDashboard />}
                />

                <Route
                    path="/employer"
                    element={<EmployerDashboard />}
                />

                <Route
                    path="/admin"
                    element={<AdminDashboard />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;