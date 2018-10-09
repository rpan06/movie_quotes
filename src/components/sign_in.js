import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import {renderInput} from '../helpers';

class SignIn extends Component {
    userSignIn=(values)=>{
        console.log('User Sign In Info: ', values);
        this.props.signIn(values);
    }
    render(){
        console.log('Sign In Props:', this.props);

        const {handleSubmit} = this.props;

        return(
            <div className="container">
                <h1 className="center">Sign In!</h1>
                <form onSubmit={handleSubmit(this.userSignIn)}>
                    <Field name="email" label="Email" component={renderInput}/>
                    <Field name="password" label="Password" type="password" component={renderInput}/>

                    <div className="row">
                        <div className="col s12 right-align">
                            <button className="btn blue">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(values){
    const {email, password, confirmPassword} = values;
    const errors = {};
    if (!email) {
        errors.email = 'Please enter your email address';
    }
    if (!password){
        errors.password = 'Please choose a password';
    }
    return errors
}

SignIn = reduxForm({
    form: 'add-item',
    validate: validate
})(SignIn);

export default connect(null, {
    signIn
})(SignIn)
