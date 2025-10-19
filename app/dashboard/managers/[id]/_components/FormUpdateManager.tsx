
import { updateManager } from "@/actions/managers/update";
import { Manager, Location } from "@/entities";
import { Button, Input } from "@heroui/react";
import SelectStore from "./SelectStore";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

export default async function FormUpdateManager( {manager}: {manager: Manager}){
    const updateManagerWithId = updateManager.bind(null, manager.managerId)
    const responsestores = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders().headers
        },
    })
    const stores: Location[] = await responsestores.json();
    return (
        <form action={updateManagerWithId} className="bg-orange-400 rounded-md flex flex-col gap-6">
            <h1 className="text-2xl text-center font-bold text-white">Actualizar Manager</h1>
            <Input required={true} defaultValue={manager.managerFullName} label="Nombre" name="managerFullName" placeholder="Marco Aurelio" />
            <Input required={true} defaultValue={manager.managerEmail} label="Email" name="managerEmail" placeholder="marco@gmail.com" />
            <Input required={true} defaultValue={manager.managerPhoneNumber} label="Telefono" name="managerPhoneNumber" placeholder="123456789" />
            <Input required={true} defaultValue={manager.managerSalary.toString()} label="Salario" name="managerSalary" placeholder="123456789" />
            <SelectStore stores={stores} defaultStore={manager?.location?.locationId}/>
            <Button type="submit" color="primary">Actualizar</Button>
        </form>
    )
}