import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from './model'

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	endpoints: builder => ({
		getPosts: builder.query<Post[], { limit: number; start: number }>({
			query: ({ limit, start }) => ({
				url: '/posts',
				params: { _limit: limit, _start: start },
			}),
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName
			},
			merge: (currentCacheData, response) => {
				currentCacheData.push(...response)
			},
			forceRefetch: ({ currentArg, previousArg }) => {
				return currentArg !== previousArg
			},
		}),
		getPostById: builder.query<Post, number>({ query: id => `posts/${id}` }),
	}),
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi
