import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import BusinessCards from './pages/BusinessCards'
import TravelJournal from './pages/TravelJournal'
import Notes from './pages/Notes'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/BusinessCards" element={<BusinessCards />}></Route>
          <Route path="/TravelJournal" element={<TravelJournal />}></Route>
          <Route path="/Notes" element={<Notes />}></Route>
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <div className='Home'>
          <main>
            <h2>Welcome to the homepage</h2>
          </main>
          <nav className='nav-links'>
            <Link to="/BusinessCards">BusinessCards</Link>
            <Link to="/TravelJournal">TravelJournal</Link>
            <Link to="/Notes">Notes</Link>
          </nav>
    </div>
  )
}

export default App;
