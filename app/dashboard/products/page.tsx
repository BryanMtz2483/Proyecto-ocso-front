import { createProduct } from "@/actions/products/create"
import { Input, Button } from "@heroui/react";
import { LuDollarSign } from "react-icons/lu";
import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import { Provider } from "@/entities"
import SelectProvider from "./_components/SelectProvider"

const ProductsPage = async () => {
    const responseProviders = await fetch(`${API_URL}/providers`, {
        headers: {
            ...authHeaders().headers,
        }
    })
    const providers: Provider[] = await responseProviders.json()
    return (
        <form action={createProduct} className="px-10 justify-center pt-10">
            <div className="flex flex-col px-10 rounded-md py-10 gap-6 bg-orange-400">
            <h1 className="text-4xl font-bold mb-10 text-center text-white">Crear producto</h1>
            <Input label="Nombre del producto" name="productName" />
            <Input label="Precio" name="price" endContent={<LuDollarSign size={20}/>}/>
            <Input label="Cantidad de sellos" name="countSeal" />
            <SelectProvider providers={providers}/>
            <Button type="submit" color="primary">Crear producto</Button>
            </div>
        </form>
    )
}

export default ProductsPage;