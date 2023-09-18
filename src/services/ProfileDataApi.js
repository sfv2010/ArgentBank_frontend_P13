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
        //  console.log(data);
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
        console.log(data);
        return data.body;
    } catch (error) {
        console.log(error);
        console.log(updateProfileData);
        console.log(token);
        throw error;
    }
}
