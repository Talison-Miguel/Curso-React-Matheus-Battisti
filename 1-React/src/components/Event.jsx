
export function Event({ numero }) {
    function meuEvento() {
        console.log(`Fui Ativado ${numero}`)
    } 

    return (
        <div>
            <p>Click para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    );
}