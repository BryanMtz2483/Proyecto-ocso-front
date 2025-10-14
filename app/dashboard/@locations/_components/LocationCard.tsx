import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import { Location } from "@/entities";
import axios from "axios";
import { API_URL } from "@/constants";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";

export default async function LocationCard({store}: {store: string | string[] | undefined}) {
    if (!store) return null;
    const {data} = await axios.get<Location>(`${API_URL}/locations/${store}`, authHeaders());
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
                <p className="w-full">Latitud: <b>{data.locationLatLng[0]}</b></p>
                <p className="w-full">Longitud: <b>{data.locationLatLng[1]}</b></p>
            </CardFooter>
        </Card>
    )
}
