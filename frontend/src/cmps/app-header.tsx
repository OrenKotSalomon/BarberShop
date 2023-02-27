import { NavLink, useNavigate } from 'react-router-dom'
import { clientService } from '../services/client-service'

export function AppHeader() {
    const navigate = useNavigate()

    return <section className='app-header'>

        <div className="logo" onClick={() => navigate('/')}>Logo</div>
        <nav className="nav-container">
            <NavLink to='/client'>Get started</NavLink>
            <NavLink to='/login'>Log in</NavLink>
            {/* <NavLink to='/client'>Pricing</NavLink> */}
        </nav>
    </section>

}