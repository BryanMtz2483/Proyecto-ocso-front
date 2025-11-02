'use client'
import Link from "next/link"
import { Product, Provider } from "@/entities"
import ProductCard from "./ProductCard"
import { useEffect, useState } from "react"
import { Input, Select, SelectItem } from "@heroui/react"

export default function FilterCards({products, providers}: {products: Product[], providers: Provider[]}){
    const [filtered, setFiltered] = useState<string>("")
    const [provider, setProvider] = useState<string>("")
    const [productsList, setProductsList] = useState<Product[]>([])
    
    useEffect(() => {
        // Solo mostrar productos si hay algún filtro activo
        if (filtered === "" && provider === "") {
            setProductsList([]);
            return;
        }

        const filteredProducts = products.filter((product) => {
            const matchesName = product.productName
                .toLowerCase()
                .includes(filtered.toLowerCase());

            const matchesProvider =
                provider === "" || product.provider.providerId === provider;

            return matchesName && matchesProvider;
        });
        setProductsList(filteredProducts);
    }, [filtered, provider, products]);
    return (
        <div className="max-h-[90vh] min-h-[90vh] overflow-y-auto flex flex-col gap-8 border-r-orange-400 border-r-2 pt-10 px-10">
            <Select label="Proveedor" onChange={(e) => {
                setProvider(e.target.value);
            }}>
                    {providers.map((provider : Provider) => {
                        return <SelectItem key={provider.providerId}>
                            {provider.providerName}
                        </SelectItem>
                    })}
            </Select>           
            <Input onChange={(e) => 
                setFiltered(e.target.value)}
                label= "Nombre del producto"
                placeholder="Buscar"/>
                {productsList.map((product: Product) => {
                    return(
                        <Link
                        key={product.productId}
                        href={`/dashboard/products/${product.productId}`} 
                        >
                        <ProductCard product={product} />
                        </Link>
                        )
                    })}
        </div>
    )


}
