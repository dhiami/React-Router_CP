import React from "react";
import { Router , useParams ,Link} from "react-router-dom";
import ML from "./movies"
import { Card , Button } from "react-bootstrap";
import { movies } from "./movies";
export default function Trailer({movies,match}) {
    const {id}=useParams();
    const mov=movies.find(el=> el.id==id)
    return(
    <div className='moviedetails'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top"/>
        <Card.Body>
    <Card.Title>Title:{mov.title}</Card.Title>
        <Card.Text>
    Description : {mov.Description}
        </Card.Text>
    <Card.Img variant="top" src={mov.img} />
    <Link to={"/"}><Button variant="primary">Home</Button></Link>
        </Card.Body>
</Card>
<iframe   src={mov.video} title='trailer'>   </iframe>
    </div>)
}