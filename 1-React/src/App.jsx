import { Event } from './components/Event';
import { Form } from './components/Form';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Testando css</h1>
      <Event numero="1"/>
      <Event numero="2"/>

      <Form />
    </div>
  );
}

export default App;
