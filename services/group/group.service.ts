import axios from "axios";

import { GroupByData } from "../../types/groups/group-by-data";
import { GroupNames } from "../../types/groups/group-names";
const BASE_URL = "https://run.mocky.io/v3";

export const getGroupNames = () => {
  return {
    api() {
      return axios
        .get<GroupNames>(`${BASE_URL}/9e343425-c47c-4c7f-a1ac-972c099be0ed`)
        .then(({ data }) => data);
    },
    getKey() {
      return ["getGroupNames"];
    },
  };
};
export const getGroupByData = (id?: string) => {
  if (id == null) {
    id = "a9f6a4b7-d03c-4a45-b64b-791e054f36b8";
  }
  return {
    api() {
      return axios
        .get<GroupByData>(`${BASE_URL}/${id}`)
        .then(({ data }) => data);
    },
    getKey() {
      return ["getGroupByData", id];
    },
  };
};
