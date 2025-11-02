import { authHeaders } from "@/helpers/authHeaders"
import { API_URL } from "@/constants"
import { Product, Provider } from "@/entities"
import ProductCard from "../_components/ProductCard"
import UpdateProduct from "./_components/UpdateProduct"
import DeleteProduct from "./_components/DeleteProduct"

export default async function ProductPage({params}: {params: {id: string}}){
    const responseProduct = await fetch(`${API_URL}/products/${params.id}`, {
        headers: {
            ...authHeaders().headers,
        }, next: {
            tags: [`dashboard:products:${params.id}`],
        }
    })
    const product: Product = await responseProduct.json()
    const responseProvider = await fetch(`${API_URL}/providers/`, {
        headers: {
            ...authHeaders().headers,
        }
    })
    const provider: Provider[] = await responseProvider.json()
    return (
        <div className="w-full">
            <div className="bg-orange-600">
                <h1 className="w-full font-bold text-white text-center text-2xl py-2">Nombre del producto: {product.productName}</h1>
                <h1 className="w-full font-bold text-white text-center text-2xl py-2">Precio: {product.price}</h1>
                <h1 className="w-full font-bold text-white text-center text-2xl py-2">Cantidad de sellos: {product.countSeal}</h1>
                <h1 className="w-full font-bold text-white text-center text-2xl py-2">Proveedor: {product.provider.providerName}</h1>
            </div>
        <UpdateProduct product={product} providers={provider}/>
        <div className="pl-20">
        <DeleteProduct productId={product.productId}/>
        </div>
        </div>
    )
}