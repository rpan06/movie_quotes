import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../actions';


class Nav extends Component {
    renderLinks(){
        const {auth} = this.props;
        if(auth){
            return (
                <li>
                    <button className="btn red darken-2" onClick={this.props.signOut}>Sign Out</button>
                </li>
            )
        }
        return(
            <Fragment>
                <li>
                    <Link to="/sign-in">Sign In</Link>
                </li>
                <li>
                    <Link to="/sign-up">Sign Up</Link>
                </li>
            </Fragment>
        )
        // return [
        //     <li key='1'>
        //         <Link to="/sign-in">Sign In</Link>
        //     </li>
        //     <li key='2'>
        //         <Link to="/sign-up">Sign Up</Link>
        //     </li>
        // ]
    }
    render(){
        const navStyle = {
            padding: '0 12px'
        }


        return (
            <nav style={navStyle} className="blue lighten-2">
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">Movie Quotes</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/person-list">Person List</Link>
                        </li>
                        <li>
                            <Link to="/secret-list">Secret List</Link>
                        </li>
                        <li>
                            <Link to="/movie-quote">Movie Quote</Link>
                        </li>
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {signOut})(Nav)
