import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { UsersStoreListResponseDto } from "@/types/Store"
import { getUserInfo } from "../api/getUserInfo"
import { User } from "@/types/userInfo"

export const useUserInfo = (): UseQueryResult<User, Error> => {
  return useQuery({
    queryKey: ["useInfo"],
    queryFn: getUserInfo,
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 30, // 30분
    retry: 1,
    refetchOnWindowFocus: true,
  })
}