import React from 'react';

import classes from './NavigationItems.css'

import NavigationItem from '../NavigationItem/NavigationItem'

const NavigationItems = (props) =>
(
<ul className={classes.NavigationItems}>

<NavigationItem link="/" exact active> Burger Builder
</NavigationItem>
<NavigationItem link="/signup">
Signup
</NavigationItem>
<NavigationItem link="/orders">
Checkout
</NavigationItem>

</ul>

);

export default NavigationItems