import { useRef } from "react";
import useSignInLogic from "../../hocks/useSignInLogic";
import "./SignIn.css";

function SignIn() {
    const { handleSubmit, errorMessage } = useSignInLogic();
    const errorRef = useRef(null);

    return (
        <main className="main bg-dark">
            <section className="sign-in-content ">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="email"
                            id="username"
                            name="email"
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
                    <div className="error" ref={errorRef}>
                        {errorMessage}
                    </div>
                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
}
export default SignIn;
