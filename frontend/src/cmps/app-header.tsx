import { NavLink } from 'react-router-dom'

export function AppHeader() {
    return (
        <section className='app-header'>
            <div className="logo">Logo</div>
            <nav className="nav-container">
                <NavLink to='/login'>Log in</NavLink>
                <NavLink to='/barber'>Pricing</NavLink>
            </nav>
        </section>
    )
}