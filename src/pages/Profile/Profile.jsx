import "./Profile.css";
import useProfileLogic from "../../hocks/useProfileLogic";
import { useState } from "react";
import { editProfileData } from "../../services/ProfileDataApi";
import { useDispatch, useSelector } from "react-redux";
import { userName } from "../../store/features/UserSlice";
// import { editProfileData } from "../../services/ProfileDataApi";

function Profile() {
    const { token } = useSelector((store) => store.user);
    const { firstName, lastName } = useProfileLogic();
    // console.log(token, firstName);
    const [isEditing, setIsEditing] = useState(false);
    const [updateFirstName, setUpdateFirstName] = useState(firstName);
    const [updateLastName, setUpdateLastName] = useState(lastName);
    const dispatch = useDispatch();

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        name === "firstName"
            ? setUpdateFirstName(value)
            : setUpdateLastName(value);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveSubmit = async (e) => {
        e.preventDefault();

        try {
            const updateName = {
                firstName: updateFirstName || firstName,
                lastName: updateLastName || lastName,
            };
            const response = await editProfileData(token, updateName);
            dispatch(
                userName({
                    firstName: response.firstName,
                    lastName: response.lastName,
                })
            );

            console.log("Profile updated:", response);

            setIsEditing(false);
        } catch (error) {
            console.error("Profile update failed:", error);
        }
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setUpdateFirstName(firstName);
        setUpdateLastName(lastName);
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                {!isEditing ? (
                    <>
                        <h1>
                            Welcome back
                            <br />
                            {`${firstName} ${lastName}`}
                        </h1>
                        <button
                            className="edit-button"
                            onClick={handleEditClick}>
                            Edit Name
                        </button>
                    </>
                ) : (
                    <form onSubmit={(e) => handleSaveSubmit(e)}>
                        <h1>Welcome back</h1>
                        <input
                            type="text"
                            className="edit-input"
                            placeholder={`${firstName}`}
                            name="firstName"
                            onChange={(e) => handleChange(e)}
                        />
                        <input
                            type="text"
                            className="edit-input"
                            placeholder={`${lastName}`}
                            name="lastName"
                            onChange={(e) => handleChange(e)}
                        />
                        <div>
                            <button className="modify-button" type="submit">
                                Save
                            </button>
                            <button
                                className="modify-button"
                                onClick={handleCancelClick}>
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Checking (x8349)
                    </h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Savings (x6712)
                    </h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Credit Card (x8349)
                    </h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">
                        Current Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
        </main>
    );
}

export default Profile;
