import ManagerCards from "./_components/ManagerCards";

export default function LayoutManagers({children}: {children: React.ReactNode}) {
    return (
        <>
        <div className="w-4/12 h-[90vh] max-h-[90vh] overflow-hidden overflow-y-auto">
            <ManagerCards/>
        </div>
        <div>
            {children}
        </div>
        </>
    )
}