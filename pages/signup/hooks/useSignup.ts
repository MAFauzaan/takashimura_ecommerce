import { useRouter } from "next/router";
import { useState } from "react";
import { fetchRegisterNewUser } from "../services/signup.service";

export const useSignUp = () => {
    const router = useRouter()
    const { replace } = router;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [message, setMessage] = useState('')

    const onChangeEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const onChangeFullName = (e: any) => {
        setFullName(e.target.value)
    }

    const onClickRegister = async (e: any) => {
        e.preventDefault();
        const constructData = {
            email,
            password,
            username: fullName
        }
        const sendData = await fetchRegisterNewUser(constructData);
        if (sendData.status === 'OK' ){
            setMessage(sendData.message);

            setTimeout(() => replace('/login')  , 2000)
        }
    }

    return {
        email,
        password,
        fullName,
        onChangeEmail,
        onChangePassword,
        onClickRegister,
        onChangeFullName,
        message
    }
}