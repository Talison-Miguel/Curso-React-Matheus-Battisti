import { Button } from "./eventos/Button";

export function Event({ numero }) {
    function meuEvento() {
        console.log(`Ativando primeiro evento ${numero}`)
    } 

    function segundoEvento() {
        console.log('Ativando segundo evento')
    }

    return (
        <div>
            <p>Click para disparar um evento</p>
            <Button text="Primeiro Evento" event={meuEvento}/>
            <Button text="Segundo Evento" event={segundoEvento}/>
        </div>
    );
}