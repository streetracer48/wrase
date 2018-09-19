import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummery'

import ContactData from  './ContactData/ContactData'
class Checkout extends Component {

    // state = {
    //     ingredients:null,
    //     totalprice:0

    // }

// componentWillMount() {
// const query= new URLSearchParams(this.props.location.search);
// const ingredients ={}
// let price = 0;
// for (let param of query.entries()){
// //['salad','1']
// if(param[0] ==='price') {
//     price = param[1];
// }
// else {
//     ingredients[param[0]] = + param[1];
// }


// }
// this.setState({ ingredients:ingredients, totalprice:price})

// }
    checkoutCancleHandler = () => {
 this.props.history.goBack('/');
    }

    CheckoutContinueHandler = () => {
         this.props.history.replace('/Checkout/contact-data')
    }
    render() {
       let summary = <Redirect to="/"/>
       if(this.props.ings) {
           console.log(this.props.ings)
           summary = (
         <div>
            <CheckoutSummary
            ingredients={this.props.ings}
            checkoutContinue={this.CheckoutContinueHandler}
            checkoutCancle ={this.checkoutCancleHandler}/>
            <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
            </div>
           );

       }


         return summary;
    }

}
const mapStateToProps = state => {
    return {
         ings:state.burgerBuilder.ingredients
    }

}

export default connect(mapStateToProps)(Checkout)