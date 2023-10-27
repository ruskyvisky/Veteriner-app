import { useMutation, } from "@tanstack/react-query";
import cookie from "js-cookie";
import { authType } from "@/types/authTypes";

import { toastError , toastSuccess } from "@/toastMessages";
import { registerQueryFn} from "@/api/authQueryFn"
const useRegister = () => {


    const {mutate: registerOperation , isLoading: registerLoading  } = useMutation(registerQueryFn,
        {
            onMutate(variables) {
                console.log(variables, "variable")
            },
            onSuccess(data:any) {
              toastSuccess(data.message)
              },
            onError: (error:any) => {
                
                toastError(error.message)
            }
        }
        
        )
    

     return {
        registerOperation,
        registerLoading

     }


}


export default useRegister;