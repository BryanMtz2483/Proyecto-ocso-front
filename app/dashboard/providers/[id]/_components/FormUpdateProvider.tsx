import { Button, Input } from "@heroui/react";
import { Provider } from "@/entities";
import updateProvider from "@/actions/providers/update";

export default function FormUpdateProvider({provider}: {provider: Provider}){
    const {providerId} = provider;
    const updateProviderWithId = updateProvider.bind(null, providerId);
    return (
        <>
        <form action={updateProviderWithId} className="flex flex-wrap gap-4 flex-grow-0 bg-orange-400 rounded-md px-10 ml-20 items-center justify-center">
            <h1 className="text-2xl text-center font-bold text-white"> Actualizar Proveedor</h1>
            <Input className="max-w-[250px]" defaultValue={provider.providerName} label="Nombre" name="providerName" placeholder="Pecsi"/>
            <Input className="max-w-[250px]" defaultValue={provider.providerEmail} label="Email" name="providerEmail" placeholder="business@pecsi.com"/>
            <Input className="max-w-[250px]" defaultValue={provider.providerPhoneNumber} label="Telefono" name="providerPhoneNumber" placeholder="3334545545"/>
            <Button type="submit" color="primary">Actualizar</Button>
        </form>
        </>
    )
}