import { PayPalButton } from "react-paypal-button-v2";

export default function PaypalButton(props)  {

    return (
      <PayPalButton
        amount={props.amount}
        client-id="ARKGRo1dntC_rUFe-Rcy42ysudM_F-tkbLnZY8DMbSUb_5he6v0c1IP7wkfPriY9QeK_G30oAMJILBl-"
        currency="USD"
         shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
            window.location.href=props.afterPurchaseGoTo;
        //   alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
        //   return fetch("/paypal-transaction-complete", {
        //     method: "post",
        //     body: JSON.stringify({
        //       orderID: data.orderID
        //     })
        //   });
        }}
      />
    );
  
}