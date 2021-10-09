import { useQuery, UseQueryOptions } from "react-query";

import { api } from "utils/api";

export const useListUsersApi = (
  opt?: UseQueryOptions<unknown, unknown, unknown, "/users">,
) => {
  console.log(opt);
  return useQuery(
    "/users",
    async () => {
      try {
        const { data } = await api.get("/users");
        return data;
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    opt,
  );
};
