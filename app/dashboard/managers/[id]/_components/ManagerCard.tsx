import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import { Manager } from "@/entities";
import Link from "next/link";
export default function ManagerCard({manager}: {manager: Manager}){
    return (
        <Card className="mx-20 py-2 text-center">
            <CardHeader>
                <p className="w-full"><b className="text-4xl">{manager.managerFullName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody className="flex flex-row flex-grow-0 items-center gap-10 justify-center">
                <div className="flex flex-col items-center">
                <p className="w-full my-2">Email: <b>{manager.managerEmail}</b></p>
                <p className="w-full">Telefono: <b>{manager.managerPhoneNumber}</b></p>
                </div>
            </CardBody>
            <CardFooter>
                <p className="w-full">
                    <Link href={{
                        pathname: `/dashboard`,
                        query: {
                            store: manager.location?.locationId
                        }
                        }}
                        >Tienda: <b>{manager.location?.locationName ?? "No tiene tiendas"}</b></Link>
                </p>
            </CardFooter>
        </Card>
    )
}