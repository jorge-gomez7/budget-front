import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {  
  Button,
  Modal,  
  ModalHeader,
  ModalBody,
  Form, 
  FormGroup, 
  Label, 
  Input
} from "reactstrap";

const Topbar = () => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
    return (
        <>
          <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: '#139cf8'}}>
            <Container>
              <Navbar.Brand href="#home" style={{fontSize: '30px'}}>Budget app</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>                  
                    <Nav >      
                      <NavDropdown title="Actions" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={toggle}>Create Account</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Coin Type</NavDropdown.Item>                        
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>                      
            </Container>    
          </Navbar>
          
            
            
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                    toggle={toggle}>Creating new budget account</ModalHeader>
                <ModalBody>
                <Form inline>
        <FormGroup>
          <Label for="currencyType" hidden>Currency Type</Label>
          <Input type="select" name="select" id="exampleSelect">
          <option value=''>Select Currency</option>
            <option value='1'>Quetzal</option>
            <option value='2'>Dollar</option>
            <option value='3'>Euro</option>            
          </Input>
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="startingAmount" hidden>Starting Amount</Label>
          <Input type="number" name="startingAmount" id="startingAmount" placeholder="100.00" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
                </ModalBody>                
            </Modal>
        
        </>
    );
};

export default Topbar;