import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPal = (props) => {
    // eslint-disable-next-line
    const { product } = props;

    return (
        <PayPalButtons
            style={{
                color: "silver",
                height: 48,
                width: 100,
                tagline: false,
                shape: "pill"
            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                });
            }}
        />
    )
}

export default PayPal;