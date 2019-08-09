import React, { Component } from 'react';
import Banner from '../../components/Banner';


class homeContainer extends Component {
    constructor ( props ){
        super(props)
        this.state = {
            data: [
                {
                    title: "Titulo 1",
                    description: " lorem ipsum dolor sir du",
                    img: "https://via.placeholder.com/1200x500/811/fff"
                },
                {
                    title: "Titulo 2",
                    description: " lorem ipsum dolor sir du",
                    img: "https://via.placeholder.com/1300x600/448/fff"
                },
                {
                    title: "Titulo 3",
                    description: " lorem ipsum dolor sir du",
                    img: "https://via.placeholder.com/1200x800/884/fff"
                },
                {
                    title: "Titulo 4",
                    description: " lorem ipsum dolor sir du",
                    img: "https://via.placeholder.com/1500x500/753/fff"
                },
                {
                    title: "Titulo 5",
                    description: " lorem ipsum dolor sir du",
                    img: "https://via.placeholder.com/1200x500/159/fff"
                },
                {
                    title: "Titulo 6",
                    description: " lorem ipsum dolor sir du",
                    img: "https://via.placeholder.com/1920x1150/225/fff"
                },
            ]
        }
    }

    componentDidMount(){
        // this.setState({ dataSource: dataSource })
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <Banner data={this.state.data} />
            </div>
        );
    }
}

export default homeContainer;