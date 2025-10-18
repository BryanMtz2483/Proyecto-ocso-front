import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";

export default async function ManagerPage({params}: {params: {id: string}}) {
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: {
            ...authHeaders().headers
        },
        next: {
            tags: ["dasboard:managers", `dasboard:managers:${params.id}`]
        }   
    })
    const data: Manager = await response.json();
    return (
        <Card className="mx-20 py-2 bg-orange-50">
            <CardHeader>
                <p className="w-full">Nombre: <b>{data.managerFullName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className="w-full">Email: <b>{data.managerEmail}</b></p>
                <p className="w-full">Telefono: <b>{data.managerPhoneNumber}</b></p>
            </CardBody>
            <CardFooter>
                <p className="w-full">Tienda: <b>{data.location?.locationName ?? "No tiene tiendas"}</b></p>
            </CardFooter>
        </Card>
    )
}