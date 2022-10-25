import React,{useState}from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Nav, Navbar} from "react-bootstrap";



export function NavBar() {

    const[click,setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);
    const[btnClass,setBtnClass]=useState(false);


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">SimplyVoting</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/*<Nav.Link href="/service">Service</Nav.Link>*/}
                        <Nav.Link href="/create-post">Sell Pet</Nav.Link>
                    </Nav>
                    <Nav>
                        <Navbar.Brand href="/sign-up"><Button variant={"success"}>Sign Up</Button></Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>



        </div>
    );




}

