export default function Info() {
    return (
        <div className="container info">
            <h1>Informações Úteis:</h1>
            <h2>Sempre confirme se o que foi processado está correto, pode acontecer de haver algum caractere diferente do normal no meio do texto que acaba passando por despercebido pelo código. <span>(Apenas uma olhada por cima basta)</span></h2>

            <div className='lista'>
                <p>Como funciona o script de conversão?</p>
                <ul>
                    <li>Remove todos as quebras de linhas;</li>
                    <li>Remove todos os espaços;
                        <ul>
                            <li>Todos os espaços dentro de um <span>[ ] (Colchetes)</span> vão ser preservados.</li>
                        </ul>
                    </li>
                    <li>Substitui o caractere <span>- (Hífen)</span> por uma quebra de linha.</li>
                </ul>
            </div>

            <div className='lista'>
                <p>Como funciona o script de estados?</p>
                <ul>
                    <li>Remove todos as linhas vazias;</li>
                    <li>Caso você selecione o estado de <span>SP</span>, o script vai manter todas as linhas que possuirem <span>(SP)</span> e remover todo o resto.</li>
                </ul>
            </div>

            <div className='lista'>
                <p>Como funciona o script de aspas?</p>
                <ul>
                    <li>Possui duas opções de funcionamento:
                        <ul>
                            <li><span>Adicionar aspas:</span> adiciona aspas duplas no inicio e no fim de todas as linhas;</li>
                            <li><span>Remover aspas:</span> remove todas as aspas duplas do texto.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
