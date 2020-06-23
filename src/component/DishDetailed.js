import React, { Component } from 'react'
import { Card, CardImg,  CardText, CardBody,CardTitle,ListGroup, ListGroupItem,ListGroupItemText } from 'reactstrap';

export default class DishDetailed extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    renderDish(dish){
        if(dish !== null){
            return (
                <div  className="row">
                <div className="col-12 col-md-5 mt-1">
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div className="col-12 col-md-5 mt-1">
                    {this.renderComment(this.props.dish.comments)}                    
                    {/* {this.renderCommentTest(this.props.dish)} */}
                </div>
                </div>
            )
        }else{
            return <div></div>
        }
    }
    // renderCommentTest(dish){
    //     if(dish !== null){
    //         const comments = this.props.dish.comments.map((com)=>{
    //         return(
    //             <ListGroup>
    //                 <ListGroupItem>{com.comment}</ListGroupItem>                
    //             </ListGroup>
    //         );
    //     })
    //     }else{
    //         return <div></div>
    //     }
    // }
    renderComment(comts){
        // if(comts !== null){
            return comts.map((com)=>{
            return(
           
                <ListGroup>
                    <ListGroupItem>
                    <ListGroupItemText>{com.comment}</ListGroupItemText>
                    <ListGroupItemText>-- {com.author},  {com.date}</ListGroupItemText>
                    </ListGroupItem> 
                    
                    {/* <ListGroupItem>
                    <ListGroupItemText>{dish.comments[1].comment}</ListGroupItemText>
                    <ListGroupItemText>-- {dish.comments[1].author},  {dish.comments[1].date}</ListGroupItemText>
                    </ListGroupItem> 
                    <ListGroupItem>
                    <ListGroupItemText>{dish.comments[2].comment}</ListGroupItemText>
                    <ListGroupItemText>-- {dish.comments[2].author},  {dish.comments[2].date}</ListGroupItemText>
                    </ListGroupItem> 
                    <ListGroupItem>
                    <ListGroupItemText>{dish.comments[3].comment}</ListGroupItemText>
                    <ListGroupItemText>-- {dish.comments[3].author},  {dish.comments[3].date}</ListGroupItemText>
                    </ListGroupItem> 
                    <ListGroupItem>
                    <ListGroupItemText>{dish.comments[4].comment}</ListGroupItemText>
                    <ListGroupItemText>-- {dish.comments[4].author}, {dish.comments[4].date}</ListGroupItemText>
                    </ListGroupItem>    */}
                                
             
                </ListGroup>
      
                
            );
        })
        // }
        // else{
        //     return <div></div>
        // }
        
    }
    render() {
        return (
            
            this.renderDish(this.props.dish)
               
        )
    }
}
