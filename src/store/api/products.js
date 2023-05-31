import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/'
    }),
    refetchOnFocus: true,
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products',
            transformResponse: (response) => {
                return response.products.sort((a, b) => b.rating - a.rating);
            }
        })
    })
})

export const {useGetAllProductsQuery} = productsApi;
