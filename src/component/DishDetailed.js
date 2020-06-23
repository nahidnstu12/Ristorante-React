import React from 'react'
import { Card, CardImg,  CardText, CardBody,CardTitle,ListGroup, ListGroupItem,ListGroupItemText } from 'reactstrap';

   
function RenderDish({dish}){  
    return( 
            <Card>
                <h1>{dish.name}</h1>
                <CardImg top width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
    ) 
}
function RenderComment({comments}){
        return comments.map((com)=>{
        return(          
            <ListGroup>
                <ListGroupItem>
                <ListGroupItemText>{com.comment}</ListGroupItemText>
                <ListGroupItemText>-- {com.author},  {com.date}</ListGroupItemText>
                </ListGroupItem>              
            </ListGroup>               
        );
    })  
}
const DishDetail = (props) =>{
    if(props.dish !== null){
        return (  
            <div  className="row">
                <div className="col-12 col-md-5 mt-1">
                    <RenderDish dish={props.dish} />
                </div>
            </div>
            )
    }else{
        return <div></div>
    }
}

export default DishDetail


