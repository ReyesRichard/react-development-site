import React, { Component } from 'react';
import PropTypes from 'prop-types';

class blogEntry extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="blog-container">
                {
                    this.props.blogs.map((blog) =>
                        <div className="blog">
                            <div>
                                <img src={blog.img ? blog.img : 'https://via.placeholder.com/150'} alt={blog.title} />
                            </div>
                            <p>{blog.title}</p>
                            <p>{blog.description}</p>
                            <p> <strong>Autor: </strong> {blog.author}</p>
                            <p><strong>Fecha:</strong> {blog.date}</p>
                            <div>
                                <button className="btn"> Leer más</button>
                            </div>
                        </div>
                    )
                }
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