import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './menuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishDetail';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';
import {addComment,fetchDishes} from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
};

const mapDispacthToProps = dispach =>({
  addComment:(id,rating,author,comment) => dispach(addComment(id,rating,author,comment)),
  fetchDishes:() => {dispach(fetchDishes())},
  resetFeedbackForm : () => {dispach(actions.reset('feedback'))}
});

  
class Main extends Component {
  constructor(props)
  { 
    super(props);
    
  }
  
  componentDidMount(){
    this.props.fetchDishes();
  }

  render(){
      const DishWithId =({match})=>{
          return(
            <DishDetail dish={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
            dishesLoading={this.props.dishes.isLoading}
            dishesErrMsg = {this.props.dishes.errMsg}
            commentList={this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment}
            />
          );
      }
    const HomePage = () => {
        return(
            <Home 
                dish={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMsg = {this.props.dishes.errMsg}
                promotion={this.props.promotions.filter((promo)=> promo.featured)[0]}
                leader={this.props.leaders.filter((leader)=> leader.featured)[0]}
            />
        );
      } 

    return (
      <div className="App">
        <Header />
       
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={()=> 
                <Menu dishes={this.props.dishes}/> } />
          <Route exact path='/contactus' component={()=>
                <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
          <Route exact path='/aboutus' component={()=> 
                <About leaders={this.props.leaders} /> } />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Redirect to='/home'/>
        </Switch>

        <Footer />
      </div>
    );
  }
 
}

export default withRouter(connect(mapStateToProps,mapDispacthToProps)(Main));
