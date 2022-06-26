export const fetchLogin = async (data: {email: string, password: string}) => {
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(data)
    })
    const result = await response.json();
    if (result.status !== 'OK') {
        throw new Error(result.error);
    }

    localStorage.setItem("token", result.token)

    return result;
}

export const getUserData = async (token: any) => {
    const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: { token }
    })
    const result = await response.json();

    // if (result.status !== 'OK') {
    //     throw new Error(result.error);
    // }

    return result;
}