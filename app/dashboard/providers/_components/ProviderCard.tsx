import { Provider } from "@/entities";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";


export default function ProviderCard({provider}: {provider: Provider}){
    return (
        <Card className="w-full min-w-[350px]">
            <CardHeader>
                <p className="w-full"><b className="text-4xl">{provider.providerName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className="w-full">Email: <b>{provider.providerEmail}</b></p>
                <p className="w-full">Telefono: <b>{provider.providerPhoneNumber}</b></p>
            </CardBody>
            <CardFooter>
            {provider.products.length !== 0 ? (
                    <p>
                        Tiene <b>{provider.products.length}</b> producto{provider.products.length > 1 ? "s" : ""}</p>
                    ) : (
                        <p>No tiene productos</p>
                    )
                    }
            </CardFooter>
        </Card>
    )
}