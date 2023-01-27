import { useState } from "react";
import ContadorLetras from "../components/ContadorLetras";
import ContadorPalavras from "../components/ContadorPalavras";

export default function Aspas() {
    const [isContadorLetra, setIsContadorLetra] = useState(true);

    return (
        <div>
            <div className="mb-5 btnDiv">
                <button className="btnPurple" onClick={() => setIsContadorLetra(true)}>Contar Letras</button>
                <button className="btnPurple" onClick={() => setIsContadorLetra(false)}>Contar Palavaras</button>
            </div>

            {isContadorLetra ?
                <ContadorLetras />
                :
                <ContadorPalavras />
            }
        </div>
    )
}