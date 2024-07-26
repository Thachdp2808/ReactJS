import { GoogleIcon } from "@src/icons/GoogleIcon";
import { useNavigationStore } from "@src/stores/useNavigationStore";
import { useGoogleLogin } from "@react-oauth/google";


export default function LoginGoogle() {
    const { accessToken, setAccessToken } = useNavigationStore();
    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            setAccessToken(tokenResponse.access_token);
            localStorage.setItem('accessToken', tokenResponse.access_token);
        },
        
      });
  return (
    <button
      className="flex items-center gap-2 p-2 bg-primary-3 text-white rounded-md mt-4"
      onClick={() => login()}
    >
      <GoogleIcon className="items-center" />
      <p className="">LOGIN WITH GOOGLE</p>
    </button>
  );
}
