
const Categories = (data:{categories:any[]}) => {
    return (
        data.categories.map((category:{category:string}) => {
            return <button key={category.category} className="rounded-full border-gray-500 text-gray-500 border text-xs styrene400 py-0.5 px-2 transition-all hover:border-black hover:bg-white hover:scale-105 hover:text-black">{category.category}</button>
        })
    )
}

export default Categories