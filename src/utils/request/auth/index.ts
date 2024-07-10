
export const loginRequest = async (credential: any) => {
    try {
        const raw = await fetch("http://0.0.0.0:8000/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(credential)
        },)
        return await raw.json()
    } catch (error) {
        return { message: `error: ${error}` }
    }
}



export const registrationRequest = async (credential: any) => {
    try {
        const raw = await fetch("http://0.0.0.0:8000/sign-up", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(credential)
        },)
        return await raw.json()
    } catch (error) {
        return { message: `error: ${error}` }
    }
}