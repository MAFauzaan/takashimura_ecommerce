export const AddItemToCart = async(item: any, id: any, token: any) => {
    const response = await fetch('http://localhost:5000/customer/add-item', {
        method: 'POST',
        headers: { "Content-Type": "application/json", token},
        body: JSON.stringify({item, id})
    })
}