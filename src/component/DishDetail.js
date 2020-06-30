import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle,Breadcrumb, BreadcrumbItem,Button,
    Modal,ModalBody,ModalHeader,Label,Row,Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control,LocalForm,Errors} from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

class DishDetail  extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false,           
        }
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values){
        alert('Current State is:'+JSON.stringify(values));
    }

    render(){
        const RenderDish =({dish}) =>{
            if (dish!= null){
                return(
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>  
                );
            } else {
                return(
                    <div></div>
                );
            }
        }
    const RenderComments = ({comments}) =>{
    if(comments != null) {
        
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return(
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        );
                    })}
                </ul>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg">Submit Comment</span></Button>

                <CommentForm />
            </div>           
            );
    } else {
        return(
            <div></div>
        );
    }
    }   
    const CommentForm = () =>{
        return (
            <Modal isOpen={this.state.isModalOpen} 
                toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
               <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
               <Row className="form-group">
               <Label md={2}>Rating</Label>
                    <Col md={8}>
                        <Control.select model=".rating" name="rating"
                        className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Control.select>
                    </Col>
               </Row>
               <Row className="form-group">
                    <Label md={2}>Name</Label>
                    <Col md={8}>
                        <Control.text model=".author" name="author" 
                        className="form-control"  placeholder="Author Name" 
                        validators={{required,minLength:minLength(3),maxLength:maxLength(15)}}
                        />
                        <Errors 
                            className="text-danger" model=".author" show="touched" messages={{
                            required:"Required.",
                            minLength:"Must be greater than 2 characters.",
                            maxLength:"Must be 15 characters or less.",
                            }}/>
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
                        Submit Comment
                        </Button>
                        </Col>
                </Row>
               </LocalForm> 
            </ModalBody>
        </Modal>
        );
    }
    
    if (this.props.dish!= null) {
        return(
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{this.props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={this.props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={Array.from(this.props.commentList)} />
                </div>
            </div>
            </div>
        );
    } else {
        return <div></div>
    }
    
}
}

export default DishDetail;