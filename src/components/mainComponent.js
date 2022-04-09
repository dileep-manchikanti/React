import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dish from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './contactComponent';
import About from './aboutUs';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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

  render() {
    // var data=fetch("https://d3c33hcgiwev3.cloudfront.net/mNhQRT-6EeieJwrYiMRpMg_99c854b03fba11e8bac2b7a30cba3e24_db.json?Expires=1649376000&Signature=gwtiPMN~RrdbDUJJlL-GS~Jj-o3jXZ05nAvI4OJ5pIg3QuC2pzMx47AwyM90T6D3fGDI2EOpc0DW~xiXY9MmcU1NjXf01mJJEX5pLeMiT0KfrPBgfLm6OpmlijQl-x6YzFWSSby0645cqldE8ICcGfxHaXyCAUdpKXRGHJ08mXQ_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A")
    // .then(response=>response.json());

    // console.log(data);
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
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={()=> <Menu dishes={this.props.dishes} />} />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route path='/aboutUs' component={()=><About leaders={this.props.leaders} />} />
            <Route exact path='/contactus' component={Contact} />
            <Redirect to='/home' />
          </Switch>
          </CSSTransition>
          </TransitionGroup>
      <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));