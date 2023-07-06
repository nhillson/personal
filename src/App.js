import { BrowserRouter, Route, Routes, Link, } from "react-router-dom"

function LangItem({ lang }) {
  let key = Object.keys(lang)[0];
  let value = lang[0];
  return (
    <tr>
      <h4>{ key }</h4>
      <h6>{ value }</h6>
    </tr>
  );
}

function LangList() {
  const langs = [{JS: "I learned in xxx"}];
  const rows = [];
  langs.forEach((lang) => {
    rows.push(<LangItem lang={lang} />)
  })
  return (
    <div>{ rows }</div>
  );
}

function Homepage() {
  return (
    <div>
      <h2 className="title">
        Hello, and welcome to my website! This site contains several personal projects as well as information about myself, and will be update over time to reflect my continuing education.
      </h2>
    </div>
  );
}

function Languages() {
  return (
    <div>
      <LangList />
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
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    <footer>
      <nav>
        <ul>
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/languages">Languages</Link></li>
        </ul>
      </nav>
    </footer>
      
    </BrowserRouter>
    
  );
}

export default App;
