import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Index'
import About from './components/About/Index'
import Contact from './components/Contact/Index'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio/Index'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
