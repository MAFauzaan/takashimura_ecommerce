import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { useAppDispatch } from "../../../store/hooks";
import { onChangeAuth, onChangeUserData } from "../../../store/reducers/userSlice";
import { fetchLogin, getUserData } from "../services/login.service";

export const useLogin = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { replace } = router;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const onClickLogin = async (e: any) => {
        e.preventDefault();
        const loginCredentials = await fetchLogin({email, password});
        if (loginCredentials.token) {
            const userData = await getUserData(loginCredentials.token);
            dispatch(onChangeAuth(loginCredentials.token));
            dispatch(onChangeUserData(userData))
        }
        setTimeout(() => replace('/'), 3000)
    }

    return {
        email,
        password,
        onChangeEmail,
        onChangePassword,
        onClickLogin
    }
}