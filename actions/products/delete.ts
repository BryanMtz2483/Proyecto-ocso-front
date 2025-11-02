'use server'

import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const deleteProduct = async ( productId: string) => {
    const response = await fetch(`${API_URL}/products/${productId}`, {
        method: "DELETE",
        headers: {
            "content-type" : "application/json",
            ...authHeaders().headers,
        }
    })
    if (response.status === 200){
        revalidateTag("dashboard:products");
        redirect("/dashboard/products")
    }
}