export const fetchRegisterNewUser = async (data: any) => {
    const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    const result = await response.json();
    
    if (result.status !== 'OK') {
        throw new Error(result.error);
    }
    
    return result;
}