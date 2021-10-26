import React, { useState } from "react";
import reactDom from "react-dom";
import Rate from "./Rate";
import { InputGroup, FormControl } from "react-bootstrap";
export default function Filter ({setsearch , setrate , rate}) {
return( 
<div className="searching"> 
        <InputGroup className="Filtercontainer">
    <InputGroup.Text id="basic-addon1"><i class="fas fa-search"></i></InputGroup.Text>
    <FormControl
      placeholder="Search by Title"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e)=>setsearch(e.target.value)}
    />
  </InputGroup>
  <Rate rate={rate} setrate={setrate}/>
    </div>)
}