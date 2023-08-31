import { Link } from "react-router-dom";
import "./SignIn.css";
// import { useState } from "react";
// import { useDispatch } from "react-redux";

function SignIn() {
    // const [username, setUsername]= useState("")
    // const [password, setPassword] = useState("");
    // const dispatch = useDispatch();
    return (
        <main className="main bg-dark">
            <section className="sign-in-content ">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    <Link to="/profile" className="sign-in-button">
                        Sign In
                    </Link>
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    {/* <button className="sign-in-button">Sign In</button> */}
                </form>
            </section>
        </main>
    );
}

export default SignIn;
