'use server'
import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
export default async function updateProvider(providerId: string, formData: FormData){
    let provider: any = {}
        for (const key of Array.from(formData.keys())) {
            // Filtrar campos internos de Next.js que empiezan con $
            if (!key.startsWith('$')) {
                provider[key] = formData.get(key)
            }
        }
        const response = await fetch(`${API_URL}/providers/${providerId}`, {
            method: "PATCH",
            body: JSON.stringify(provider),
            headers: {
                "content-type" : "application/json",
                ...authHeaders().headers,
            }
        })
        if (response.status === 200){
            revalidateTag("dashboard:providers");
            revalidateTag(`dashboard:providers:${providerId}`);
            redirect(`/dashboard/providers/${providerId}`);
        }
}