import React, { Fragment } from 'react';
// import styled from 'styled-components';
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from 'react-gsap';
import { Transition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

const TransitionItem = ({ children, onClick, ...props }) => (
    <Transition timeout={1000} {...props}>
        {(state) => (
            <Timeline
                wrapper={
                    <div />
                }
            >
                <Tween
                    from={{
                        xPercent: 0,
                        opacity: 1,
                    }}
                    to={{
                        xPercent: 100,
                        opacity: 0,

                    }}
                    duration={1}
                    paused={true}
                    playState={state === 'entering' ? Tween.playState.reverse : state === 'exiting' ? Tween.playState.play : null}
                    ease="Back.easeInOut"
                >
                    <div className="item" onClick={onClick}>{children} {state}</div>
                </Tween>
            </Timeline>
        )}
    </Transition>
);



class TransitionComponent extends React.Component {
    state = {
        items: [
            { id: uuid(), text: '0' },
        ],
    };

    removeItem(id) {
        this.setState(state => ({
            items: state.items.filter(
                item => item.id !== id
            ),
        }));
    }

    render() {
        const { items } = this.state;

        return (
            <div className="transition-container">
                Play with these example on <a href="https://stackblitz.com/edit/react-v61on3" target="_blank">StackBlitz.io</a>

                <div className="section">Mount/Unmount Animation - built with React Transition Group</div>

                <button
                    type="button"
                    onClick={() => {
                        this.setState(state => ({
                            items: [
                                ...state.items,
                                { id: uuid(), text: state.items.length },
                            ],
                        }));
                    }}
                >
                    Agregar Elemento
                </button>

                <span>Haga click en elemento para eliminarlo</span>

                <TransitionGroup component={null}>
                    {items.map(({ id, text }) => (
                        <TransitionItem
                            key={id}
                            onClick={() => this.removeItem(id)}
                        >
                            {id}
                        </TransitionItem>
                    ))}
                </TransitionGroup>
            </div>
        );
    };
}

export default TransitionComponent;