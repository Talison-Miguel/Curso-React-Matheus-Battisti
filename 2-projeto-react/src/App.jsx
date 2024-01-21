import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { Home } from './components/pages/Home'
import { Company } from './components/pages/Company'
import { Contatc } from './components/pages/Contatc'
import { NewProject } from './components/pages/NewProject'

import { Container } from './components/layout/Container'

function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contatc'>Contato</Link>
        <Link to='/'>Empresa</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </div>
      <Container customClass="min-height">
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/contatc" element={<Contatc />}/>
            <Route exact path="/company" element={<Company />}/>
            <Route exact path="/newproject" element={<NewProject />}/>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
