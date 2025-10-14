import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import { Location } from "@/entities";
import { cookies } from "next/headers";
import { TOKEN_NAME } from "@/constants";
import axios from "axios";
import { API_URL } from "@/constants";
import Link from "next/link";

export default async function LocationCard({store}: {store: string | string[] | undefined}) {
    if (!store) return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const {data} = await axios.get<Location>(`${API_URL}/locations/${store}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return (
        <Card>
            <CardHeader>
                <p className="w-full">Tienda: <b>{data.locationName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className="w-full">Manager: <Link href={`/dashboard/managers/`}><b>{typeof data.manager === 'string' ? data.manager : data.manager?.managerFullName}</b></Link></p>
                <p className="w-full">Direccion: <b>{data.locationAddress}</b></p>
            </CardBody>
            <CardFooter>
                <p className="w-full">Latitud: <b>{data.locationLatLng?.[0] ?? 'N/A'}</b></p>
                <p className="w-full">Longitud: <b>{data.locationLatLng?.[1] ?? 'N/A'}</b></p>
            </CardFooter>
        </Card>
    )
}
