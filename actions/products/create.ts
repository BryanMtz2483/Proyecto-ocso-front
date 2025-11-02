'use server'

import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"

export const createProduct = async (formData: FormData) => {
    let product: any = {}
    for (const key of Array.from(formData.keys())) {
        if (!key.startsWith('$')) {
            product[key] = formData.get(key)
        }
    }
    product.price = +product.price
    product.countSeal = +product.countSeal
    console.log(product)
    const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "content-type" : "application/json",
            ...authHeaders().headers,
        }
    })
    console.log(response)
    if (response.status === 201){
        revalidateTag("dashboard:products");
    }
}