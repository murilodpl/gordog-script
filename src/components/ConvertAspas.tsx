import { useState } from 'react'

export default function ConvertAspas() {
    const [data, setData] = useState({
        input: '',
        output: ''
    })
    const [isAddAspas, setIsAddAspas] = useState('adicionar')

    function handleChange(e: any) {
        const { value } = e.target

        if (value != "") {
            let reg: any = (isAddAspas === 'adicionar') ? new RegExp(`(\n)+`, "gm") : new RegExp(`"+`, "g");

            setData({
                input: value,
                output: (isAddAspas === 'adicionar') ? ('"' + value.replace(reg, `"\n"`) + '"') : value.replace(reg, "")
            })
        } else {
            setData({
                input: '',
                output: ''
            })
        }
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
        <div className="container">
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

            <div className="divTextArea">
                <label htmlFor="input">Add ou remover aspas: 🤹‍♀️
                    <textarea name="input" id="input" value={data.input} onChange={handleChange}></textarea>
                </label>

                <span><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" x="0" y="0" viewBox="0 0 334.505 334.505"><g xmlns="http://www.w3.org/2000/svg"><g><path d="M332.406,162.328l-98.98-95.048c-8.067-7.75-21.187-7.748-29.254-0.002c-4,3.838-6.2,8.963-6.2,14.428    c0,5.465,2.2,10.588,6.2,14.427v-0.002l74.061,71.12l-74.066,71.117c-3.994,3.842-6.193,8.97-6.193,14.437    c0,5.463,2.2,10.585,6.2,14.423c4.033,3.872,9.332,5.81,14.626,5.808c5.294,0,10.593-1.937,14.619-5.811l98.987-95.049    c1.34-1.287,2.099-3.065,2.099-4.924C334.505,165.394,333.746,163.615,332.406,162.328z M223.961,257.385    c-2.794,2.695-7.526,2.683-10.334-0.002c-1.287-1.241-2-2.867-2-4.581c0-1.715,0.713-3.345,2-4.588l79.186-76.034    c1.34-1.289,2.099-3.067,2.099-4.925s-0.759-3.637-2.099-4.924l-79.186-76.044v-0.002c-1.287-1.239-2-2.864-2-4.577    c0-1.715,0.713-3.342,2-4.581c1.399-1.347,3.287-2.021,5.173-2.021c1.881,0,3.767,0.672,5.166,2.019l93.862,90.129    L223.961,257.385z" fill="#ffffff" data-original="#000000"></path></g></g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M230.006,162.328l-98.98-95.051c-8.067-7.743-21.187-7.745-29.254,0.002c-4,3.838-6.2,8.963-6.2,14.428    c0,5.465,2.2,10.588,6.2,14.427v-0.002l74.061,71.12l-74.066,71.117c-3.994,3.842-6.193,8.97-6.193,14.437    c0,5.463,2.2,10.585,6.2,14.423c4.033,3.871,9.327,5.806,14.626,5.806c5.301,0,10.593-1.935,14.626-5.81l98.98-95.049    c1.34-1.287,2.099-3.065,2.099-4.924C232.105,165.394,231.346,163.615,230.006,162.328z M121.573,257.381    c-2.799,2.693-7.545,2.691-10.346,0.002c-1.287-1.241-2-2.867-2-4.581c0-1.715,0.713-3.345,2-4.588l79.186-76.034    c1.34-1.289,2.099-3.067,2.099-4.925s-0.759-3.637-2.099-4.924l-79.186-76.044v-0.002c-1.287-1.239-2-2.864-2-4.577    c0-1.715,0.713-3.342,2-4.581c1.399-1.347,3.287-2.021,5.173-2.021c1.888,0,3.773,0.672,5.175,2.017l93.853,90.127    L121.573,257.381z" fill="#ffffff" data-original="#000000"></path>	</g></g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M134.434,162.328l-98.98-95.053c-8.067-7.738-21.2-7.731-29.254,0.003C2.2,71.117,0,76.242,0,81.707    c0,5.465,2.2,10.588,6.199,14.427v-0.002l74.061,71.12L6.194,238.369C2.2,242.211,0,247.339,0,252.806    c0,5.463,2.2,10.585,6.2,14.423c4.026,3.869,9.325,5.804,14.619,5.803c5.301,0,10.6-1.935,14.635-5.806l98.98-95.049    c1.34-1.287,2.099-3.065,2.099-4.924C136.533,165.394,135.774,163.615,134.434,162.328z M25.999,257.378    c-2.852,2.737-7.492,2.737-10.346,0.003c-1.287-1.241-2-2.867-2-4.581c0-1.715,0.713-3.345,2-4.588l79.186-76.034    c1.34-1.289,2.099-3.067,2.099-4.925c0-1.859-0.759-3.637-2.099-4.924L15.654,86.286v-0.002c-1.287-1.239-2-2.864-2-4.577    c0-1.715,0.713-3.342,2-4.581c1.427-1.369,3.299-2.051,5.173-2.051s3.746,0.684,5.173,2.051l93.855,90.126L25.999,257.378z" fill="#ffffff" data-original="#000000"></path></g></g></svg></span>

                <label htmlFor="output">Ta na mão: 🖐
                    <textarea name="output" id="output" disabled value={data.output}></textarea>
                </label>
            </div>

            <div className='btnDiv'>
                <button className='btnCopy' onClick={copyField} aria-label="Botão para mudar de página">Copiar texto</button>
                <button className='btnClear' onClick={clearFields} aria-label="Botão para mudar de página">Limpar campos</button>
            </div>
        </div>
    )
}
