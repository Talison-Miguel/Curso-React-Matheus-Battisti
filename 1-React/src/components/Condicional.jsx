import { useState } from "react";

export function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e) {
        setUserEmail('')
    }

    return (
      <div>
        <h2>Cadastre seu email:</h2>
        <form>
            <input type="email" placeholder="Digite seu email..." onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit" onClick={enviarEmail}>Enviar email</button>
            {userEmail && (
                <div>
                    <p>O email do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )}
        </form>
      </div>
    );
  }