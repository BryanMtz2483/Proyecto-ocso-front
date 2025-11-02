
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import { Product } from "@/entities";
import Link from "next/link";
export default function ProductCard({product}: {product: Product}){
    return (
        <Card className="w-full min-w-[350px] max-w-[350px] mb-10">
            <CardHeader>
                <p className="w-full"><b className="text-4xl">{product.productName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className="w-full">Precio: <b>{product.price}</b></p>
                <p className="w-full">Cantidad de sellos: <b>{product.countSeal}</b></p>
                <p className="w-full">Proveedor:
                    <Link href={`/dashboard/providers/${product.provider.providerId}`}
                    className="font-bold underline"
                    > 
                    {product.provider.providerName}
                    </Link>
                </p>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>
    )
}