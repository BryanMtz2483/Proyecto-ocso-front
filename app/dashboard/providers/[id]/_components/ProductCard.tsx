
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import { Product } from "@/entities";

export default function ProductCard({product}: {product: Product}){
    return (
        <Card className="w-full min-w-[350px] max-w-[350px]">
            <CardHeader>
                <p className="w-full"><b className="text-4xl">{product.productName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className="w-full">Precio: <b>{product.price}</b></p>
                <p className="w-full">Cantida de sellos: <b>{product.countSeal}</b></p>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>
    )
}