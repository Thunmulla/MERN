import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Button, Card, Col, Form, Row} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";


export function Home(){

    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");
    const [search,setSearch]=useState("");
    const navigator=useNavigate();

    const FilterPet=(e)=>{
        setSearch(e);
        axios.get(`http://localhost:3001/`).then(res => {

        if(res.data){
            if(search===""){
                setPost(res.data)
            }else{
                setPost(res.data.filter((p)=>p.name.toLowerCase().includes(search.toLowerCase())))
            }
        }
    })

    }

    const [post,setPost]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/').then(res => {
            if(res.data){
                setPost(res.data)
            }
            setName(res.data[0].name);
            setDescription(res.data[0].description);
            setPrice(res.data[0].price);
        })
    },[])

    function seeDetails(_id) {
        navigator(`/detail?id=${_id}`)
    }

    return(
        <div className={"mt-5"}>
            <div className={"d-flex flex-column justify-content-center align-items-center"}>
                <Form className="mb-3 w-50" controlId="formBasicEmail">
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="text" placeholder="Search" value={search} onChange={(e)=>FilterPet(e.target.value)} />
                </Form>
                <h1 className={"text-body"}>Pick Your Pet</h1>
                <div className='d-flex flex-row'>
                    <Row xs={3} md={3} className="mx-3 g-4 d-flex">
                        {post.map((p,index)=>(
                            <Col key={index} style={{width: '18rem'}}>
                        <Card style={{ width: '15rem'}} className={"d-flex flex-column"}  key={p._id}>
                            <Card.Body>
                                <Card.Title>Name:{p.name}</Card.Title>
                                <Card.Text>description:{p.description}</Card.Text>
                                <Card.Text>Price: Rs{p.price}/-</Card.Text>
                            </Card.Body>
                            <Card.Footer className={'text-center bg-white'}>
                                <Button variant="success" onClick={()=>seeDetails(p._id)}>See Details</Button>
                            </Card.Footer>
                        </Card>
                        </Col>

                        ))}
                    </Row>
                </div>
            </div>
        </div>

    );
}
