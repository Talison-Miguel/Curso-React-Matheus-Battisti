import { Item }  from'./Item'

export function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca={'ferrari'} ano_lancamento={1985}/>
                <Item marca={'fiat'} ano_lancamento={1988}/>
                <Item />
            </ul>
        </>
    )
}