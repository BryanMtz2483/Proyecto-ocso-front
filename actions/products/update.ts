'use server'

import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default async function updateProduct (productId: string, formData: FormData) {
    let product: any = {}
    for (const key of Array.from(formData.keys())) {
        if (!key.startsWith('$')) {
            product[key] = formData.get(key)
        }
    }
    product.price = +product.price
    product.countSeal = +product.countSeal
    console.log('Datos a enviar:', JSON.stringify(product, null, 2))
    
    const response = await fetch(`${API_URL}/products/${productId}`, {
        method: "PATCH",
        body: JSON.stringify(product),
        headers: {
            "content-type" : "application/json",
            ...authHeaders().headers,
        }
    })
    
    if (!response.ok) {
        const errorText = await response.text()
        console.log('Error response:', errorText)
    }
    
    if (response.status === 200){
        revalidateTag("dashboard:products");
        revalidateTag(`/dashboard/products/${productId}`);
        redirect(`/dashboard/products/${productId}`);
    }
}