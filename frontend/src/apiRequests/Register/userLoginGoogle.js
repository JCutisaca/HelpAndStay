import axios from "axios";
import { signOut } from "next-auth/react"

export const userLoginGoogle = async (session, setUser) => {
    const accessToken = session.accessToken;
    const user = {
        email: session?.user?.email,
        firstName: session?.user?.firstName,
        lastName: session?.user?.lastName,
        image: session?.user?.image
    }
    try {
        const { data } = await axios.post("/user/loginGoogle", { accessToken, user })
        setUser(data)
    } catch (error) {
        console.log(error.message);
        signOut()
    }
}