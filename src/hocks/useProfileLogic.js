import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "../services/ProfileDataApi";
import { userName } from "../store/features/UserSlice";

function useProfileLogic() {
    const dispatch = useDispatch();
    const { token, firstName, lastName } = useSelector((store) => store.user);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getProfileData(token);
                dispatch(
                    userName({
                        firstName: response.firstName,
                        lastName: response.lastName,
                    })
                );
            } catch (error) {
                console.error(error);
            }
        }
        console.log(token);
        fetchData();
    }, [dispatch, token]);

    return {
        firstName,
        lastName,
    };
}

export default useProfileLogic;
