import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Nav = () => {

    const [ UserName ] = useContext(UserContext)

    return ( 
        <div className="animate__animated animate__fadeIn">
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
        <a href="/Movie-Api" className="navbar-brand">Movie Api Site</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink className="nav-link" to={'/SearchByGenre'}>Genres</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={'/SearchByName'}>Search</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={'/Popular'}>Popular</NavLink>
            </li>
            { typeof(UserName) !== 'object'  ?
            <li className="nav-item">
            <NavLink className="nav-link" to={'/Profile'}>Profile</NavLink>
            </li>
            : ''    
            }
            <li className="nav-item">
            <NavLink className="nav-link" to={'/About'}>About</NavLink>
            </li>
            { UserName === null ?
            <li className="nav-item">
            <NavLink className="nav-link" to={'/Login'}>Login</NavLink>
            </li>
            : 
            ''
            }
            </ul>
        </div>
        </div>
        </nav>
        </div>
     );
}
 
export default Nav;