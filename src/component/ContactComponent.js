import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Col, Button, Label,Row  } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control,Form,Errors} from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
const isNumber = val => !isNaN(Number(val));
const isPhoneBD = val => /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/.test(val);
const validEmail = val => /\S+@\S+\.\S+/.test(val);

// emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


class Contact extends Component {
    constructor(props){
        super(props);
       
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values){
        alert('Current State is:'+JSON.stringify(values));
        this.props.resetFeedbackForm();
        this.props.postFeedback(values.fname,values.lname,values.email,values.telnum,values.agree,values.contactType,values.message);
    }

    render(){
        
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="italki_320941"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                    </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>Send Us Your Feedback</h3>
                    <Form onSubmit={(values)=>this.handleSubmit(values)} model="feedback">

                        <Row className="form-group">
                            <Label md={2}>First Name</Label>
                            <Col md={8}>
                                <Control.text model=".fname" name="fname" 
                                className="form-control"  placeholder="First Name" 
                                validators={{required,minLength:minLength(3),maxLength:maxLength(10)}}
                                />
                                <Errors 
                                    className="text-danger" model=".fname" show="touched" messages={{
                                        required:"Required\n",
                                        minLength:"Must be greater than 2 characters\n",
                                        maxLength:"Must be 10 characters or less\n",
                                        }}
                                />
                            </Col>
                        </Row>

                        <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={8}>
                                    <Control.text model=".lname" id="lastname" name="lname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{required,minLength:minLength(3),maxLength:maxLength(10)}}
                                         />
                                    <Errors 
                                    className="text-danger" model=".lname" show="touched" messages={{
                                        required:"Required\n",
                                        minLength:"Must be greater than 2 characters\n",
                                        maxLength:"Must be 10 characters or less\n",
                                        }}
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={8}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                    placeholder="Tel. Number"
                                    className="form-control"
                                    validators={{required,isNumber,isPhoneBD}}
                                    />
                                    <Errors 
                                    className="text-danger" model=".telnum" show="touched" messages={{
                                        required:"Required\n",
                                        isNumber:"Must be numbers\n",
                                        isPhoneBD:"Must be BD phone formate"
                                        }}
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={8}>
                                    <Control.text model=".email" id="email" name="email"
                                    placeholder="Email"
                                    className="form-control" 
                                    validators={{required,validEmail}}
                                        />
                                    <Errors 
                                    className="text-danger" model=".email" show="touched" messages={{
                                        required:"Required\n",
                                        validEmail:"Invalid Email"
                                        }}/>
                                
                                         </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 4, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                                 /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                                </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={8}>
                                    <Control.textarea model=".message" id="message" name="message"
                                    rows="6"
                                    className="form-control"
                                    validators={{required,maxLength:maxLength(200)}} />
                                    <Errors 
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={{
                                            required:"Required",
                                            maxLength:"Must be 200 or less"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                                    </Col>
                            </Row>
                    </Form>
                </div>
            </div>
        </div>
    );
    }
}

export default Contact;