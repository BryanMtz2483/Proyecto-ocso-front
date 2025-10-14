'use server';
import { authHeaders } from '@/helpers/authHeaders';

import { API_URL } from "@/constants";
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
export default async function deleteLocation(formData: FormData ) {
    const locationId = formData.get("deleteValue");
    if (!locationId) return;
    const response = await fetch(`${API_URL}/locations/${locationId}`, {
        method: "DELETE",
        headers: {
           ...authHeaders().headers
        }
    })
        revalidateTag("dashboard:locations");
        redirect(`/dashboard`);
}
