import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label,Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      isNavOpen:false,
      isModalOpen:false
    };
    this.toggleNav=this.toggleNav.bind(this);
    this.toggleModal=this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  toggleNav(){
    this.setState({
      isNavOpen:!this.state.isNavOpen
    });

  }
  render() {
    return(
    <React.Fragment>
      <Navbar dark expand='md'>
        <div className="container">
          <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src='assets/images/logo.png' height="30" width="41" alt="Ristorante Con Fusion" />
              </NavbarBrand>
              </div>
      <Collapse isOpen={this.state.isNavOpen} navbar>
      <Nav navbar>
        <NavItem>
          <NavLink className='nav-link' to='/home'>
            <span className='fa fa-home fa-md'></span>Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='nav-link' to='/aboutUs'>
            <span className='fa fa-info fa-md'></span> About Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='nav-link' to='/menu'>
            <span className='fa fa-list fa-md'></span>Menu
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='nav-link' to='/contactus'>
            <span className='fa fa-address-card fa-md'></span>Contact Us
          </NavLink>
        </NavItem>
        <Nav className="ml-auto" navbar>
          <NavItem className="ml-auto">
              <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
          </NavItem>
        </Nav>
      </Nav>
        
      </Collapse>
      </Navbar> 
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Log In</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
          <Label htmlFor='email' md={3}>Email</Label>
          <Col md={9}>
          <Input type="email" name='email' id='email' placeholder='Enter Email' /></Col>
          </FormGroup>
          <FormGroup row>
          <Label md={3} htmlFor='password'>Password</Label>
          <Col md={9}>
          <Input type='password' name='password' id="password" placeholder='Enter Password' />
          </Col>
          </FormGroup>
          <Col md={{offset:6,size:10}}>
          <Button type="submit">Login</Button>
          </Col>
          </Form>
        </ModalBody>
      </Modal>
      
      {/* <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
               </div>
           </div>
       </Jumbotron> */}
    </React.Fragment>
    );
  }
}

export default Header;