import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
import DishDetailed from './DishDetailed'
export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
             selectedDish : null
             };
        }
    displayDish(dish){
        this.setState({selectedDish : dish})
    }
    
    
    render() {
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div className="col-12 col-md-5 mt-1">
                    <Card key={dish.id} onClick={()=> this.displayDish(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay body className="ml-5">
                                <CardTitle heading>{dish.name}</CardTitle>
                                {/* <p>{dish.description}</p> */}
                            </CardImgOverlay>
                        
                    </Card>
                </div>
            )
        });
        
        return (
            <div className="container">
               <div className="row">
                   {menu}
               </div> 
               <div className="row mt-2">
                  <div  className="col-12">
                    <DishDetailed dish = {this.state.selectedDish}/>
                  </div>
                </div>
            </div>
        )
    }
}
