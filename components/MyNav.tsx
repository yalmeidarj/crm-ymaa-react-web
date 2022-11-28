import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function MyNav() {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">CRM - Ymaa</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Financeiro</Nav.Link>
                  <Nav.Link href="#pricing">Calendário</Nav.Link>
                  <NavDropdown title="Tabelas" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/tables">Clientes</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Serviços
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">
                      Documentos
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="/userLogin">Encerrar  </Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Perfil
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
}