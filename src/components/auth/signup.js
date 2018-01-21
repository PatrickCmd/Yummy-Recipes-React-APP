import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Signup extends Component {

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
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <Form onSubmit={ this.handleSubmit(this.onSubmitForm.bind(this)) }>
                    <Field 
                        label="Firstname"
                        name="first_name"
                        htmlfor="firstname"
                        id="firstname"
                        type="text"
                        component={ this.renderField }
                    />
                    <Field 
                        label="Lastname"
                        name="last_name"
                        htmlfor="lastname"
                        id="lastname"
                        type="text"
                        component={ this.renderField }
                    />
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

export default reduxForm({
    form: 'Signup'
})(Signup);