import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav,NavbarToggler,Collapse,NavItem,Button,Modal,ModalBody,ModalHeader,Form,FormGroup,Input,Label,Row,Col, ButtonGroup} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { Control, LocalForm, Errors,Field } from 'react-redux-form';

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
          isNavOpen: false,
          isModalOpen:false,
          isModalTblOpen:false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModalTbl = this.toggleModalTbl.bind(this);

    }
    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
    }
    toggleModalTbl() {
        this.setState({
            isModalTblOpen: !this.state.isModalTblOpen
        });
        }
    handleLogin(e){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        e.preventDefault();
    }
    handleReservation(val){
        this.toggleModalTbl();

    }
  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
            
            <NavbarBrand className="mr-auto" href="/"><img src="assets/images/logo.png" height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar className="ml-5">
                <NavItem>
                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                </NavItem>
                </Nav>
                <Nav navbar className="ml-auto">
                    <NavItem>
                        <Button outline onClick={this.toggleModalTbl}><span className="fa fa-utensils fa-lg">Reserve Table</span></Button>
                    </NavItem>
                </Nav>
                <Nav navbar className="mx-3">
                    <NavItem>
                        <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg">Login</span></Button>
                    </NavItem>
                </Nav>
                
            </Collapse>
        </div>
      </Navbar>
      {/* Login Modal */}
      <Modal isOpen={this.state.isModalOpen} 
            toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
        <ModalBody>
            <Form onSubmit={this.handleLogin}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password" innerRef={(input) => this.password = input} required/>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="remember" innerRef={(input)=>this.remember=input} />
                        Remember Me
                    </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>
        </ModalBody>
      </Modal>
       
        {/* Reserve table modal  */}

      <Modal isOpen={this.state.isModalTblOpen} 
            toggle={this.toggleModalTbl}>
        <ModalHeader toggle={this.toggleModalTbl}>Reserve Table</ModalHeader>
        <ModalBody>
            <LocalForm onSubmit={val => this.handleReservation(val)}>
                <Row className="form-group">
                    <Label md={3}>Number of Guests</Label>
                    <Col md={8} className="d-flex align-items-center">
                    <FormGroup check className="form-check-inline">
                    <Label check>
                        <Input type="radio" name="radio1" />1
                    </Label>
                    </FormGroup>
                    <FormGroup check className="form-check-inline">
                    <Label check>
                        <Input type="radio" name="radio1" />2
                    </Label>
                    </FormGroup>
                    <FormGroup check className="form-check-inline">
                    <Label check>
                        <Input type="radio" name="radio1" />3
                    </Label>
                    </FormGroup>
                    <FormGroup check className="form-check-inline">
                    <Label check>
                        <Input type="radio" name="radio1" />4
                    </Label>
                    </FormGroup>
                    <FormGroup check className="form-check-inline">
                    <Label check>
                        <Input type="radio" name="radio1" />5
                    </Label>
                    </FormGroup>
                    <FormGroup check className="form-check-inline">
                    <Label check>
                        <Input type="radio" name="radio1" />6
                    </Label>
                    </FormGroup>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label md={3}>Section</Label>
                    <ButtonGroup className="btn-group btn-group-toggle" md={8}>
                        <Label className="btn btn-success">Non-Smoking
                            <Input type="radio" name="options" checked value="Non-Smoking"></Input>
                        </Label>
                        <Label className="btn btn-danger">Smoking
                            <Input type="radio" name="options" value="Smoking"></Input>
                        </Label>
                    </ButtonGroup>
                </Row>
                <Row className="form-row">
                    <Label md={3}>Date & Time</Label>
                    <Col md={8} className="d-flex">
                        <Input type="date" className="form-control d-inline mr-2" placeholder="Date"></Input>
                        <Input type="time" className="form-control d-inline" placeholder="Time"></Input>
                    </Col>
                </Row>
                <Row >
                    <Col md={3}></Col>
                    <Button color="secondary" className="mx-1 mt-3">Cancel</Button>
                    <Button color="primary" className="mx-1 mt-3">Submit</Button>
                </Row>
                
            </LocalForm>
                
        </ModalBody>
      </Modal>
        
      <Jumbotron style={{background: "#9575CD",  Color:"floralwhite"}}>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1 >Ristorante con Fusion</h1>
                       <p >We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>                     
                   </div>
               </div>
           </div>
       </Jumbotron>

    </React.Fragment>
    );
  }
}

export default Header;