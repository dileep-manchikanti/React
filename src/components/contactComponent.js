import React,{Component} from 'react';
import {Form,Button,Label,Input,FormGroup,Col,FormFeedback} from 'reactstrap';
class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            telnum:"",
            email:"",
            agree:false,
            contactType:'tel.',
            message:"",
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
    }
    handleInputChange(event){
        const target=event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });
    }
    handleSubmit(event){
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    validate(firstname,lastname,telnum,email){
        const errors={
            firstname:"",
            lastname:"",
            telnum:"",
            email:""
        };
        if(this.state.touched.firstname && firstname.length<3)errors.firstname="First name must be  atleast 3 characters";
        else if(this.state.touched.firstname && firstname.length>10)errors.firstname="First name cant exceed more than of 10 characters";
        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be atleast 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name cant exceed more than of 10 characters';
        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';
        return errors;
    }
    render(){
        const errors=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className='row row-content'>
                <div className='col-12'>
                    <h3>
                        Send Us Your FeedBack!
                    </h3>
                    <div className='col-12 col-md-9'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label md={3} htmlFor='firstname'>First Name</Label>
                                <Col md={9}>
                                <Input type='text' name="firstname" id='firstname' placeholder='Enter Your FirstName' value={this.state.firstname} onChange={this.handleInputChange} onBlur={this.handleBlur('firstname')} valid={errors.firstname===""}
                                invalid={errors.firstname!==""}/>
                                <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={3} htmlFor="lastname">Last Name</Label>
                                <Col md={9}>
                                <Input type='text' name='lastname' id='lastname' placeholder='Enter Your Last Name' value={this.state.lastname} onChange={this.handleInputChange} onBlur={this.handleBlur('lastname')} valid={errors.lastname===""}
                                invalid={errors.lastname!==""}/>
                                <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={3} htmlFor='telnum'>Telephone No:</Label>
                                <Col>
                                    <Input type='tel' name='telnum' id='telnum' placeholder='Enter tel number' value={this.state.telnum} onChange={this.handleInputChange} onBlur={this.handleBlur('telnum')} valid={errors.telnum===""}
                                invalid={errors.telnum!==""}/>
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={3} htmlFor='email'>Email</Label>
                                <Col>
                                    <Input type='email' name='email' id='email' placeholder='Enter E-mail' value={this.state.email} onChange={this.handleInputChange} onBlur={this.handleBlur('email')} valid={errors.email===""}
                                invalid={errors.email!==""}/>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={3}>Message</Label>
                                <Col md={9}>
                                <Input id='message' type='textarea' name="message" placeholder='Enter Message' style={{height:"150px"}} onChange={this.handleInputChange}/>                            
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10,offset:2}}>
                                    <Button type='submit' color='primary'>Send FeedBack</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Contact;