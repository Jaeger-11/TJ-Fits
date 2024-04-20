// "use client";

import { feature } from "@/app/interfaces/interface";

const WishlistItem = (data:{item:feature}) => {
    console.log(data)
  return (
    <div>{data.item.name}</div>
  )
}

export default WishlistItem;