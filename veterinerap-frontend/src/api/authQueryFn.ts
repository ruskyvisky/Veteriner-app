import { httpService } from "@/config/apiConfig";
import { END_POINTS } from "@/constants/end-points";
import { authType } from "@/types/authTypes";

// ======================= Login  =======================

export const loginQueryFn = async (data: authType) => {
  try {
    const response = await httpService.post(
      END_POINTS.USER_AUTH.USER_LOGIN, 
      data
      );
    return response.data;
  } catch (error:any) { // typesi unknown geliyor
    return error.response.data;
  }
};
// ======================= Register  =======================
export const registerQueryFn = async (data: authType) => {
  try {
    const response = await httpService.post(
      END_POINTS.USER_AUTH.USER_REGISTER, 
      data
      );
    return response?.data;
  } catch (error:any) { // typesi unknown geliyor
    return error?.response.data;
  }
};
