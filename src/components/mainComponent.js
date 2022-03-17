import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dish from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './contactComponent';
import About from './aboutUs';
import { Switch,Route,Redirect,withRouter } from 'react-router-dom';
// import {Reducer} from '.../redux/reducer';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class Main extends Component {
  constructor(props) {
    super(props); 
    console.log(this.props);
  }
  render() {
    const HomePage=()=>{
      return (
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]} />
      )
    }
    const DishWithId = ({match}) => {
      return(
          <Dish dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    return (
      <div>
        <Header />
        {/* <Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
        {/* <Dish dish={this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]} /> */}
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={()=> <Menu dishes={this.props.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path='/aboutUs' component={()=><About leaders={this.props.leaders} />} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to='/home' />
        </Switch>
      <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));