import { addAnimalQueryFn } from "@/api/addAnimalQueryFn"
import { useMutation, } from "@tanstack/react-query";
import { toastError, toastSuccess } from "@/toastMessages";


const useAddAnimal = () => {
    const { mutate: addAnimalOperation, isLoading: addAnimalLoading, } = useMutation(addAnimalQueryFn,
        {
            onSuccess(data) {
                toastSuccess(data.message)

            },
            onError: (error) => {
                toastError("Hayvan Eklenemedi")
            }

        }

    )

    return {
        addAnimalOperation,
        addAnimalLoading

    }

}
export default useAddAnimal