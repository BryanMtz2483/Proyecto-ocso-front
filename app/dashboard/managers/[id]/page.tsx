import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ManagerCard from "./_components/ManagerCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";

export default async function ManagerPage({params}: {params: {id: string}}) {
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: {
            ...authHeaders().headers
        },
        next: {
            tags: ["dasboard:managers", `dasboard:managers:${params.id}`]
        }   
    })
    const data: Manager = await response.json();
    return (
        <div className="flex flex-col flex-grow-0 items-center gap-10 justify-center">
            <ManagerCard manager={data}/>
            <div className="bg-gray-50 rounded-md px-10 py-2">
                <DeleteManagerButton managerId={data.managerId}/>
            </div>
        </div>
    )
}