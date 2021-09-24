import {Link} from "react-router-dom";
import './HeaderApp.css'
import logo from './logo_transparent.png'

const HeaderApp = () => {

    return (
        <div className="nav-container">
            <img src={logo} alt="logo"  className="logo"/>
            <nav className="navLinks">
                <div>
                    <Link to="/" className="links">
                        Inicio
                    </Link>
                    <Link to="/search" className="links">
                        Buscar
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default HeaderApp;
