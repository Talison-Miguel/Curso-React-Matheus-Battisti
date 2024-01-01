import { HelloWord } from './components/HelloWord';
import { SayMyName } from './components/SayMyName';
import { Pessoa } from './components/Pessoa';

import './App.css';

function App() {
  return (
    <div className="App">
      <SayMyName nome="Tálison"/>
      <SayMyName nome="Miguel"/>
      <Pessoa nome="Joao" idade="24" profissao="front-end" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
