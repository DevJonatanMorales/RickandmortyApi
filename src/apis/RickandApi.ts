import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RickandApi = createApi({
  reducerPath: "rickandApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => '/character'
    }),
    getTodoByName: builder.query({
      query: (name= '') => {      
        if (name !== '') return `/character?name=${name}`;
        return "/character?page=1";
      },
    }),
    getPagina: builder.query({
      query: (pagina = 1) => `/character?page=${pagina}`
    })
  }),
});
export const {useGetAllQuery, useGetTodoByNameQuery, useGetPaginaQuery} = RickandApi;
