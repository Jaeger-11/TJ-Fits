import { getAllProducts, getAllCategories } from "@/app/sanity-utils";
import ProductsData from "@/components/Products";
import Categories from "@/components/Categories";
import Sort from "@/components/Sort";
import { searchparams } from "@/app/interfaces/interface";

export default async function Products(params: {
    params:{},
    searchParams: searchparams
}){
    console.log(params.searchParams)
    const allProducts = await getAllProducts(params.searchParams);
    const categories = await getAllCategories();
    let products = allProducts;
    let selectedFilters:string[] = [];
    const selectFilter = (filter:string) => {
        if(!selectedFilters.includes(filter)){
            selectedFilters.push(filter)
        } else {
            selectedFilters = selectedFilters.filter((filt:string) => filt !== filter)
        }
        console.log(selectedFilters)
    }

    return (
    <div className="p-4">
        <section className="lg:w-4/5 mx-auto">
            <h1 className="text-center w-full uppercase lg:text-xl styrene400 mb-4 ">Products</h1>
            
            <section className="flex gap-2">
                <aside className="lg:w-1/5">
                    
                    <div className=" border-b-gray-500 border-b mb-4">
                        <label htmlFor="search-product" className="flex items-end p-1 bg-white">
                        <svg className="w-4 block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="rgb(107 114 128)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <input className="outline-0 px-2 flex-1 max-w-[90%] bg-transparent text-xs styrene400 placeholder:text-xs placeholder:styrene400" placeholder="Search Products" type="text" name="search" id="search-product" />
                        </label>
                    </div>

                    <Sort/>
                    
                    <div className="flex gap-2 flex-wrap">
                    <Categories categories={categories} />
                    </div>
                </aside>

                <main className="flex-1">
                    <section className="grid-cols-4 grid gap-4 ">
                        <ProductsData data={products}/>
                    </section>
                </main>
            </section>
        </section>
    </div>
  )
}