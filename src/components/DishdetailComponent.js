import React,{Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

class Dish extends Component{
	// constructor(props){
    //     super(props);
    // }
	renderDish(dish) {
        if (dish != null)
            return(
                <Card className="mt-5" id='card'>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comm){
        const comments = comm.map((comment) => {
            return (
            <div key={Comment.id}>
             <span>{comment.id+1}</span><span>) {comment.comment}</span><br></br>
              <span>{comment.author}, {comment.date}</span>
              <br></br>
            </div>
          );
      });
      return comments;
    }
	render(){
        var dish=this.props.dish;
        if(dish!=null){
		return(
            <div className="row">
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
		<div  className="col-12 col-md-5 m-1"> 
		{this.renderDish(dish)}         
                  </div>
          <div className="col-12 col-md-5 m-5 comments">
          <h4>Comments</h4>
          {this.renderComments(this.props.comments)}
          </div> 
          </div>
         );}
         else{
             return (
                 <div></div>
             )
         }
	}
}

export default Dish;