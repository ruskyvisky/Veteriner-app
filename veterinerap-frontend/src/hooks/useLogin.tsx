import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import cookie from "js-cookie";
import { authType } from "@/types/authTypes";
import { toastError } from "@/toastMessages";
import {loginQueryFn} from "@/api/authQueryFn"
const useLogin = () => {

    const {mutate: loginOperation , isLoading: loginLoading , } = useMutation(loginQueryFn,
        {
            onSuccess(data) {
              console.log(data)
                cookie.set("authToken", data.data, {
                  expires: 1,
                  sameSite: "none",
                  secure: true,
                });
            
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