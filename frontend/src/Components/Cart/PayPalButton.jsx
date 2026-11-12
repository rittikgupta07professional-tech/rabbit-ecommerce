import React from 'react'
import { PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'
const PayPalButton = ({amount, onSuccess, onError}) => {
  return (
    <PayPalScriptProvider options={{"client-id" : "BAAHbDB1Z_Yk6pURQu0UhDdxBFz7m4e-2tmjGmRI4kmesTLol3UuwpYKGH8P7VWy8RkIztaJM3GgvydalY"}}>
       <PayPalButtons style={{layout: "vertical"}} createOrder={(data, actions) => {
        return actions.order.create({
            purchase_units: [{amount: {value: amount}}]
       })}}
        onApprove = {(data, actions) => {
            return actions.order.capture().then(onSuccess)
        }}
        onError={onError}
    
    />
    </PayPalScriptProvider>
  )
}

export default PayPalButton