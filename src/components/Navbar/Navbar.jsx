import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/features/userSlice";

function Navbar() {
    const { firstName } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={"../../public/argentBankLogo.png"}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {!firstName ? (
                <div>
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            ) : (
                <div>
                    <Link to="/" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {firstName}
                    </Link>
                    <Link
                        to="/login"
                        className="main-nav-item"
                        onClick={() => dispatch(logout())}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
