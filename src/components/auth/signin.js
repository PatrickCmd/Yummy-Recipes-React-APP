import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, FormFeedback, Label, Input} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CarouselComponent from '../universal/carousel';
import { signInAction } from '../../actions/index';

class Signin extends Component {

    // method for rendering form field on the component
    renderField(field) {
        //de-structuring from the field object
        const { meta: { touched, error } } = field;
        const isValid = touched && error ? false : '';
        return (
            <FormGroup>
                <Label htmlFor={ field.htmlfor }>{ field.label }</Label>
                <Input 
                    type={ field.type }
                    id={ field.id }
                    { ...field.input }
                    valid={ isValid }
                />
                <FormFeedback>{ touched ? error : '' }</FormFeedback>
            </FormGroup>
        );
    }

    // method callback on form submission
    onSubmitForm = (values) => {
        this.props.signInAction(values, this.props.history);
    }

    // method to return an error message if signin fails
    errorMessage() {
        if (this.props.errorMessage) {
            return (
                <div className="info-red">
                    { this.props.errorMessage }
                </div>
            );
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <CarouselComponent />
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-6">
                            <h3>SIGN IN</h3>
                            <hr />
                            <Form onSubmit={ handleSubmit(this.onSubmitForm.bind(this)) }>
                                <Field 
                                    label="Email"
                                    name="email"
                                    htmlfor="email"
                                    id="email"
                                    type="email"
                                    component={ this.renderField }
                                />
                                <Field 
                                    label="Password"
                                    name="password"
                                    htmlfor="password"
                                    type="password"
                                    id="password"
                                    component={ this.renderField }
                                />
                                <Button type="submit" color="primary">Sign in</Button>
                            </Form>
                            <Link to="/signup">DON'T HAVE AN ACCOUNT? SIGN UP <i class="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                </div>
            </div>
        );
    }
}

// validate input form field from values
const validate = (values) => {
    const errors = {};
    if (!values.email){
        errors.email = 'Email is required!';
    }

    if (!values.password) {
        errors.password = 'Enter your password please!'
    }

    return errors
}

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error };
}

const reduxFormSignin = reduxForm({
    validate, //validate: validate
    form: 'Signin'
})(Signin);

export default connect(mapStateToProps, { signInAction })(reduxFormSignin);