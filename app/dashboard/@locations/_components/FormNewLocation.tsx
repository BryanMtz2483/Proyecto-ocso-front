import { createLocation } from "@/actions/locations/create";
import { API_URL } from "@/constants";
import { Button, Input } from "@heroui/react";
import SelectManager from "./SelectManagers";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";

export default async function FormNewLocation({store}: {store? : string | string[] | undefined}) {
    if (store) return null;
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
    return (
    <form action={createLocation} className=" bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
        <h1 className="text-2xl font-bold text-white text-center"> CREAR TIENDA</h1>
        <Input label="Nombre de tienda" name="locationName" placeholder="Ocso Juriquilla" />
        <Input label="Direccion" name="locationAddress" placeholder="Av. de la luz #23"/>
        <Input label="Latitud" name="locationLat" placeholder="-120"/>
        <Input label="Longitud" name="locationLng" placeholder="14"/>
        <SelectManager managers={dataManagers} locations={dataLocations}/>
        <Button type="submit" color="primary">Crear</Button>
    </form>
    )
}