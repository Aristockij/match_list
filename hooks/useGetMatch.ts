import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetMatch() {
  return useQuery({
    queryKey: ["match_list"],
    queryFn: () => axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/fronttemp`),
  });
}
