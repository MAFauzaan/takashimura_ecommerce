import { clone } from "ramda";
import { useState } from "react"

const useCheckout = () => {

    const [shipmentMethod, setShipmentMethod] = useState([
        {
            isActive: false,
            id: 1,
            label: 'JNE - Promo Free Shipping',
            price: 'Gratis'
        }
    ]);

    const onChangeShipmentMethod = (id: any) => {
        setShipmentMethod(prevState => {
            const clonedPrevState = clone(prevState);
            const newState = clonedPrevState.map((v: any) => {
                if (v.id === id) {
                    if (v.isActive === true) {
                        return {...v, isActive: false}
                    }
                    return {
                        ...v,
                        isActive: true
                    }
                }
                return {...v, isActive: false}
            })

            return newState;
        })
    }

    return {
        onChangeShipmentMethod,
        shipmentMethod
    }
}

export default useCheckout