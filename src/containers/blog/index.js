import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogEntry from '../../components/Blog';

class blogContainer extends Component {

    render() {
        return (
            <div>
                <h2> Blog </h2>
                <BlogEntry title="Soy el titulo 1" author="Juan Méndez" date="05/05/94" />
                <BlogEntry title="Soy el titulo 2" author="Juan Méndez" date="05/06/95" />
            </div>
        );
    }
}

export default blogContainer;