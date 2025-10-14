import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import { Location } from "@/entities";
import { API_URL } from "@/constants";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";

export default async function LocationCard({store}: {store: string | string[] | undefined}) {
    if (!store) return null;
    const response = await fetch(`${API_URL}/locations/${store}`, {
        headers: {
            ...authHeaders().headers
        },
        next: {
            tags: ["dashboard:locations", `dashboard:locations:${store}`]
        }
    });
    const data: Location = await response.json();
    return (
        <Card>
            <CardHeader>
                <p className="w-full">Tienda: <b>{data.locationName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className="w-full">Manager: <Link href={`/dashboard/managers/`}><b>{data.manager?.managerFullName}</b></Link></p>
                <p className="w-full">Direccion: <b>{data.locationAddress}</b></p>
            </CardBody>
            <CardFooter>
                <p className="w-full">Latitud: <b>{data.locationLatLng?.[0] ?? 'N/A'}</b></p>
                <p className="w-full">Longitud: <b>{data.locationLatLng?.[1] ?? 'N/A'}</b></p>
            </CardFooter>
        </Card>
    )
}
