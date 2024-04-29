import MonkeySound from '../components/MonkeySound';

import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [mobileMenuShow, setMobileMenuShow] = useState(false)

    function menuBtnClick() {
        setMobileMenuShow(prevBool => !prevBool)
    }

    return (
        <header>
            <nav>
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="flex py-2">
                        <MonkeySound />
                    </div>

                    <div className="flex items-center lg:hidden">
                        <button className="outline-none menu-button" aria-label="Open mobile menu" onClick={menuBtnClick}>
                            <svg className="w-6 h-6 text-gray-500" x-show="! showMenu" fill="none" viewBox="0 00 24 24" stroke="currentColor">
                                <path d="m4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="hidden w-full lg:block lg:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-6 lg:mt-0 lg:text-sm">
                            <li>
                                <NavLink to="/" className="navItem">Converter</NavLink>
                            </li>
                            <li>
                                <NavLink to="conversor-cases" className="navItem">Converter Cases</NavLink>
                            </li>
                            <li>
                                <NavLink to="remover-caracter" className="navItem">Remover Caracter</NavLink>
                            </li>
                            <li>
                                <NavLink to="texto-na-frente" className="navItem">Texto na Frente</NavLink>
                            </li>
                            <li>
                                <NavLink to="Info" className="navItem">Info</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${(!mobileMenuShow) && "hidden"} lg:hidden border border-g_red rounded`}>
                    <ul>
                        <li>
                            <NavLink to="/" className="navItem" onClick={menuBtnClick}>Converter</NavLink>
                        </li>
                        <li>
                            <NavLink to="conversor-cases" className="navItem" onClick={menuBtnClick}>Converter Cases</NavLink>
                        </li>
                        <li>
                            <NavLink to="remover-caracter" className="navItem" onClick={menuBtnClick}>Remover Caracter</NavLink>
                        </li>
                        <li>
                            <NavLink to="texto-na-frente" className="navItem" onClick={menuBtnClick}>Texto na Frente</NavLink>
                        </li>
                        <li>
                            <NavLink to="Info" className="navItem" onClick={menuBtnClick}>Info</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}