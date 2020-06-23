import React, { Component } from 'react';
import Menu from './menuComponent'
import About from './AboutComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import DishDetail from './DishDetail'
import {DISHES} from '../shared/dishes'

class Main extends Component {
  constructor(props)
  { 
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDishId : null
    }
  }
  displayDish(dishId){
    this.setState({selectedDishId : dishId})
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Menu dishes= {this.state.dishes} 
            onClick ={(dishId)=>this.displayDish(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish)=> 
            dish.id===this.state.selectedDishId)[0]}/>
        <Footer />
      </div>
    );
  }
 
}

export default Main;
