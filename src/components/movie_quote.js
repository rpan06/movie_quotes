import React from 'react';
import auth from '../hoc/auth';

const MovieQuote = props => {
    return (
        <div className="center">
            <h1>MOVIE QUOTE</h1>
            <h4>meaningful quote text here</h4>
        </div>
    )
}

export default auth(MovieQuote);
