import { useState } from 'react'
import '../css/convert.css'

export default function ConvertAspas() {
    const [data, setData] = useState({
        input: '',
        output: ''
    })
    const [isAddAspas, setIsAddAspas] = useState('adicionar')

    function handleChange(e: any) {
        const { value } = e.target
        let reg: any = (isAddAspas === 'adicionar') ? new RegExp(`(\n)+`, "gm") : new RegExp(`"+`, "g");

        setData({
            input: value,
            output: (isAddAspas === 'adicionar') ? ('"' + value.replace(reg, `"\n"`) + '"') : value.replace(reg, "")
        })
    }

    function handleChangeRadio(e: any) {
        const { value } = e.target
        setIsAddAspas(value)
        let reg: any = (value === 'adicionar') ? new RegExp(`(\n)+`, "gm") : new RegExp(`"+`, "g");

        setData(prevData => ({
            ...prevData,
            output: (value === 'adicionar') ? ('"' + prevData.input.replace(reg, `"\n"`) + '"') : prevData.input.replace(reg, "")
        }))
    }

    function clearFields() {
        setData({
            input: '',
            output: ''
        })

        setIsAddAspas('adicionar')
    }

    function copyField() {
        navigator.clipboard.writeText(data.output);
    }

    return (
        <div className="container containerC">
            <div className="aspasDiv">
                <label htmlFor="adicionar">
                    <input type="radio" id="adicionar" name="regAspas" value="adicionar" onChange={handleChangeRadio} checked={isAddAspas === 'adicionar'} />
                    Adicionar aspas
                </label>

                <label htmlFor="remover">
                    <input type="radio" id="remover" name="regAspas" value="remover" onChange={handleChangeRadio} checked={isAddAspas === 'remover'} />
                    Remover aspas
                </label>
            </div>

            <label htmlFor="input">Add ou remover aspas: 🤹‍♀️
                <textarea name="input" id="input" value={data.input} onChange={handleChange}></textarea>
            </label>
            <br />
            <label htmlFor="output">Assuma: 🎩
                <textarea name="output" id="output" disabled value={data.output}></textarea>
            </label>

            <div className='btnDiv'>
                <button className='btnCopy' onClick={copyField} aria-label="Botão para mudar de página">Copiar texto</button>
                <button className='btnClear' onClick={clearFields} aria-label="Botão para mudar de página">Limpar campos</button>
            </div>
        </div>
    )
}