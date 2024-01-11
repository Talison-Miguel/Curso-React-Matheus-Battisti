
export function OutraLista({ itens }) {
    return (
        <>
            <h3>lista de coisas boas</h3>
            {itens.length > 0 ?
                itens.map(item => {
                    return <p key={item}>{item}</p>
                })
                :
                <p>Não há itens na lista</p>
            }
        </>
    )
}