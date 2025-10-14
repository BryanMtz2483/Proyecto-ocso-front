'use server';
import { authHeaders } from '@/helpers/authHeaders';
import { API_URL } from "@/constants";
import { revalidateTag } from 'next/cache';

export async function createLocation(formData: FormData){
    let location: any = {}
    let locationLatLng = [0,0]
    for (const key of Array.from(formData.keys())) {
        const value = formData.get(key)
        if (value){
            if (key === "locationLat") {
                locationLatLng[0] = +value
            } else if (key === "locationLng") {
                locationLatLng[1] = +value
            } else {
                location[key] = value
            }
        }
    }
    location.locationLatLng = locationLatLng
    const response = await fetch(`${API_URL}/locations`, {
        method: "POST",
        body: JSON.stringify(location),
        headers: {
            ...authHeaders().headers,
        }
    })
    if (response.status !== 201) revalidateTag("dashboard:locations");
}   

