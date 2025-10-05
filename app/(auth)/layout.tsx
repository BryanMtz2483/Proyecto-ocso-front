import Image from "next/image";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <div className="bg-orange-200 w-screen h-screen overflow-hidden grid">
        <div className="place-content-center place-self-center text-center">
        <div className="flex flex-col items-center my-4 bottom-10 relative">
        <Image
        src="/Oxxo_Logo.svg" 
        alt="Logo de ocso" 
        width={250} 
        height={100} />
        </div>
        {children} 
        </div>
    </div>;
}