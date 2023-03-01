
interface pricingProps {
    packages: {
        description: string,
        displayImg: string,
        id: string,
        price: number
    }[]
    onSelectPack: (packId: string) => void
}

export function ClientPricing({ packages, onSelectPack }: pricingProps) {

    if (!packages) return <h1>loading...</h1>
    return <section className='client-pricing'>
        {packages.map((pack, idx) => <div className="package-container" key={idx}>
            <h1>{pack.description}</h1>
            <img src={`https://robohash.org/${idx}?set=set5`} />

            <button onClick={() => onSelectPack(pack.id)}>{pack.price}<span>&#8362;</span></button>
        </div>)}

    </section>
}
