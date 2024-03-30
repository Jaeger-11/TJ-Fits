import { client } from "../../sanity/lib/client";
import { searchparams } from "./interfaces/interface";

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
export const getAllProducts = async (searchparams:searchparams) => {
    const priceOrder = searchparams.price ? `| order(price ${searchparams.price})` : ""
    const dateOrder = searchparams.date ? `| order(createdAt ${searchparams.date})` : ""
    const order = `${priceOrder} ${dateOrder}`
    let query = `*[_type == "products"] ${order}{
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
        *[_type == "products" && "Accessories" in categories[]->category]{
            _id, price, "imageUrl":images[0].asset->url, name, "slug":slug.current
        }
    `)
    return data
}

export const getNewArrivals = async () => {
    const data = await client.fetch(`
        *[_type == "products" && "New Arrivals" in categories[]->category]{
            _id, price, "imageUrl":images[0].asset->url, name, "slug":slug.current
        }
    `)
    return data
}

export const getProduct = async (slug:string) => {
    const data = await client.fetch(`
        *[_type == "products" && slug.current == "${slug}"][0]{
            _id, price, images, name, "slug":slug.current, description, "category": (categories[]->category)[0]
        }
    `);
    return data
}

export const getAllCategories = async () => {
    const data = await client.fetch(`
    *[_type == "category"]{category}
    `)
    return data
}

export const currencyFormat = (price: number | undefined) => {
    return new Intl.NumberFormat('en-US').format(typeof(price) === 'number' ? price : 0)
}