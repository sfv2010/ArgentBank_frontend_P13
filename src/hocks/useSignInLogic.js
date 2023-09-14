import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginUser from "../services/AuthApi";
import { userLogin } from "../store/features/userSlice";

function useSignInLogic() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); //for RememberMe

    // const [user, setUser] = useState({
    //     email: "",
    //     password: "",
    // });
    // const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const errorRef = useRef(null);

    // const handleChange = ({ currentTarget }) => {
    //     const { name, value } = currentTarget;
    //     console.log(name, value);
    //     setUser({ ...user, [name]: value });
    // };

    const handleSubmit = async (e, user) => {
        e.preventDefault();

        try {
            const response = await loginUser(user);
            console.log(response);
            dispatch(
                userLogin({
                    token: response.token,
                    firstName: response.firstName,
                    lastName: response.lastName,
                    email: response.email,
                })
            );

            navigate("/profile");
        } catch (error) {
            console.error(error);

            if (error.response && error.response.data.status === 400) {
                setErrorMessage("Invalid email and/or password");
                errorRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return {
        handleSubmit,
        errorMessage,
        errorRef,
    };
}
export default useSignInLogic;
