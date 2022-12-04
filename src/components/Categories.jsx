import React from "react";
import "./Categories.css";
import Category from "./Categoriesapi";
import { Container, Card, Form } from "react-bootstrap";

function ncard(val) {
  return (
    <div className="col-12 col-md-6 col-lg-3 ">
     
      <Card className="card">
        <Card.Img variant="top" className=" img-fluid imgsd thumbnail "  src={val.image}  />
        <Card.Body>
          <Card.Text>
            <h3>{val.name}</h3>
            {val.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
const Categories = () => {
  return (
    <Container className="large">
    
            <h3 className="explorenft" > NFTs Collection</h3>

            <div className="row product">{Category.map(ncard)}</div>
        
      
    </Container>
  );
};

export default Categories;