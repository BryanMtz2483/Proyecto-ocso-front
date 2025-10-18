'use server'

import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const deleteManager = async (managerId: string, formData: FormData) => {
    const response = await fetch(`${API_URL}/managers/${managerId}`, {
        method: "DELETE",
        headers: {
            ...authHeaders().headers,
        }
    })
    if (response.status === 200){
        revalidateTag("dashboard:managers");
        redirect(`/dashboard/managers`)
    }
}