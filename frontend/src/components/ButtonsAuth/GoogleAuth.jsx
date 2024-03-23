import { postUser } from "@/apiRequests/Register/postUser";
import { LoginSocialGoogle } from "reactjs-social-login";

export default function GoogleAuth() {

    // useEffect(() => {
    //     if (userId && accessToken2) {
    //         dispatch(getCart(userId, accessToken2));
    //     }
    // }, [userId]);

    const onSuccess = (data) => {
        let profileObj = data;
        let accessToken = data.access_token;
        if (profileObj.family_name == undefined) {
            profileObj.family_name = "No definido";
        }
        console.log(profileObj, accessToken);
        postUser(profileObj, accessToken)
        // onGoogleLoginSuccess();
    };

    const onFailure = (res) => {
        console.log("Login Failed: res: ", res);
    };

    return (
        <button className="flex items-center justify-center md:justify-start gap-4 text-nowrap text-base font-monserrat font-semibold w-full text-black border-[#242424] border-solid border-2 rounded-xl pl-4">
            <svg
                aria-hidden="true"
                width="18" height="18"
                viewBox="0 0 18 18">
                <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"></path>
                <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"></path>
                <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"></path>
                <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"></path>
            </svg>
            <LoginSocialGoogle
                client_id={process.env.NEXT_PUBLIC_GOOGLE_ID}
                scope="email profile openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
                onResolve={({ provider, data }) => {
                    onSuccess(data)
                }}
                onReject={(err) => {
                    console.log(err)
                }}
            >
                <span className="text-base">
                    Login with Google
                </span>
            </LoginSocialGoogle>
        </button>
    )
}