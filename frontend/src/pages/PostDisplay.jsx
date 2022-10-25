
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Button, Card, Col, Row} from "react-bootstrap";

export function PostDisplay(props){

    const [post,setPost]=useState({})

    //Get the id from the url
    const id=window.location.search.split("=")[1];
    useEffect(()=>{
        console.log(id)
        // axios.get("http://localhost:3001/pet?id="+id).then(res=>{
        axios.get("http://localhost:3001/pet",{
            params:{
                id:id
            }
        }).then(res=>{
            console.log(res)
            setPost(res.data)
        })
    },[])
    const dog="data:image/jpeg;base64,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"
    return(
       <div>

                    <Card style={{ width: '20rem'}} className={"d-flex flex-column mx-2 my-3"} >
               <Card.Body>
                   <Card.Img variant="top" src={dog} />
                   <Card.Title>Name:{post.name}</Card.Title>
                   <Card.Text><div>description:{post.description}</div></Card.Text>
                   <Card.Text>Price: Rs{post.price}/-</Card.Text>
                   <Card.Text>Owner: {post.owner}</Card.Text>
                   <Card.Text>Owner Contact No: {post.tp}</Card.Text>

               </Card.Body>

               <Card.Footer className={'text-center bg-white'}>
                   <Button variant="outline-success" >Contact Seller</Button>
               </Card.Footer>
           </Card>
       </div>
    )
}