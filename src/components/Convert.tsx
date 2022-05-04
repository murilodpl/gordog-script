import { useState } from 'react'
import '../css/convert.css'

export default function Convert() {
    const [data, setData] = useState({
        input: '',
        output: ''
    })

    function handleChange(e: any) {
        const { value } = e.target

        setData({
            input: value,
            output: ((value.replace(/(\r\n|\n|\r)/gm, "")).replace(/[ ](?=[^\]]*?(?:\[|$))/gm, "")).replace(/-/gm, "\n")
        })
    }

    function clearFields() {
        setData({
            input: '',
            output: ''
        }) 
    }

    return (
        <div className="container containerC">
            <label htmlFor="input">Digita as coisa ai: 😎
                <textarea name="input" id="input" value={data.input} onChange={handleChange}></textarea>
            </label>
            <br />
            <label htmlFor="output">Toma: 😈
                <textarea name="output" id="output" disabled value={data.output}></textarea>
            </label>

            <button className='btnClear' onClick={clearFields} aria-label="Botão para mudar de página">Limpar campos</button>
        </div>
    )
}