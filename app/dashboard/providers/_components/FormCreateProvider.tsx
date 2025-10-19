import { Button, Input } from "@heroui/react";
import { createProvider } from "@/actions/providers/create";

export default function (){
    return (
        <form action={createProvider} className="bg-orange-400 rounded-md flex flex-col gap-6">
            <h1 className="text-2xl text-center font-bold text-white"> Crear Proveedor</h1>
            <Input label="Nombre" name="providerName" placeholder="Pecsi"/>
            <Input label="Email" name="providerEmail" placeholder="business@pecsi.com"/>
            <Input label="Telefono" name="providerPhoneNumber" placeholder="3334545545"/>
            <Button type="submit" color="primary">Crear</Button>
        </form>
    )
}