import { BrowserRouter, Route, Routes, Link, } from "react-router-dom"

function LangItem({ lang }) {
  let language = lang.language;
  let resources = lang.resources.join(", ");
  return (
    <tr>
      <td>
      <div>{language}</div>
      <div>Resources:  {resources}</div>
      </td>
    </tr>
  );
}

function LangList() {
  const langs = [{language:"C", resources:["Harvard's CS50X"]}, {language:"Python 3", resources:["Python Crash Course", "Harvard's CS50X", "Harvard's CS50P", "Code Combat", "The Big Book of Small Python Projects"]}, {language:"HTML/CSS", resources:["Harvard's CS50X", "Harvard's CS50W", "FreeCodeCamp"]}, {language:"JavaScript", resources:["Harvard's CS50W", "Mozilla Developer Network", "Code Combat"]}, {language:"SQL", resources:["Harvard's CS50X"]}, {language:"Django", resources:["Harvard's CS50W"]}, {language:"React", resources:["Harvard's CS50W", "React Documentation"]}];
  const rows = [];
  langs.forEach((lang) => {
    rows.push(<LangItem lang={lang} />)
  })
  return (
    <table className="langtable">
      <thead>
        <th>Languages</th>
      </thead>
      <tbody>{rows}</tbody>
    </table>
    
  );
}

function Homepage() {
  return (
    <div>
      <h2 className="title">
        Hello, and welcome to my website! This site contains several personal projects as well as information about myself, and will be updated over time to reflect my continuing education.
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
