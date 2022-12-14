import React,{useState}from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {IsAdmin, IsLoggedIn, IsSeller} from "../../Script/Auth.jsx";
import axios from "axios";
import Swal from "sweetalert2";



export function NavBar() {

    const[click,setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);
    const[btnClass,setBtnClass]=useState(false);

    const navigate=useNavigate();

    function LogOut() {
        sessionStorage.removeItem("user");
        axios.get('http://localhost:3001/user/logout').then(res => {
            if (res) {
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully Logged Out!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/login")
                        window.location.reload();
                    }else if(result.isDismissed){
                        navigate("/login")
                        window.location.reload();
                    }
                })

            }
        })
    }

    function EditProfile() {
        navigate("/edit-account")
    }

    function DeleteProfile() {
        const user = JSON.parse(sessionStorage.getItem("user"));
        axios.post('http://localhost:3001/user/delete-user', {
            id: user.id
        }).then(res => {
            if (res) {
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully Deleted Your Account!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                        LogOut();
                    } else if (result.isDismissed) {
                        LogOut();
                    }
                })
            }
        })
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Pet A</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link disabled={!IsAdmin()} href="/admin">Admin</Nav.Link>
                        <Nav.Link disabled={!IsSeller()} href="/create-post">Sell Pet</Nav.Link>
                        <Nav.Link disabled={!IsSeller()} href="/seller">Your Post</Nav.Link>
                    </Nav>
                    <Nav>
                        <Navbar.Brand hidden={IsLoggedIn()} href="/login"><Button variant={"primary"}>LogIn</Button></Navbar.Brand>
                        <Navbar.Brand hidden={IsLoggedIn()} href="/sign-up"><Button variant={"success"}>Sign Up</Button></Navbar.Brand>
                        <Navbar.Brand hidden={!IsLoggedIn()} onClick={LogOut}><Button variant={"outline-success"}>Log Out</Button></Navbar.Brand>
                        <Navbar.Brand hidden={!IsLoggedIn()} onClick={EditProfile}><Button variant={"outline-primary"}>Edit Profile</Button></Navbar.Brand>
                        <Navbar.Brand hidden={!IsLoggedIn()} onClick={DeleteProfile}><Button variant={"outline-danger"}>Delete Profile</Button></Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>



        </div>
    );




}

