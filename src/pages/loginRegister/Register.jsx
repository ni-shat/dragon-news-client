import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    useTitle('register');

    const [accepted, setAccepted] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target; console.log(form)
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handleCheckbox = (event) => {
        setAccepted(event.target.checked);
    }

    return (
        <Container>
            <h3 className="mx-auto">Please Register</h3>
            <Form onSubmit={handleRegister} className="w-50 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" name="conpassword" placeholder="password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                    onClick={handleCheckbox} 
                    type="checkbox" 
                    name="accept" 
                    label={<>Accept <Link to='/terms'>terms and conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Submit
                </Button>
                <Form.Group>
                    <Form.Text className="text-secondary">
                        Already have an account? <Link to='/login'>Login</Link>
                    </Form.Text>
                </Form.Group>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;