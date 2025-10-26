import deleteProvider from "@/actions/providers/delete"
import { Button } from "@heroui/react"
import { LuTrash } from "react-icons/lu"

export default function DeleteProviderButton( {providerId}: {providerId: string}) {
    const deleteProviderById = deleteProvider.bind(null, providerId)
    return (
        <form action={deleteProviderById} className="flex">
            <Button className="w-full" color="danger" type="submit"><LuTrash size={20}/>Estoy Seguro</Button>
        </form>
    )
}