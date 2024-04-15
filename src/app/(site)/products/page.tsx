import { getAllProducts, getAllCategories } from "@/app/sanity-utils";
import ProductsData from "@/components/Products";
import Categories from "@/components/Categories";
import Sort from "@/components/Sort";
import { searchparams } from "@/app/interfaces/interface";
import SearchFilter from "@/components/SearchFilter";

export default async function Products(params: {
    params:{},
    searchParams: searchparams
}){
    const products = await getAllProducts(params.searchParams);
    const categories = await getAllCategories();

    return (
    <div className="p-4">
        <section className="lg:w-4/5 mx-auto">
            <h1 className="text-center w-full uppercase lg:text-xl styrene400 mb-4 ">Products</h1>
            
            <section className="flex flex-col lg:flex-row gap-8 lg:gap-2">
                <aside className="w-full lg:w-1/5">
                    <SearchFilter/>
                    <Sort/>
                    <div className="flex gap-2 flex-wrap">
                        <Categories categories={categories} />
                    </div>
                </aside>

                <main className="flex-1">
                    <section className="md:grid-cols-3 lg:grid-cols-4 grid grid-cols-2 gap-4 ">
                        <ProductsData data={products}/>
                    </section>
                </main>
            </section>
        </section>
    </div>
  )
}