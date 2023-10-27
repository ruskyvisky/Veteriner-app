import Cookies from "js-cookie";
import {useRouter} from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setIsLoggedIn } from "@/redux/slices/authSlice/authSlice";

const useLogout = () => {
    const dispatch = useAppDispatch();

    const router = useRouter()
    const logout = () => {
        Cookies.remove("authToken");
        dispatch(setIsLoggedIn(false));
        router.push("/login")
        
    }

    return { logout }
}

export default useLogout;