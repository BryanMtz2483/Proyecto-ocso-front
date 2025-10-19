import { Provider } from "@/entities";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";


export default function ProviderCard({provider}: {provider: Provider}){
    return (
        <Card className="w-full">
            <CardHeader>
                <p className="w-full"><b className="text-4xl">{provider.providerName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className="w-full">Email: <b>{provider.providerEmail}</b></p>
                <p className="w-full">Telefono: <b>{provider.providerPhoneNumber}</b></p>
            </CardBody>
            <CardFooter>
                <div className="w-full">
                    {
                        provider.products ? (
                            <p>Tiene <b>{provider.products.length}</b> productos</p>
                        ) : (
                            <p>No tiene productos</p>
                        )
                    }
                </div>
            </CardFooter>
        </Card>
    )
}