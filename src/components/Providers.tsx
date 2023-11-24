'use client'

import React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: false,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false
		}
	}
})

const Providers = ({ children }: { children: React.ReactNode }) => {
	// const [queryClient] = useState(
	// 	() =>
	// 		new QueryClient({
	// 			defaultOptions: {
	// 				queries: {
	// 					refetchOnMount: false,
	// 					refetchOnReconnect: false,
	// 					refetchOnWindowFocus: false
	// 				}
	// 			}
	// 		})
	// )

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default Providers
