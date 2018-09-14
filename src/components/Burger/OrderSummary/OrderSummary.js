import React, {Component} from 'react'

import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Aux'


class OrderSummary extends Component {

    componentWillUpdate() {
console.log('[OrderSummer] willupdate')

    }
    render ()
    {

        const ingredientSummary =Object.keys(this.props.ingredients)
        .map(igkey => {
            return <li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span>: {this.props.ingredients[igkey]}</li>

        });


    return(
        <Aux>
        <h3>Your Order</h3>
<p> A delicious Burger with the following ingredient</p>
<ul>
{ingredientSummary}
</ul>
<p>Total Price :{this.props.totalprice.toFixed(2)}</p>
<p>Continure To Checkout ?</p>
<Button btnType="Danger" clicked={this.props.purchaseCancle}>CANCEL</Button>
<Button btnType="Success" clicked={this.props.purchaseContinue}>Continure</Button>
</Aux>

    );
}
}

export default OrderSummary;