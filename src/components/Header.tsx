import { NavLink } from "react-router-dom";
import MonkeySound from '../components/MonkeySound';

export default function Header() {
    return (
        <header>
            <MonkeySound />

            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className="navItem" >Converter</NavLink>
                    </li>
                    <li>
                        <NavLink to="paises" className="navItem" >Países</NavLink>
                    </li>
                    <li>
                        <NavLink to="Info" className="navItem">Info</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}