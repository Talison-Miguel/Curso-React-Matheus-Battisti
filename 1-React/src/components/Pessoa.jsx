import {Frase} from './Frase/Frase'

export function Pessoa({foto, nome, idade, profissao}) {
    return (
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p className='fraseContainer'>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            <Frase />
        </div>
    )
}
