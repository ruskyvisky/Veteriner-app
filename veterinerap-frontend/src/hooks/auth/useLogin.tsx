import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import cookie from "js-cookie";
import { toastError, toastSuccess } from "@/toastMessages";
import {loginQueryFn} from "@/api/authQueryFn"
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setIsLoggedIn } from "@/redux/slices/authSlice/authSlice";
const useLogin = () => {
    
  const router = useRouter();

  const dispatch = useAppDispatch();

    const {mutate: loginOperation , isLoading: loginLoading , } = useMutation(loginQueryFn,
        {
            onSuccess(data) {
                cookie.set("authToken", data.data, {
                  expires: 1,
                  sameSite: "none",
                  secure: true,
                });

                toastSuccess(data.message)
                dispatch(setIsLoggedIn(true));
                router.push("/dashboard")
            
              },
            onError: (error) => {
                toastError("Giriş Yapılamadı")
            }

        }
        
        )

     return {
      loginOperation,
            loginLoading

     }


}


export default useLogin;