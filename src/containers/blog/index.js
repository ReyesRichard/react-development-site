import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogEntry from '../../components/Blog';
import Server, {Client} from '../../service/server'

class blogContainer extends Component {

    constructor( props ){
        super( props );
        this.state = {
            posts:[
                // {
                //     id: 0,
                //     title: "Cargando...",
                //     author: "...",
                //     date: "00/00/00"
                // },
                // {
                //     title: "Soy el title 2",
                //     author: "Pedro Mora Pérez",
                //     date: "05/06/95"
                // },
                // {
                //     title: "Soy el title 3",
                //     author: "Raul Palencia",
                //     date: "05/06/99"
                // },
                // {
                //     title: "Soy el title 4",
                //     author: "Juan Méndez Pérez",
                //     date: "05/06/94"
                // },

            ],
            hits: [],
            isLoading: false,
            error: null,
        }
    }

    componentDidMount() {

        this.setState({ isLoading: true });
        const Backend = new Server();
        fetch(`${Backend.clients.dev.URL}posts`, {} )
            .then(response => {
                if (response.ok) {
                    // console.log(response.json()  )
                    // console.log(sresponse  )
                    // debugger;
                    
                    return response.json();

                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data =>
                this.setState({ posts: data, isLoading: false })
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("update");
    }

    handleFilterClick = ()=> {
        console.log('Click');
    }

    render() {
        return (
            <div>
                <h2 onClick={this.handleFilterClick}> Blog </h2>
                <BlogEntry  blogs={this.state.posts} isLoading={this.isLoading} error={this.error}/>
            </div>
        );
    }
}

export default blogContainer;