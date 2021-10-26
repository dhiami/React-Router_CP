import React from "react";
import { Card} from "react-bootstrap"
import { Link } from "react-router-dom";
import { movies } from "./movies";
import Rate from "./Rate";
export default function MovieCard ({ movie , el}) {
    return(
      
        <div className="moviescards">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.img} />
  <Card.Body>
  <Link to= {`/Trailer/${movie.id}`}> <Card.Title>{movie.title}</Card.Title></Link>
    <Card.Text>
      {movie.Description}
    </Card.Text>
    <Rate rate={movie.rate}/>
  </Card.Body>
</Card>

        </div>
        
    );
}