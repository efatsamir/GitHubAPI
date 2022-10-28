import axiosInstance from "./axiosInstance";

// export const search = async ({ searchType, searchText, pageNumber }) => {
//   const res = await axiosInstance.get(
//     `/${searchType}?q=${searchText}&page=${pageNumber}`
//   );
//   return res.data;
// };

export const search = async ({ searchType, searchText, pageNumber=1 }) => {
  const res = await axiosInstance.get(
    `/${searchType}?q=${searchText}&page=${pageNumber}`
  );
  return res.data;
};
