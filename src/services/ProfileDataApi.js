export async function getProfileData(token) {
    try {
        const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch data (HTTP ${response.status})`);
        }
        const data = await response.json();
        return data.body;
    } catch (error) {
        console.log(error);
    }
}

export async function editProfileData(token, updateProfileData) {
    try {
        const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
                body: JSON.stringify(updateProfileData),
            }
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch data (HTTP ${response.status})`);
        }
        const data = await response.json();
        return data.body;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
