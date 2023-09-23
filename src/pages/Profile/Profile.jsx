import "./Profile.css";
import useProfileLogic from "../../hocks/useProfileLogic";
import { useState } from "react";

function Profile() {
    const { firstName, lastName, handleSaveProfileData } = useProfileLogic();
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleCancelClick = () => {
        setIsEditing(false);
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
                    <form
                        onSubmit={(e) =>
                            handleSaveProfileData(e, setIsEditing)
                        }>
                        <h1>Welcome back</h1>
                        <input
                            type="text"
                            className="edit-input"
                            placeholder={`${firstName}`}
                            name="firstName"
                        />
                        <input
                            type="text"
                            className="edit-input"
                            placeholder={`${lastName}`}
                            name="lastName"
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
