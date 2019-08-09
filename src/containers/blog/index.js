import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogEntry from '../../components/Blog';

class blogContainer extends Component {

    constructor( props ){
        super( props );
        this.state = {
            posts:[
                {
                    title: "Soy el title 1",
                    author: "Juan Méndez Pérez",
                    date: "05/06/94"
                },
                {
                    title: "Soy el title 2",
                    author: "Pedro Mora Pérez",
                    date: "05/06/95"
                },
                {
                    title: "Soy el title 3",
                    author: "Raul Palencia",
                    date: "05/06/99"
                },
            ]
        }
    }

    render() {
        return (
            <div>
                <h2> Blog </h2>
                <BlogEntry blogs={this.state.posts} />
            </div>
        );
    }
}

export default blogContainer;