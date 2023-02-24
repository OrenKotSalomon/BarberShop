import { NavLink, useNavigate } from 'react-router-dom'

export function AppHeader() {
    const navigate = useNavigate()

    return <section className='app-header'>

        <div className="logo" onClick={() => navigate('/')}>Logo</div>
        <nav className="nav-container">
            <NavLink to='/login'>Log in</NavLink>
            <NavLink to='/barber'>Pricing</NavLink>
        </nav>
    </section>

}