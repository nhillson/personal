import { BrowserRouter, Route, Routes, Link, } from "react-router-dom"

function Homepage() {
  return (
    <div>
      Homepage
    </div>
  );
}

function Languages() {
  return (
    <div>
      Languages
    </div>
  )
}

function NotFoundPage() {
  return (
    <div>
      Page Not Found
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/languages">Languages</Link></li>
        </ul>
      </nav>
    </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
