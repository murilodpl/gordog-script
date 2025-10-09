import { NavLink } from "react-router-dom";

export default function Magic() {
    return (
        <div className="container info">
            <h1>MAGIC É LEGAL:</h1>


            <div className='lista'>
                <p>Funções:</p>
                <ul>
                    <li>
                        <NavLink to="/remover-cartas-lista" className="navItem">Remover cartas da lista</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
