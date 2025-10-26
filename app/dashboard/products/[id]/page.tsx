export default async function ProductPage({params}: {params: {id: string}}){
    return (
        <div>
            <h1>ProductId: {params.id}</h1>
        </div>
    )
}