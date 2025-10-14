import { Employee } from "@/entities";
import { API_URL } from "@/constants";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import { authHeaders } from "@/helpers/authHeaders";

export default async function EmployeesLocation({store}: {store: string}) {
    const response = await fetch(`${API_URL}/employees/location/${store}`, {
        method: "GET",
        headers: {
            ...authHeaders().headers
        },
        next: {
            tags: ["dasboard:locations:employees"]
        }
    });  
    
    if (!response.ok) {
        return <p className="text-center text-red-500">Error al cargar empleados</p>;
    }
    
    const data = await response.json();
    
    if (!Array.isArray(data)) {
        return <p className="text-center">No hay empleados disponibles</p>;
    }
    
    return (
    data.map((employee: Employee) => {
        const fullName = employee.employeeName + ' ' + employee.employeeLastName;
        return (
        <Card className="mx-10 my-10">
            <CardHeader>
                <p className="w-full">Nombre: <b>{fullName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className="w-full">Email: <b>{employee.employeeEmail}</b></p>
                <p className="w-full">Telefono: <b>{employee.employeePhoneNumber}</b></p>
            </CardBody>
            <CardFooter>

            </CardFooter>
        </Card>)
    })
    )
}