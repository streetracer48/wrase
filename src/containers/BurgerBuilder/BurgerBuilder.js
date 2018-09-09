import React, {Component} from 'react'

import Aux from '../../hoc/Aux'
import Burger from  '../../components/Burger/Burger'
import BuildControls  from '../../components/Burger/buildControls/buildControls'


const INGREDIENT_PRICE = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component
{

    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4
    }

addIngredientHandler =(type) => {
const oldCount = this.state.ingredients[type];
const  updatedCount = oldCount+1;
 const updatedIngredients = {
...this.state.ingredients
 };
updatedIngredients[type] = updatedCount;
const priceAddition = INGREDIENT_PRICE[type];
const oldprice = this.state.totalPrice;
const newprice = oldprice+priceAddition;
this.setState({
    totalPrice:newprice,
    ingredients:updatedIngredients
});
}

removeIngredientHandler = (type) =>
 {
     const oldCount = this.state.ingredients[type];
     const updatedCount =oldCount-1;
     const updatedIngredients = {
         ...this.state.ingredients
     };

     updatedIngredients[type] = updatedCount;
     const priceDeduction= INGREDIENT_PRICE[type];
     const oldprice = this.state.totalPrice;
    const  newprice = oldprice+priceDeduction;
    this.setState({
        totalPrice:newprice,
        ingredients:updatedIngredients

    })


}



    render () {
        console.log(this.state.ingredients);
        console.log(this.state.totalPrice);
        return (
            <Aux>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls

   ingredientAdded ={this.addIngredientHandler}
   removeIngredient={this.removeIngredientHandler}

            />

            </Aux>

        )

    }

}

export default BurgerBuilder;
