"use strict";

import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/app.css';
import Footer from './Footer'

export default class NavBar extends React.Component{
  render(){
    return (
        <header>
          <h1>Behavior Tracking App ('navbar component')</h1>

               <Link to="/about"><p>About</p></Link>
               <Link to="/student"><p>Student</p></Link>
        </header>
    )
  }
}
