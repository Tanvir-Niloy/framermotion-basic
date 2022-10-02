import React from 'react'
import { Button, Col, Form, FormControl, FormGroup, FormLabel, ListGroup, Row } from 'react-bootstrap'

const Contact = () => {

  const handleSubmit = ()=>{

  }
  return (
    <div className="contact">
      <h1>Contact</h1>
      <Row>
        <Col>
         <div className="contact-form">
            <Form onSubmit={handleSubmit}>
               <FormGroup className='mb-3' controlId='validationCustom01'>
                <FormLabel>
                  Name
                </FormLabel>
                <FormControl required type='text' placeholder='Name'/>
                </FormGroup>      
                <FormGroup className='mb-3' controlId='validationCustom02'>
                <FormLabel>
                  Email
                </FormLabel>
                <FormControl required type='email' placeholder='Email'/>
                </FormGroup>  
                <FormGroup className='mb-3' controlId='validationCustom03'>
                <FormLabel>
                  Message
                </FormLabel>
                <FormControl required as="textarea" type='text' placeholder='Message'/>
                </FormGroup> 
                <Button type="submit">Submit Form</Button> 
            </Form>
         </div>
        </Col>
        <Col>
        <div className="contact-data">
            <p>
              If you want to chat about a project — email me on
              test@gmail.com.
            </p>
            <p>
              I can help designing a website, designing a new product, improving
              an existing part of your product, building a strong design system,
              building websites in Webflow, or designing a custom icon set for
              your business.{" "}
            </p>
            <p>
              <ListGroup horizontal>
                <ListGroup.Item>
                  <a href="https://www.youtube.com">Youtube </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://www.linkedin.com">Linkedin</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://www.instagram.com">
                    Instagram
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://twitter.com">Twitter</a>
                </ListGroup.Item>
              </ListGroup>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Contact