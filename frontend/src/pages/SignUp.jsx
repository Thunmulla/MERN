import React from "react";
import {Form, Button, FloatingLabel, Row, Col} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

export function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");

    const Register = (e) => {
        axios.post("http://localhost:3001/user/register", {
            email: email,
            password: password,
            username: userName
        }).then((res) => {
            console.log(res);
        })
    };

    return (

        <div className="d-flex flex-column px-5 ">
            <h1 className={"my-3"}>Register</h1>
            <Form>
                <FloatingLabel
                    controlId="floatingInputUserName"
                    label="User Name"
                    className="mb-3 "
                >
                    <Form.Control type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="name@example.com" />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInputEmail"
                    label="Email Address"
                    className="mb-3"
                >
                    <Form.Control required type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" value={email} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </FloatingLabel>
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel
                            controlId="floatingInputPassword"
                            label="Password"
                            className="mb-3"
                        >
                            <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel
                            controlId="floatingInputCPassword"
                            label="Confirm Password"
                            className="mb-3"
                        >
                            <Form.Control type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col>
                </Row>


                <div className="mt-4 d-grid gap-2">
                    <Button variant="success" onClick={Register} size="lg">Register</Button>
                </div>
            </Form>
        </div>
    );
}