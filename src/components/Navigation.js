import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Landing.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faCircleQuestion, faAddressCard, faPodcast } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
    <Navbar expand="md" className="App-header">
      <Container>
        <Navbar.Brand href="/">Archie Bunker VS The 21<sup>st</sup> Century</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link href="/"><FontAwesomeIcon icon={faHouse}/></Nav.Link>
            <Nav.Link href="/contact"><FontAwesomeIcon icon={faEnvelope}/></Nav.Link>
            <NavDropdown title={<FontAwesomeIcon icon={faCircleQuestion} />} id="basic-nav-dropdown">
              <NavDropdown.Item href="/abouthost">Meet Your Hosts</NavDropdown.Item>
              <NavDropdown.Item href="/aboutpod">
                About The Podcast
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Bonus Episodes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;