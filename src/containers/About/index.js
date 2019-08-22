import React, {Component} from 'react'
import { Controller, Scene } from 'react-scrollmagic';
import {
    Tween,
    Timeline,
    TimelineProps,
    TweenProps,
    // TimelineMax
} from 'react-gsap';

class aboutContainer extends Component{
    // Tween;
    // Timeline;

    constructor(props){
        super(props);
        // const tween = this.tween.getGSAP();  
    }
    componentDidMount() {

    }
    render(){
        return(
            <div className="about-container">

                <div className="container">
                    Contenerdor 1

                </div>
                < Controller globalSceneOptions = {
                    {
                        triggerHook: 'onLeave',
                        duration: "100%"
                    }
                } >
                    < Scene pin indicators duration="100%" >
                        <Tween
                         staggerFrom = {
                             {
                                 y: 30,
                                //  visibility: "hidden",
                                //  opacity: 0,
                                //  margin: 30%;
                             }
                         }
                         staggerTo = {
                             {
                                 y: 0,
                                //  visibility: "visible",
                                //  opacity: 1
                             }
                         }
                         stagger = {
                            1
                        } 
                        >
                            <div className="panel blue"><span>Panel</span></div>
                        </Tween>
                    </Scene>
                    <Scene pin duration = "100%" >
                        <Timeline
                            to = {
                                {
                                //   y: -100
                                }
                            }
                        >
                            <div className="panel turqoise"><span>Panel Max</span></div>
                        </Timeline>
                    </Scene>
                    <Scene pin >
                        <Tween
                            staggerFrom = {
                                {
                                    // y: 50,
                                    // visibility: "hidden",
                                    // opacity: 0
                                }
                            }
                            staggerTo = {
                                {
                                    y: 0,
                                    // visibility: "visible",
                                    // opacity: 1
                                }
                            }
                            stagger = {
                                    1
                                } >
                        <div className = "panel bordeaux" > < span > Panel </span></div>
                        </Tween> 
                    </Scene>
                    < Scene pin duration = "100%" >
                        <Tween  
                         staggerFrom = {
                            {
                                scale: 0.5,
                                transformOrigin: "bottom",
                                y: 300,
                                ease:"Power1.easeInOut",
                                stagger: {  
                                    grid: [15,9],
                                    from: 11,
                                    axis: "x",
                                    amount: 1.5
                                }
                            }
                        }
                         staggerTo = {
                             {
                                 y: 0, scale: 1, transformOrigin: "bottom", ease: "Sine.easeInOut"
                             }
                         }
                         to = {
                             {
                                x:'100%', ease: "Sine.easeInOut"
                            }
                        }
                         stagger = {
                             1
                         } 
                         >
                            <div className="panel green"><span>Panel y</span></div>
                        </Tween>
                    </Scene>
                    < Scene pin duration = "100%" >
                        <Tween  
                         staggerFrom = {
                            {
                                    y: 180, scale: 3, transformOrigin: "bottom", ease: "Sine.easeInOut"
                            }
                        }
                         staggerTo = {
                             {
                                 y: 0, scale: 1, transformOrigin: "bottom", ease: "Sine.easeInOut"
                             }
                         }
                         to = {
                             {
                                x: '-100%', ease: "Sine.easeInOut"
                            }
                        }
                         stagger = {
                             1
                         } 
                         >
                            <div className="panel green"><span>Panel y 2</span></div>
                        </Tween>
                    </Scene>

                    <Scene>
                        <Timeline
                            target={
                                <div className="panel turqoise panel-abs">Target element which will be visible and gets tweened 111x</div>
                            }
                        >
                            {/* <Tween from={{ x: "-100%" }} to={{ x: "0%" }} duration={0.7} ease="Linear.easeNone" delay={0.5} /> */}
                            <Tween staggerFrom={{ x: "-100%" }} staggerTo={{ x: "0%" }} stagger={0.2} duration={0.1} ease="Linear.easeNone" />
                            {/* <Tween staggerTo={{ x: '00px' }} stagger={0.2} duration={0.7} ease="Linear.easeNone" position="+=1" /> */}
                        </Timeline>
                    </Scene>

                    <Scene>
                        <Timeline
                            target={
                                <div className="panel green panel-abs">
                                    <h2>Target element which will be visible and gets tweened 22</h2>
                                    <p> Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir </p>
                                    <p> Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir </p>
                                </div>
                            }
                        >
                            {/* <Tween from={{ x: "100%" }} to={{ x: "0%" }} duration={0.7} ease="Linear.easeNone" delay={0.5} /> */}
                            <Tween staggerFrom={{ x: "100%" }} staggerTo={{ x: "0%" }} stagger={0.2} duration={0.1} ease="Linear.easeNone"  />
                            {/* <Tween staggerTo={{ x: '00px' }} stagger={0.2} duration={0.7} ease="Linear.easeNone" position="+=1" /> */}
                        </Timeline>
                    </Scene>

                    <Scene>
                        <Timeline
                            target={
                                <div className="panel turqoise panel-abs">Target element which will be visible and gets tweened 33</div>
                            }
                        >
                            {/* <Tween from={{ y: "-100%" }} to={{ y: "0%" }} duration={0.7} ease="Linear.easeNone" delay={0.5} /> */}
                            {/* <Tween staggerTo={{ y: '0px' }} stagger={0.2} duration={0.1} ease="Linear.easeNone" /> */}
                            <Tween staggerFrom={{ y: "-100%" }} staggerTo={{ y: "0%" }} stagger={0.2} duration={0.1} ease="Linear.easeNone"   />
                            {/* <Tween staggerTo={{ x: '00px' }} stagger={0.2} duration={0.7} ease="Linear.easeNone" position="+=1" /> */}
                        </Timeline>
                    </Scene>
                    
                    <Scene pin >
                        <Tween>
                            <div className="panel default">
                                <h2 className="h2-title"> Title Primary</h2>
                                <p> Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir </p>
                                <p> Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir </p>
                                <p> Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir </p>
                                <p> Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir </p>
                                <p> Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir </p>
                                <p> Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir </p>
                                <p> Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir Lorem ipsum dolor sir </p>
                            </div>
                        </Tween>
                    </Scene>


                    

                </Controller>



            </div>
        );
    }
}
export default aboutContainer;