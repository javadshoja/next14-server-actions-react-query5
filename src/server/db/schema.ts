import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'

export const products = sqliteTable('products', {
	id: text('id'),
	title: text('title'),
	price: integer('price')
})
