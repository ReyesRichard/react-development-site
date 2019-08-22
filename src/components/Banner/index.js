import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import SERVER, { Client } from '../../service/server.js'

// https://www.npmjs.com/package/react-responsive-carousel
// http://react-responsive-carousel.js.org/storybook/?selectedKind=Carousel&selectedStory=dynamic%20height%20images&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel
class bannerComponent extends Component {
    constructor ( props ){
        super(props)
    }

    componentDidMount() {
        // this.setState({ isLoading: true });

        // fetch(API +     )
        //     .then(response => response.json())
        //     .then(data => this.setState({ hits: data.hits, isLoading: false }));
    }

    render() {
        return (
            <div>
                <Carousel infiniteLoop autoPlay showThumbs={false} emulateTouch dynamicHeight showStatus={false}>
                    {this.props.data.map((item, index)=>
                        <div key={index}>
                            <img src={item.img} />
                            <p className="legend">{item.description}</p>
                        </div>
                    )}
                </Carousel>
            </div>
        );
    }
}
// bannerComponent.propTypes = {
//     data: PropTypes.string,
//     title: PropTypes.number,
//     description: PropTypes.string,
//     img: PropTypes.string,
// };


export default bannerComponent;