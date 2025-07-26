import { Navbar, Nav, Container } from 'react-bootstrap'; 
import '../CSS/styles.css';

function PortfolioNavbar({ activeLink }) {
  return (
    <Navbar variant="dark" expand="lg" sticky="top" className="shadow-sm portfolio-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className={activeLink === '#home' ? 'active' : ''}>HOME</Nav.Link>
            <Nav.Link href="#about" className={activeLink === '#about' ? 'active' : ''}>ABOUT</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === '#projects' ? 'active' : ''}>PROJECTS</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === '#contact' ? 'active' : ''}>CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
