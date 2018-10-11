import React from 'react';
import auth from '../hoc/auth';
import {connect} from 'react-redux'
import {getMovieQuote} from '../actions'

class MovieQuote extends React.Component {
    componentDidMount(){
        this.props.getMovieQuote();
    }
    render(){
        console.log('Movie Quotes: ', this.props)
        return (
            <div className="center">
                <h1>MOVIE QUOTE</h1>
                <h4>{this.props.quote}</h4>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        quote: state.movie.quote
    }
}

export default auth(connect(mapStateToProps, {getMovieQuote})(MovieQuote))
