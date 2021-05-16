class AuthManager {
    public authToken: string;
    private baseUrl = "https://neighbourhoodhacks-backend.herokuapp.com";
    public business: {name?: string, specialty?: string, description?: string};

    constructor() {
        this.authToken = "";
        this.business = {};
    }

    register(username: string,  email: string, password: string) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                username: username,
                email: email,
                password: password,
                age: 20,
                location: "Somewhere"
            })
        };

        return fetch(`${this.baseUrl}/auth/local/register`, requestOptions);
    }

    login(email: string, password: string) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                identifier: email,
                password: password
            })
        };

        return fetch(`${this.baseUrl}/auth/local`, requestOptions);
    }
}

export default new AuthManager();