async function loginUser(credentials) {
    try {
        const response = await fetch(
            "http://localhost:3001/api/v1/user/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch data (HTTP ${response.status})`);
        }

        const data = await response.json();

        return data.body.token;
    } catch (error) {
        console.log(error.message);
        const errorMessage =
            error.message === "Failed to fetch data (HTTP 400)"
                ? "Invalid email and/or password"
                : "An error occurred during login";
        throw new Error(errorMessage);
    }
}
export default loginUser;
