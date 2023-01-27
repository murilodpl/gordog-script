import { useState } from 'react'

export default function ContadorLetras() {
    const [data, setData] = useState({
        input: '',
        output: 0
    })

    function handleChange(e: any) {
        const { value } = e.target

        setData({
            input: value,
            output: value.length
        })
    }

    function clearFields() {
        setData({
            input: '',
            output: 0
        })
    }

    function copyField() {
        navigator.clipboard.writeText(String(data.output));
    }

    return (
        <div className="container">
            <div className="contadorDiv">
                <label className="w-full" htmlFor="output">Total de letras: 🔢
                    <input type="text" name="output" id="output" disabled value={data.output} />
                </label>
            </div>

            <label htmlFor="input">Digite digite: ⌨
                <textarea name="input" id="input" value={data.input} onChange={handleChange}></textarea>
            </label>

            <div className='btnDiv'>
                <button className='btnCopy' onClick={copyField} aria-label="Botão para mudar de página">Copiar texto</button>
                <button className='btnClear' onClick={clearFields} aria-label="Botão para mudar de página">Limpar campos</button>
            </div>
        </div>
    )
}