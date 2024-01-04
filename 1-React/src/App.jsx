import { SayMyName } from './components/SayMyName';
import { Pessoa } from './components/Pessoa';
import { List } from './components/List';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Testando css</h1>
      <SayMyName nome="Tálison"/>
      <SayMyName nome="Miguel"/>
      <Pessoa nome="Joao" idade="24" profissao="front-end" foto="https://via.placeholder.com/150"/>
      <List />
    </div>
  );
}

export default App;
