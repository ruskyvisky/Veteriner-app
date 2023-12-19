import { httpService } from "@/config/apiConfig";
import { END_POINTS } from "@/constants/end-points";
import { animalType } from "@/types/animalType";

export const addAnimalQueryFn = async (data: animalType) => {
    try {
        const response = await httpService.post(
        END_POINTS.ANIMAL_OPERATIONS.ANIMAL_ADD,
        data
        );
        return response.data;
    } catch (error:any) { // typesi unknown geliyor
        return error.response.data;
    }
    }