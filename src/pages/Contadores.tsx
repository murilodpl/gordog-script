import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContadorLetras from "../components/ContadorLetras";
import ContadorPalavras from "../components/ContadorPalavras";

export default function Aspas() {
    const [isContadorLetra, setIsContadorLetra] = useState(true);

    useEffect(() => {
        toast.info('*Se quiser analisar o mesmo texto, copie ele antes de trocar entre letras/palavras e cole-o novamente!', {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }, [])

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

            <ToastContainer className={'text-sm'} />
        </div>
    )
}