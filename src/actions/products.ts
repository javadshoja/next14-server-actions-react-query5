'use server'

import db from '@/server/db'
import { products } from '@/server/db/schema'

export async function getProducts() {
	try {
		const data = db.select().from(products).all()

		return { data }
	} catch (error) {
		return { error }
	}
}
