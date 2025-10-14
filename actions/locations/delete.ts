'use server';
import { authHeaders } from '@/helpers/authHeaders';

import { API_URL } from "@/constants";
export default async function deleteLocation(formData: FormData ) {
    const locationId = formData.get("deleteValue");
    if (!locationId) return;
    fetch(`${API_URL}/locations/${locationId}`, {
        method: "DELETE",
        headers: {
           ...authHeaders().headers
        }
    })
}
