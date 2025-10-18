import { Manager } from "@/entities";
import { API_URL } from "@/constants";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import { authHeaders } from "@/helpers/authHeaders";
import Link from "next/link";

export default async function ManagerCards() {
    const response = await fetch(`${API_URL}/managers?include=location`, {
        method: "GET",
        headers: {
            ...authHeaders().headers
        },
        next: {
            tags: ["dasboard:managers"]
        }
    });  
    
    if (!response.ok) {
        return <p className="text-center text-red-500">Error al cargar empleados</p>;
    }
    
    const data: Manager[] = await response.json();
    
    if (!Array.isArray(data)) {
        return <p className="text-center">No hay empleados disponibles</p>;
    }
    
    return (
    data.map((manager: Manager) => {
        return (
        <Link href={{pathname: `/dashboard/managers/${manager.managerId}`}}>
        <Card className="mx-10 my-10 hover:scale-[110%] hover:bg-blue-100">
            <CardHeader>
                <p className="w-full">Nombre: <b>{manager.managerFullName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
                <p className="w-full">Telefono: <b>{manager.managerPhoneNumber}</b></p>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>
        </Link>
        )
    })
    )
}