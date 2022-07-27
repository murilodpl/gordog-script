import { useState } from 'react'
import '../css/convert.css'

export default function ConvertEstados() {
    const [data, setData] = useState({
        input: '',
        output: ''
    })
    const [country, setCountry] = useState('SP')
    const reg = new RegExp(`^((?!\(${country}\)).)*$`, "gms");

    function handleChange(e: any) {
        const { value } = e.target

        setData({
            input: value,
            output: value.replace(reg, "").replace(/^(?:[\t ]*(?:\r?\n|\r))+/gms, "")
        })
    }

    function handleChangeCountry(e: any) {
        const { value } = e.target
        setCountry(value)

        setData({
            input: '',
            output: ''
        })
    }

    function clearFields() {
        setData({
            input: '',
            output: ''
        })
        setCountry('SP')
    }

    function copyField() {
        navigator.clipboard.writeText(data.output);
    }

    return (
        <div className="container containerC">
            <div className="countryDiv">
                <label htmlFor="country">Escolha um estado:
                    <input className="w-full" type="text" id="country" onChange={handleChangeCountry} value={country} name="country" />
                </label>
            </div>

            <label htmlFor="input"><div>Converter estados: <a href="https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Brasil" target="_blank" rel="noopenner">🌏</a></div>
                <textarea name="input" id="input" value={data.input} onChange={handleChange}></textarea>
            </label>
            <br />
            <label htmlFor="output">Receba: 🤸‍♂️
                <textarea name="output" id="output" disabled value={data.output}></textarea>
            </label>

            <div className='btnDiv'>
                <button className='btnCopy' onClick={copyField} aria-label="Botão para mudar de página">Copiar texto</button>
                <button className='btnClear' onClick={clearFields} aria-label="Botão para mudar de página">Limpar campos</button>
            </div>
        </div>
    )
}