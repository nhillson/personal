import { BrowserRouter, Route, Routes} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavBar() {
  return (
    <Navbar>
      <Navbar.Brand><img alt="Cute Mushroom" src="brand.png" width="40" height="40" /></Navbar.Brand>
      <Nav>
        <Nav.Link href="/">Homepage</Nav.Link>
        <Nav.Link href="/languages">Languages</Nav.Link>
      </Nav>
    </Navbar>
  );
}
function LangItem({ lang }) {
  let language = lang.language;
  let resources = lang.resources.join(", ");
  return (
    <tr>
      <td>
      <div className="table-lang"><b>{language}</b></div>
      <div className="table-resource">Resources:  {resources}</div>
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
    <Container fluid>
      <NavBar />
      <Row>
        <Col></Col>
        <Col xs={8}>
          <h2 className="title">
          Hello, and welcome to my website! This site contains several personal projects as well as a bit of information about myself, and will be updated over time to reflect my continuing education.
          </h2>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

function Languages() {
  return (
    <Container fluid>
      <NavBar />
    
      <LangList />
    </Container>
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
    </BrowserRouter>
  );
}

export default App;
