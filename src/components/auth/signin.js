import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { signInAction } from '../../actions/index';

class Signin extends Component {

    // method for rendering form field on the component
    renderField(field) {
        return (
            <FormGroup>
                <Label htmlFor={ field.htmlfor }>{ field.label }</Label>
                <Input 
                    type={ field.type }
                    id={ field.id }
                    { ...field.input }
                />
            </FormGroup>
        );
    }

    // method callback on form submission
    onSubmitForm = (values) => {
        console.log(values);
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error };
}

const reduxFormSignin = reduxForm({
    form: 'Signin'
})(Signin);

export default connect(mapStateToProps, { signInAction })(reduxFormSignin);