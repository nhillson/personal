import { BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import { useState } from 'react';

const langs = [{language:"C", resources:["Harvard's CS50X"]}, {language:"Python 3", resources:["Python Crash Course", "Harvard's CS50X", "Harvard's CS50P", "Code Combat", "The Big Book of Small Python Projects"]}, {language:"HTML/CSS", resources:["Harvard's CS50X", "Harvard's CS50W", "FreeCodeCamp"]}, {language:"JavaScript", resources:["Harvard's CS50W", "Mozilla Developer Network", "Code Combat"]}, {language:"SQL", resources:["Harvard's CS50X"]}, {language:"Django", resources:["Harvard's CS50W"]}, {language:"React", resources:["Harvard's CS50W", "React Documentation"]}];

function NavBar() {
  return (
    <Navbar>
      <Navbar.Brand><img alt="Cute Mushroom" src="brand.png" width="40" height="40" /></Navbar.Brand>
      <Nav>
        <LinkContainer to="/"><Nav.Link>Homepage</Nav.Link></LinkContainer>
        <LinkContainer to="/languages"><Nav.Link>Languages</Nav.Link></LinkContainer>
        <LinkContainer to="/about"><Nav.Link>About Me</Nav.Link></LinkContainer>
      </Nav>
    </Navbar>
  );
}
function LangItem({ lang }) {
  let language = lang.language;
  let resources = lang.resources.join(", ");
  function handleClick() {
    alert('clicked!');
  }
  return (
    <tr>
      <td onClick={handleClick}>
      <div className="table-lang"><b>{language}</b></div>
      <div className="table-resource">Resources:  {resources}</div>
      </td>
    </tr>
  );
}

function LangList() {
  
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
    
      <LangList />
    </Container>
  )
}

function About() {
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <h2>Hi</h2>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
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
    <Container fluid>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;
