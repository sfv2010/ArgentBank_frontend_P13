import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginUser from "../services/AuthApi";
import { userLogin } from "../store/features/UserSlice";

function useSignInLogic() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = ({ currentTarget }, user, setUser) => {
        const { name, value } = currentTarget;
        console.log(name, value);
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e, user) => {
        e.preventDefault();

        try {
            const response = await loginUser(user);

            dispatch(
                userLogin({
                    token: response,
                    email: user.email,
                })
            );

            navigate("/profile");
        } catch (error) {
            console.log(error.message);

            error.message === "Invalid email and/or password"
                ? setErrorMessage("Invalid email and/or password ")
                : setErrorMessage("An error occurred during login");
        }
    };

    return {
        handleSubmit,
        handleChange,
        errorMessage,
    };
}
export default useSignInLogic;
