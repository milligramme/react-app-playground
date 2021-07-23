import { useQuery } from "react-query";

import { api } from "utils/api";

export const useListUsersApi = () =>
  useQuery("/users", async () => {
    try {
      const { data } = await api.get("/users");
      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  });
