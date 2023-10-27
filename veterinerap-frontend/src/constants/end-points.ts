import  {API_URL}  from '@/config/apiRoute'
export const END_POINTS ={

    USER_AUTH : {
        USER_LOGIN: API_URL + "/auth/login",
        USER_REGISTER: API_URL + "/auth/register",
    },
    ANIMAL_OPERATIONS : {
        ANIMAL_ADD : API_URL+ "/animals/add",
        ANIMAL_DELETE: API_URL + "/animals/delete",
        ANIMAL_UPDATE: API_URL + "/animals/update",
        ANIMAL_LIST: API_URL + "/animals/list", // not düşüyorum bakılacak buraya.
        ANIMAL_SINGLE : API_URL + "/animals/get",
    },
    TREATMENT_OPERATIONS : {
        TREATMENT_ADD : API_URL + "/treatment/add",
        TREATMENT_DELETE:   API_URL + "/treatment/delete",
    }

}