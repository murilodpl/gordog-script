import { useState } from 'react'
import '../css/convert.css'

export default function ConvertPaises() {
    const [data, setData] = useState({
        input: '',
        output: ''
    })
    const [country, setCountry] = useState('SP')
    const reg = new RegExp(`^((?!\(${country}\)).)*$`, "gms");

    function handleChange(e: any) {
        const { value} = e.target

        setData({
            input: value,
            output: value.replace(reg, "")
        })
    }

    function handleChangeCountry(e: any) {
        const { value } = e.target
        setCountry(value)

        setData((prevData) => ({
            ...prevData,
            output: prevData.input.replace(reg, "")
        }))
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
                <label htmlFor="country">Escolha um país:</label>
                <input className="w-full" type="text" id="country" onChange={handleChangeCountry} value={country} name="country" />
            </div>

            <label htmlFor="input">Converter países: 🌏
                <textarea name="input" id="input" value={data.input} onChange={handleChange}></textarea>
            </label>
            <br />
            <label htmlFor="output">Receba: 👹
                <textarea name="output" id="output" disabled value={data.output}></textarea>
            </label>

            <div className='btnDiv'>
                <button className='btnCopy' onClick={copyField} aria-label="Botão para mudar de página">Copiar texto</button>
                <button className='btnClear' onClick={clearFields} aria-label="Botão para mudar de página">Limpar campos</button>
            </div>
        </div>
    )
}