import { useState } from "react";
import "../css/Dashboard.css";

function CandidateDashboard() {

    const [page, setPage] = useState("home");

    return (
        <div className="dashboard">

            <div className="sidebar">
                <h2>CareerConnect</h2>

                <button onClick={() => setPage("home")}>Home</button>

                <button onClick={() => setPage("jobs")}>
                    Search Jobs
                </button>

                <button onClick={() => setPage("applied")}>
                    Applied Jobs
                </button>

                <button onClick={() => setPage("profile")}>
                    Profile
                </button>

                <button onClick={() => setPage("logout")}>
                    Logout
                </button>

            </div>

            <div className="content">

                {page === "home" && (

                    <>
                        <h1>Welcome V Gnanaprasuna</h1>

                        <p>
                            Welcome to CareerConnect Job Portal.
                        </p>

                        <div className="cards">

                            <div className="card">
                                <h3>Jobs Available</h3>
                                <h2>120</h2>
                            </div>

                            <div className="card">
                                <h3>Applied Jobs</h3>
                                <h2>5</h2>
                            </div>

                            <div className="card">
                                <h3>Interviews</h3>
                                <h2>2</h2>
                            </div>

                        </div>
                    </>
                )}

                {page === "jobs" && (

                    <>
                        <h1>Search Jobs</h1>

                        <table>

                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Job</th>
                                    <th>Location</th>
                                    <th>Salary</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>OpenAI</td>
                                    <td>Java Full Stack Developer</td>
                                    <td>Bangalore</td>
                                    <td>6 LPA</td>
                                    <td>
                                        <button>Apply</button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Infosys</td>
                                    <td>Java Developer</td>
                                    <td>Hyderabad</td>
                                    <td>5.5 LPA</td>
                                    <td>
                                        <button>Apply</button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>TCS</td>
                                    <td>Backend Developer</td>
                                    <td>Pune</td>
                                    <td>5 LPA</td>
                                    <td>
                                        <button>Apply</button>
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </>

                )}

                {page === "applied" && (

                    <>
                        <h1>Applied Jobs</h1>

                        <table>

                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Job</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>OpenAI</td>
                                    <td>Java Full Stack Developer</td>
                                    <td>Applied</td>
                                </tr>

                                <tr>
                                    <td>Infosys</td>
                                    <td>Java Developer</td>
                                    <td>Shortlisted</td>
                                </tr>

                            </tbody>

                        </table>

                    </>

                )}

                {page === "profile" && (

                    <>
                        <h1>My Profile</h1>

                        <p><b>Name:</b> V Gnanaprasuna</p>

                        <p><b>Email:</b> gnana@gmail.com</p>

                        <p><b>Phone:</b> 9876543210</p>

                        <p><b>Role:</b> Candidate</p>

                        <button>Edit Profile</button>

                    </>

                )}

                {page === "logout" && (

                    <>
                        <h1>Logout</h1>

                        <p>You have been logged out successfully.</p>

                    </>

                )}

            </div>

        </div>
    );
}

export default CandidateDashboard;