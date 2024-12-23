import { client } from "../../../../../sanity/lib/client";

export async function POST(request: Request) {
    const data = await request.json();
  
    try {
        const updatedProduct = await client
        .patch(data._id) // Document ID
        .dec({ stock: data.quantity }) // Decrement the stock field
        .commit(); // Commit the changes

    return Response.json({ status: 200 ,message: 'Product stock updated successfully', updatedProduct });
    } catch (error) {
    console.error('Error updating product:', error);
    return Response.json({ status:500 ,error: 'Failed to update product stock' });
    }
}