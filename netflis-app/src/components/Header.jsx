import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <Navbar expand="lg" className="bg-dark navbar-dark">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png" style={{ width: '100px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to={'/'} style={{textDecoration: 'none', outline: 'none'}}>
                        <Nav.Link href="#action1"><div>Home</div></Nav.Link>
                        </Link>
                        <Link to={'movies'} style={{textDecoration: 'none', outline: 'none'}}>
                        <Nav.Link href="#action2"><div>Movie</div></Nav.Link>
                        </Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header