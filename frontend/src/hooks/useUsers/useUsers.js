import { useMutation, useQuery, useQueryClient } from "react-query";
import { userDelApi, userGetApi, userUpdateApi } from "../../api/userApi";

export default function useUsers() {
  return useQuery({
    queryKey: ["Users"],
    queryFn: userGetApi,
  });
}

export function useDelUsers() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userDelApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["Users"]);
    },
    onError: (error) => {
      console.log("Can't delete user", error);
    },
  });
}

export function usePutUsers() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userUpdateApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["Users"]);
    },
    onError: (error) => {
      console.log("Can't delete user", error);
    },
  });
}
