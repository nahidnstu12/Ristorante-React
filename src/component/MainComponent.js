import React, { Component } from 'react';
import Home from './HomeComponent'
import Menu from './menuComponent'
import About from './AboutComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import DishDetail from './DishDetail'
import {DISHES} from '../shared/dishes'
import {Switch,Route,Redirect} from 'react-router-dom'
// import '../App.css'

class Main extends Component {
  constructor(props)
  { 
    super(props);
    this.state = {
      dishes : DISHES,
    //   selectedDishId : null
    }
  }
//   displayDish(dishId){
//     this.setState({selectedDishId : dishId})
//   }
  
  render(){
    const HomePage = () => {
        return(
            <Home />
        );
      } 

    return (
      <div className="App">
        <Header />
       
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={()=> 
                <Menu dishes={this.state.dishes}/> 
            } />
          <Redirect to='/home'/>
        </Switch>

        {/* <Menu dishes= {this.state.dishes} 
            onClick ={(dishId)=>this.displayDish(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish)=> 
            dish.id===this.state.selectedDishId)[0]}/> */}
        <Footer />
      </div>
    );
  }
 
}

export default Main;
