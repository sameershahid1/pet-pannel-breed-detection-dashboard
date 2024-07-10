
export const setToken = async (token: string) => {
    try {
        const raw = await fetch("/api/token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: token })
        })

        const response = await raw.json()
        return response
    } catch (error) {
        return { message: `error: ${error}` }
    }
}


export const getToken = async () => {
    try {
        const raw = await fetch("/api/token/")
        const response = await raw.json()
        return response
    } catch (error) {
        return { message: `error: ${error}` }
    }
}


export const deleteUser = async () => {
    try {
        const raw = await fetch(`/api/token/`, {
            method: "DELETE"
        })
        const response = await raw.json()
        return response
    } catch (error) {
        return { message: `error: ${error}` }
    }
}