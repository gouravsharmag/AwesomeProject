import API from "./Api";

export const LoginService = {
    login: async (args) => {
        const data = await API.post("api/login", args);
        return data;
    }
}

export const GetProfileService = {
    getProfile: async (args) => {
        const data = await API.get("api/get-profile", args);
        return data;
    }
}

export const GetUserProfileService = {
    getUserDetails: async (header) => {
        const data = await API.get("api/get-user-details", header);
        return data;
    }
}

export const LogoutService = {
    logout: async (header) => {
        const data = await API.get("api/logout", header);
        return data;
    }
}
