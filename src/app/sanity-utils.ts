import { client } from "../../sanity/lib/client";
import { searchparams } from "./interfaces/interface";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/database/config";
import { orderInfo } from '@/app/interfaces/interface';

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
    const {price, date, category, search} = searchparams
    const priceOrder = price ? `| order(price ${price})` : ""
    const dateOrder = date ? `| order(_createdAt ${date})` : ""
    const categoryFilter = category ? ` && "${category}" in categories[]->category` : ""
    const searchFilter = search ? `&& name match "${search}*"` : ""
    const order = `${priceOrder} ${dateOrder}`
    let query = `*[_type == "products" ${categoryFilter} ${searchFilter} ] ${order}{
        _id,
        price,
        name,
        "slug": slug.current,
        "imageUrl": images[0].asset->url,
        stock
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
            _id, 
            price, 
            "imageUrl":images[0].asset->url, 
            name, 
            "slug":slug.current
        }
    `)
    return data
}

export const getNewArrivals = async () => {
    const data = await client.fetch(`
        *[_type == "products" && "New Arrivals" in categories[]->category]{
            _id, 
            price, 
            "imageUrl":images[0].asset->url, 
            name, 
            "slug":slug.current
        }
    `)
    return data
}

export const getProduct = async (slug:string) => {
    const data = await client.fetch(`
        *[_type == "products" && slug.current == "${slug}"][0]{
            _id, 
            price, 
            images, 
            name, 
            "slug":slug.current, 
            description, 
            "category": (categories[]->category)[0],
            stock
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

export const getDate = (additionalDays:number = 0) => {
    const timestamp = Date.now(); // Current timestamp
    const date = new Date(timestamp); // Convert to Date object

    // Add the additional days
    date.setDate(date.getDate() + additionalDays);

    const day = date.getDate(); 
    const month = date.toLocaleString('default', { month: 'long' }); // Full month name
    const year = date.getFullYear();

    return `${day} ${month} ${year}`; 
};

export const GetOrders = async (uid:string) => {
    const data:orderInfo[] = [];
    try {
      const dataSnapshot = await getDocs(query(collection(db,'orders'), where("uid", '==', uid)));
    dataSnapshot.forEach((doc) => 
      data.push({orderId: doc.id,...doc.data()} as orderInfo)
    );
    } catch (error) {
      console.log(error);
    }
    return data;
}

export const GetOrder = async (orderId:string) => {
    let data:orderInfo = {order:[], orderDate:'', orderId: '', uid: '', shippingInformation:{contact:'', alternative:'', address:'', firstName:'', lastName:'', state:''}};
    try {
        const docSnapshot = await getDoc(doc(db,'orders', orderId));
        if (docSnapshot.exists()) {
            // console.log(docSnapshot.data(), orderId);
            data = { orderId: docSnapshot.id, ...docSnapshot.data() } as orderInfo;
          } else {
            console.log('No such document!');
          }
      } catch (error) {
        console.log(error);
      }
      return {...data};
}