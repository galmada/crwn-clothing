import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

const StripeCheckoutButton = ( { price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HVH58DlPO9aD1wcEKVrjIApXAjiAEuqkHO5OkvUzl3W9OYrpBhAON113tAhEZSkYt2nd9t2xarhKMWHje8rnIvH00TVif67Jo';


    return (
        <StripeCheckout 
            label= 'Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;