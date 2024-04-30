import { STRIPE_PK_KEY, STRIPE_SECRET_KEY } from "@/config";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(STRIPE_PK_KEY);

export default function StripePay() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: STRIPE_SECRET_KEY,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}
