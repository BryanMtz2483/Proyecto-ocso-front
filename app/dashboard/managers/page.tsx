import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ManagerCards from "./_components/ManagerCards";

const ManagersPage = async () => {
    const response = await fetch(`${API_URL}/managers`, {
        headers: {
            ...authHeaders().headers
        }
    })
    return null
}

export default ManagersPage;