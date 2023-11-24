import { getProducts } from '@/actions/products'
import Products from '@/components/Products'

import {
	HydrationBoundary,
	dehydrate,
	QueryClient
} from '@tanstack/react-query'

export default async function Home() {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['products'],
		queryFn: () => getProducts()
	})

	return (
		<div>
			<h1>Next React query</h1>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<Products />
			</HydrationBoundary>
		</div>
	)
}
