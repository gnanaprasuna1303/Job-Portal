import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        role: "CANDIDATE"
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const registerUser = () => {

        UserService.register(user)
            .then(() => {

                alert("Registration Successful");

                navigate("/");

            })
            .catch(() => {

                alert("Registration Failed");

            });

    };

    return (

        <div className="container">

            <div className="card">

                <h2>Create Account</h2>

                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                />

                <button
                    className="btn"
                    onClick={registerUser}
                >
                    Register
                </button>

                <p style={{ marginTop: "20px", textAlign: "center" }}>
                    Already have an account?
                </p>

                <button
                    className="btn"
                    onClick={() => navigate("/")}
                >
                    Login
                </button>

            </div>

        </div>

    );

}

export default Register;