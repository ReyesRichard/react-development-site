import React, { Component } from 'react'

import Home from './containers/Home'
import Blog from './containers/blog'
import Header from './components/Header'
import Footer from './components/Footer'

import About from './containers/About'
import Users from './containers/Users'
import Shop from './containers/Shop'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/blog',
        component: Blog
    },
    // {
    //     path: '/contact',
    //     component: Sandwiches
    // },
    // {
    //     path: '/tacos',
    //     component: Tacos,
    //     routes: [
    //         {
    //             path: '/tacos/bus',
    //             component: Bus
    //         },
    //         {
    //             path: '/tacos/cart',
    //             component: Cart
    //         }
    //     ]
    // }
]
export default routes;