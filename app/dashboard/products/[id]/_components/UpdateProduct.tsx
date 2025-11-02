import updateProduct from "@/actions/products/update";
import { Product, Provider } from "@/entities";
import { Input } from "@heroui/react";
import { LuCheck, LuDollarSign } from "react-icons/lu";
import SelectProvider from "../../_components/SelectProvider";
import { Button } from "@heroui/react";
import DeleteProduct from "./DeleteProduct";
export default function UpdateProduct({product, providers}: {product: Product, providers: Provider[]}){
    const {productId} = product;
    const updateProductById = updateProduct.bind(null, productId);
    return (
        <form action={updateProductById} className="px-10 justify-center pt-5">
            <div className="flex flex-col px-10 rounded-md py-5 gap-6">
            <h1 className="text-4xl font-bold mb-5 text-center">Actualizar producto</h1>
            <Input defaultValue={product.productName} label="Nombre del producto" name="productName" />
            <Input defaultValue={String(product.price)} label="Precio" name="price" endContent={<LuDollarSign size={20}/>}/>
            <Input defaultValue={String(product.countSeal)} label="Cantidad de sellos" name="countSeal" />
            <SelectProvider providers={providers} defaultProvider={product.provider.providerId}/>
            <div className="flex flex-row flex-grow-0">
            <Button type="submit" color="primary"><LuCheck size={20}/></Button>
            </div>
            </div>
        </form>
    )
}