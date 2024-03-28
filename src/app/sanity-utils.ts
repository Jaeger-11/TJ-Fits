import { client } from "../../sanity/lib/client"

export const getHeroContent = async () => {
    let query = '*[_type == "herotexts"][0]'
    const data = await client.fetch(query)
    return data
}
export const getHeroImages = async () => {
    let q = '*[_type == "heroimages"]'
    const data = await client.fetch(q)
    return data
}
export const getAllProducts = async () => {
    let query = `*[_type == "products"]{
        _id,
        price,
        name,
        "slug": slug.current,
        "imageUrl": images[0].asset->url
    }`
    const data = await client.fetch(query)
    return data
}

export const getProductsPreview = async () => {
    let query = `*[_type == "products"][0...4]{
        _id,
        price,
        name,
        "slug": slug.current
        "imageUrl": images[0].asset->url
    }`
    const data = await client.fetch(query)
    return data
}

export const getFeatured = async () => {
    let query = `*[_type == "featured"] | order(_createdAt asc){
        _id, 
        name, 
        "imageUrl": image.asset->url
    }`
    const data = await client.fetch(query)
    return data
}

export const getAccessories = async () => {
    const data = await client.fetch(`
        *[_type == "products" && category._ref == "482f30eb-8d77-44f8-b155-046b4d14241f"]{
            _id, price, "imageUrl":images[0].asset->url, name, "slug":slug.current
        }
    `)
    return data
}

export const getProduct = async (slug:string) => {
    const data = await client.fetch(`
        *[_type == "products" && slug.current == "${slug}"][0]{
            _id, price, images, name, "slug":slug.current, description, "category": category->category
        }
    `);
    return data
}