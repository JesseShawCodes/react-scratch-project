/*
Blog API Key: AIzaSyB2ynsI_u4MbojLXxBHP7uChvwS5pGBL6Y
*/

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import { Book } from './Book';
import {Library} from './Library';

let bookList = [
    {
        "title": "The Sun Also Rises",
        "author": "Ernest HEmingway"
    },
    {
        "title": "White Teeth",
        "pages": 260
    },
    {
        "title": "Cat's Cradle",
        "author": "Ernest HEmingway",
        "pages": 480
    },
    {
        "title": "fight Club",
        "author": "Chuck Palahniuk",
        "pages": 304
    }
]

/*
class FavoriteColorForm extends React.Component {
    state = {
        value: ''
    }
    newColor = e => this.setState({value: e.target.value});

    submit = e => {
        console.log(`New Color: ${this.state.value}`)
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Favorite Color:
                    <input 
                        type="color" 
                        onChange={this.newColor}
                    />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}
*/

Library.propTypes = {
    books: PropTypes.array
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

render(
    <Library books={bookList} />,
    document.getElementById("react-container")
)