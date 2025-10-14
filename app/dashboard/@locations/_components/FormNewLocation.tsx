import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import { cookies } from "next/headers";
import SelectManager from "./SelectManagers";

export default async function FormNewLocation() {
    const token = cookies().get(TOKEN_NAME)?.value;
    const responseManagers = await axios.get(`${API_URL}/managers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const responseLocation = await axios.get(`${API_URL}/locations`, {
        headers : {
            Authorization: `Bearer ${token}`
        }
    })
    return (
    <form action={createLocation}>
        <Input label="Nombre de tienda" name="locationName" placeholder="Ocso Juriquilla" />
        <Input label="Direccion" name="locationAddress" placeholder="Av. de la luz #23"/>
        <Input label="Latitud" name="locationLat" placeholder="-120"/>
        <Input label="Longitud" name="locationLng" placeholder="14"/>
        <SelectManager managers={responseManagers.data} locations={responseLocation.data}/>
        <Button type="submit">Crear</Button>
    </form>
    )
}