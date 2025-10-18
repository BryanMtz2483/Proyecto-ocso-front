import {API_URL} from "@/constants";
import { Location } from "@/entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "@/helpers/authHeaders";
import FormUpdateLocation from "./_components/FormUpdateLocation";
import UpdateLocation from "./_components/UpdateLocation";
const LocationPage =async ({searchParams}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    let response = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders().headers
        },
        next: {
            tags: ["dashboard:locations"]
        }
    });
    let data: Location[] = await response.json();
        data = [
            {
                locationId: 0,
                locationName: "Ninguna",
                locationAddress: "No existe",
                locationLatLng: [0, 0]
            },
            ...data
        ]
    return (<div className="w-8/12">
        <div className="w-full flex flex-col items-center h-[90vh] bg-red-50">
            <div className="w-1/2 my-10">
                <SelectLocation locations={data} store={searchParams?.store}/>
            </div>
            <div className="w-1/2 my-1">
                <LocationCard store={searchParams.store}/>
            </div>
            <div className="w-6/12 my-1">
                <FormNewLocation store={searchParams.store}/>
            </div>
            <div className="flex flex-row flex-grow-0 gap-10 items-center">
                <DeleteLocationButton store={searchParams.store}/>
                <UpdateLocation store={searchParams.store}>
                    <FormUpdateLocation store={searchParams.store}/>
                </UpdateLocation>
            </div>
        </div>
    </div>
    );
}

export default LocationPage;