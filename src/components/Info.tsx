import '../css/info.css'

export default function Info() {
    return (
        <div className="container info">
            <h1>Informações Úteis:</h1>
            <h2>Sempre confirme se o que foi processado está correto, pode acontecer de haver algum caractere ou simbolo diferente no meio do texto que acaba passando por despercebido do código. </h2>

            <div className='lista'>
                <p>Como funciona o script?</p>
                <ul>
                    <li>Remove todos os espaços;</li>
                    <li>Remove todos as quebras de linhas;
                        <ul>
                            <li>Todos os espaços dentro de um colchetes [] vão ser preservados.</li>
                        </ul>
                    </li>
                    <li>Substitui o caractere <span>- (Hífen)</span> por uma quebra de linha.</li>
                </ul>
            </div>
        </div>
    )
}