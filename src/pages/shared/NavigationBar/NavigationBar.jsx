import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavigationBar = () => {

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <Navbar className="mb-4" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#career">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user &&
                            <Nav.Link href="#deets"><FaUserCircle style={{ fontsize: '2rem' }} /></Nav.Link>
                        }

                        {
                            user ? <Button onClick={handleLogout} variant="dark">Log out</Button>
                                :
                                <Link to='/login'><Button variant="dark">Login</Button></Link>


                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;