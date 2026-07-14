import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";

function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const loginUser = () => {

        UserService.login(user)
            .then((response) => {

                alert(response.data.message);

                if (response.data.message === "Login Successful") {

                    alert("Welcome " + response.data.fullName);

                    if (response.data.role === "CANDIDATE") {
                        navigate("/candidate");
                    }
                    else if (response.data.role === "EMPLOYER") {
                        navigate("/employer");
                    }
                    else if (response.data.role === "ADMIN") {
                        navigate("/admin");
                    }

                }

            })
            .catch((error) => {

                console.log(error);
                alert("Login Failed");

            });

    };

    return (

    <div className="container">

        <div className="card">

            <h2>CareerConnect Login</h2>

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
            />

            <button
                className="btn"
                onClick={loginUser}
            >
                Login
            </button>

            <p style={{ marginTop: "20px", textAlign: "center" }}>
                Don't have an account?
            </p>

            <button
                className="btn"
                onClick={() => navigate("/register")}
            >
                Sign Up
            </button>

        </div>

    </div>

);

}

export default Login;