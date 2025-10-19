'use server'

import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const createProvider = async (formData: FormData) => {
    let provider: any = {}
    for (const key of Array.from(formData.keys())) {
        provider[key] = formData.get(key)
    }
    const response = await fetch(`${API_URL}/providers`, {
        method: "POST",
        body: JSON.stringify(provider),
        headers: {
            "content-type" : "application/json",
            ...authHeaders().headers,
        }
    })
    if (response.status === 201){
        revalidateTag("dashboard:providers");
    }
}