import React, { Component } from 'react';
import PropTypes from 'prop-types';

class blogEntry extends Component {
    render() {
        return (
            <div class="blog-container">
                <div>
                    <img src={this.props.img ? this.props.img : 'https://via.placeholder.com/150'} alt={this.props.title} />
                </div>
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <p> <strong>Autor: </strong> {this.props.author}</p>
                <p><strong>Fecha:</strong> {this.props.date}</p>
            </div>
        );
    }
}

blogEntry.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    img: PropTypes.string,
};

blogEntry.defaultProps = {
    title: 'Sin Titulo',
    description: 'Sin Descripción',
    author: 'Sin autor',
    date: 'Sin Fecha',
    // img: PropTypes.string,
};

export default blogEntry;