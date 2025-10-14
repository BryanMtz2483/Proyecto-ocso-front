import { API_URL } from "@/constants";
import { Button, Input } from "@heroui/react";
import SelectManager from "./SelectManagers";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";
import { updateLocation } from "@/actions/locations/update";

export default async function FormUpdateLocation({store}: {store : string | string[] | undefined}) {
    if (!store || store=== undefined || typeof store === "object") return null; 
    const updateWithStoreId = updateLocation.bind(null, store);
    const responseManagers = await fetch(`${API_URL}/managers`, {
        headers: {
            ...authHeaders().headers
        },
        next: {
            tags: ["dashboard:managers"]
        }
    })
    const dataManagers: Manager[] = await responseManagers.json();
    const responseLocation = await fetch(`${API_URL}/locations`, {
        headers : {
            ...authHeaders().headers
        },
        next: {
            tags: ["dashboard:locations"]
        }
    })
    const dataLocations: Location[] = await responseLocation.json();
    const foundLocation = dataLocations.find((location) => location.locationId === +store);
    const foundManager = dataManagers.find((manager) => manager.managerId === foundLocation?.manager?.managerId);
    return (
    <form action={updateWithStoreId} className=" bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
        <h1 className="text-2xl font-bold text-white text-center"> CREAR TIENDA</h1>
        <Input required={true} defaultValue={foundLocation?.locationName} label="Nombre de tienda" name="locationName" placeholder="Ocso Juriquilla" />
        <Input required={true} defaultValue={foundLocation?.locationAddress} label="Direccion" name="locationAddress" placeholder="Av. de la luz #23"/>
        <Input required={true} defaultValue={foundLocation?.locationLatLng[0]} label="Latitud" name="locationLat" placeholder="-120"/>
        <Input required = {true} defaultValue={foundLocation?.locationLatLng[1]} label="Longitud" name="locationLng" placeholder="14"/>
        <SelectManager defaultManager={foundLocation?.manager?.managerId?.toString()} managers={dataManagers} locations={dataLocations}/>
        <Button type="submit" color="primary">Actualizar</Button>
    </form>
    )
}