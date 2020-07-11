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
import {fetchDishes} from '../redux/ActionsCreators/DishesActions';
import {fetchPromos} from '../redux/ActionsCreators/PromoActions';
import {fetchLeaders} from '../redux/ActionsCreators/LeadersActions';
import {fetchComment,postComment} from '../redux/ActionsCreators/CommentsActions';
import {postFeedback} from '../redux/ActionsCreators/FeedbackActions';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
};

const mapDispacthToProps = dispach =>({
  fetchDishes:() => dispach(fetchDishes()),
  resetFeedbackForm : () => {dispach(actions.reset('feedback'))},
  fetchComment:() => dispach(fetchComment()),
  fetchPromos: () => dispach(fetchPromos()),
  fetchLeaders: () => dispach(fetchLeaders()),
  postComment: (id,rating,author,comment) => dispach(postComment(id,rating,author,comment)),
  postFeedback: (firstname,lastname,email,tel,agree,contactType,message)=>
    dispach(postFeedback(firstname,lastname,email,tel,agree,contactType,message))
});

  
class Main extends Component {
  
  componentDidMount(){
    this.props.fetchComment();
    this.props.fetchPromos();
    this.props.fetchDishes();
    this.props.fetchLeaders();
  }

  render(){
      const DishWithId =({match})=>{
          return(
            <DishDetail dish={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
            dishesLoading={this.props.dishes.isLoading}
            dishesErrMsg = {this.props.dishes.errMsg}
            commentList={this.props.comments.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
            postComment={this.props.postComment}
            commentErrMsg = {this.props.comments.errMsg}
            />
          );
      }
    const HomePage = () => {
        return(
            <Home 
                dish={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMsg = {this.props.dishes.errMsg}
                promotion={this.props.promotions.promotions.filter((promo)=> promo.featured)[0]}
                promoLoading={this.props.promotions.isLoading}
                promoErrMsg={this.props.promotions.errMsg}
                leader={this.props.leaders.leaders.filter((leader)=> leader.featured)[0]}
                leaderLoading ={this.props.leaders.isLoading}
                leaderErrMsg = {this.props.leaders.errMsg}
            />
        );
      } 

    return (
      <div className="App">
      <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch location={this.props.location}>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={()=> 
                    <Menu dishes={this.props.dishes}/> } />
              <Route exact path='/contactus' component={()=>
                    <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />
              <Route exact path='/aboutus' component={()=> 
                    <About leaders={this.props.leaders} /> } />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Redirect to='/home'/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>

        <Footer />
      </div>
    );
  }
 
}

export default withRouter(connect(mapStateToProps,mapDispacthToProps)(Main));
