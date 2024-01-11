import './App.css';
import { OutraLista } from './components/OutraLista';

function App() {
  const meusItens = ['React', 'View', 'Angular']

  return (
    <div className="App">
      <h1>Renderização De Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
