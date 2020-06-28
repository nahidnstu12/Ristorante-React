import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Col, Button, Form, FormGroup, Label, Input, FormText,FormFeedback  } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state ={
            fname: '',
            lname: '',
            email: '',
            telnum: '',
            agree: false,
            contactType : 'tel',
            message : '',
            touched:{
                fname:false,
                lname:false,
                email:false,
                telnum:false,
               
            },
            isSubmit:false,

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);


    }
    handleSubmit(e){
        e.preventDefault();
        alert('Current State is:'+JSON.stringify(this.state))
        // this.setState = ({})
    }
    handleChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }
    handleBlur = (field) =>(e) =>{
        this.setState({
            touched:{...this.state.touched,[field]:true}
        });
    }
    validate(fname,lname,email,telnum){
        const errors ={
            fname: '',
            lname: '',
            email: '',
            telnum: ''
        }
        if(this.state.touched.fname && fname.length <3){
            errors.fname = "First Name should be >= 3 characters";
        }else if(this.state.touched.fname && fname.length >10){
            errors.fname = "First Name should be <= 10 characters";
        }

        if(this.state.touched.lname && lname.length <3){
            errors.lname = "Last Name should be >= 3 characters";
        }else if(this.state.touched.lname && lname.length >10){
            errors.lname = "Last Name should be <= 10 characters";
        }

        // const phoneBD = /^(?:\+88|01)?(?:\d{11}|\d{13})$/;
        const phoneBD = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/
        if(this.state.touched.telnum && !phoneBD.test(telnum)){
            errors.telnum = "Tel Number should contain Bd formate.";
        }
        const emailReg = /\S+@\S+\.\S+/;
        if(this.state.touched.email && !emailReg.test(email)){
            errors.email = "Email should be 'anystring@anystring.anystring' ";
        }
        return errors;
    }

    render(){
        const errors = this.validate(this.state.fname,this.state.lname,this.state.email,this.state.telnum)
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
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                    </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>Send Us Your Feedback</h3>
                    <Form onSubmit={this.handleSubmit}>

                        <FormGroup row>
                            <Label md={2}>First Name</Label>
                            <Col md={8}>
                                <Input type="text" name="fname"  placeholder="First Name" value={this.state.fname} onChange={this.handleChange} valid  invalid={errors.fname !== ''} onBlur={this.handleBlur('fname')} required/>
                                <FormFeedback>{errors.fname}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label  md={2}>Last Name</Label>
                            <Col md={8}>
                                <Input type="text" name="lname"  placeholder="Last Name" value={this.state.lname} onChange={this.handleChange} valid={errors.lname===''} invalid={errors.lname !== ''} onBlur={this.handleBlur('lname')} required/>
                                <FormFeedback>{errors.lname}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={2}>Email</Label>
                            <Col md={8}>
                                <Input type="email" name="email"  placeholder="Your Email" value={this.state.email} onChange={this.handleChange} valid={errors.email===''} invalid={errors.email !== ''} onBlur={this.handleBlur('email')} required/>
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={2}>Tel Number</Label>
                            <Col md={8}>
                                <Input type="tel" name="telnum" placeholder="Your Tel Number" value={this.state.telnum} onChange={this.handleChange} valid={errors.telnum===''} invalid={errors.telnum !== ''} onBlur={this.handleBlur('telnum')} required/>
                                <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{size:4,offset:2}}>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" checked={this.state.agree} name="agree" onChange={this.handleChange}/>{' '}
                                 <strong>May we contact you?</strong>
                                </Label>
                            </FormGroup>
                            </Col>
                            <Col md={{size:3,offset:1}}>
                            <FormGroup>                              
                                <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleChange}>
                                <option>tel</option>
                                <option>email</option>                              
                                </Input>
                            </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2}>Your Feedback</Label>
                            <Col md={8}>
                                <Input type="textarea" rows="6" name="message" placeholder="Your Feedback" value={this.state.message} onChange={this.handleChange} required/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                            </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
    }
}

export default Contact;