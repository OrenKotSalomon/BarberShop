import { link } from "fs"

interface Packages {
    packages: {
        description: string,
        displayImg: string,
        id: string,
        price: number
    }[]
}

export function ClientPricing({ packages }: Packages) {

    if (!packages) return <h1>loading...</h1>
    return <section className='client-pricing'>
        {packages.map((pack, idx) => <div className="package-container" key={idx}>
            <h1>{pack.description}</h1>
            <div>{pack.displayImg}</div>
            <button>{pack.price}<span>&#8362;</span></button>
        </div>)}

    </section>
}