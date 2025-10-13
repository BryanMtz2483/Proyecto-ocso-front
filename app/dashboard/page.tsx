import EmployeesLocation from "./@locations/_components/EmployeesLocation";

export default function DashboardPage({searchParams}: {searchParams: { [key: string]: string | string[] | undefined }}){
    const store = Array.isArray(searchParams?.store) 
        ? searchParams.store[0] 
        : searchParams?.store;
    
    return (
        <>
        <div className="h-full w-4/12">
            <div className="h-[90vh] overflow-hidden overflow-y-auto">
                {store ? (
                    <EmployeesLocation store={store}/>
                ) : (
                    <p className="w-full text-2xl px-2 text-center mt-10">Selecciona una tienda para ver los empleados</p>
                )}
            </div>
        </div>
        </>
    )
}