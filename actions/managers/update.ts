'use server'

import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const updateManager = async (managerId: string, formData: FormData) => {
    let manager: any = {}
    for (const key of Array.from(formData.keys())) {
        manager[key] = formData.get(key)
    }
    const response = await fetch(`${API_URL}/managers/${managerId}`, {
        method: "PATCH",
        body: JSON.stringify(manager),
        headers: {
            "content-type" : "application/json",
            ...authHeaders().headers,
        }
    })
    if (response.status === 200){
        revalidateTag("dashboard:managers");
        redirect(`/dashboard/managers/${manager.managerId}`);
    }
}