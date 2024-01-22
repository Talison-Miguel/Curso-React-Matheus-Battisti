import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { Home } from './components/pages/Home'
import { Projects } from './components/pages/Projects'
import { Company } from './components/pages/Company'
import { Contatc } from './components/pages/Contatc'
import { NewProject } from './components/pages/NewProject'

import { Container } from './components/layout/Container'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/projects" element={<Projects />}/>
            <Route exact path="/contatc" element={<Contatc />}/>
            <Route exact path="/company" element={<Company />}/>
            <Route exact path="/newproject" element={<NewProject />}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
