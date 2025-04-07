import React from "react";
import App from "./App";
import {NavLink} from "react-router-dom"
import Contact from './pages/Contact';
import Email from './pages/Email';
import About from './pages/About';
import Home from './pages/Home';

export const Header = () => {
  return (
    <ul class="list">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/email">Email</NavLink></li>
    </ul>
  );
};
