'use client'
import { Provider } from "@/entities";
import { Select, SelectItem } from "@heroui/react";

export default function SelectProvider({providers, defaultProvider}: {providers: Provider[], defaultProvider?: string}){
    return (
        <Select label="Proveedor" name="provider" defaultSelectedKeys={defaultProvider ? [defaultProvider] : undefined}>
                {providers.map((provider : Provider) => {
                    return <SelectItem key={provider.providerId}>
                        {provider.providerName}
                    </SelectItem>
                })}
        </Select>
    )
}