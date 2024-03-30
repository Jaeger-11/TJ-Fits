import { defineArrayMember } from "sanity";

export default {
    title: "Products",
    name: "products",
    type: "document",
    fields: [
        {
            title: 'Product Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Product Images',
            type: 'array',
            name: 'images',
            of: [{type: 'image'}]
        },
        {
            name: 'description',
            type: 'text',
            title: 'Product Description'
        },
        {
            title: 'Product Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: "name"
            }
        },
        {
            name: 'price',
            title: 'Product Price',
            type: 'number'
        },
        {
            name: 'categories',
            title: 'Product Category',
            type: "array",
            of: [
                defineArrayMember({
                    name: "category",
                    title: "Product Category",
                    type: "reference",
                    to: [{type: "category"}]
                })
            ]
        }
    ]
}