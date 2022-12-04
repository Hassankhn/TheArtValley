import React from "react";

import {Form} from "react-bootstrap";
import "./Contact.css";


const Contactus = () => {
  return (
    <>
     <div className="top container"><h6>Home&gt;Contact</h6><hr/></div>
    <div className="container contact">
    
      <Form>
      <h3>Contact</h3>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
          <Form.Control className="alpha" type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
          <Form.Control className="alpha" type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
          <Form.Control
            className="alpha"
            type="number"
            placeholder="Phone Number"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            className="alpha"
            as="textarea"
            rows={6}
            placeholder="Message"
          />
        </Form.Group>
        <Form.Group className="mb-3 dfg " controlId="exampleForm.Button">
          <button className="btn btn-info"> SEND</button>
        </Form.Group>
      </Form>
    </div>
    
    </>
  );
};
export default Contactus