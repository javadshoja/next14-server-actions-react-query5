'use client'

import { getProducts } from '@/actions/products'
import { useQuery } from '@tanstack/react-query'

const Products = () => {
	const { data } = useQuery({
		queryKey: ['products'],
		queryFn: () => getProducts()
	})

	return (
		<div>
			<h1>Products</h1>
			<ul>
				{data?.data?.map(item => (
					<li key={crypto.randomUUID()}>
						<h2>{item.title}</h2>
						<p>{item.price}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
export default Products
