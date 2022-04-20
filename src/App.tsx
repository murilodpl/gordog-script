import { useState } from 'react'
import './css/App.css'

export default function App() {
  const [data, setData] = useState({
    input: '',
    output: ''
  })

  console.log(data)

  function handleChange(e: any) {
    const { value } = e.target

    setData({
      input: value,
      output: (value.replace(/(\r\n|\n|\r|\s)/gm, "")).replace(/-/gm, "\n")
    })
  }

  return (
    <div className="App">
      <div className="container">
        <label htmlFor="input">Digita as coisa ai: 😎
          <textarea name="input" id="input" value={data.input} onChange={handleChange}></textarea>
        </label>
        <br />
        <label htmlFor="output">Toma: 😈
          <textarea name="output" id="output" disabled value={data.output}></textarea>
        </label>
      </div>
    </div>
  )
}