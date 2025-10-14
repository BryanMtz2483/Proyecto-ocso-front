"use server"
import { cookies } from "next/headers";
import { API_URL, TOKEN_NAME } from "@/constants";
import axios from "axios";
export default async function deleteLocation(formData: FormData ) {
    const locationId = formData.get("deleteValue");
    if (!locationId) return;
    const token = cookies().get(TOKEN_NAME)?.value;
    if (!token) return null;
    axios.delete(`${API_URL}/locations/${locationId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}