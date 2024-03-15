import { http } from "@/lib/http";
import { TransformData } from "@/utils/transformData";

export const postDataAPI = async (
  locale: string,
  email: string,
  answers: TransformData[]
) => {
  const response = await http.post(`${locale}/responses`, {
    email,
    answers,
  });

  return response.data;
};
