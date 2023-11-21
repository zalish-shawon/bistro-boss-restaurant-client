import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Section/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";

const stripePromise = loadStripe('pk_test_51OEduzAnyigpIUQ3u0HTJbhwJPd1d5oZISrPpuwru9UHs5XtBOTXc9M6BJk6bMCjqLhp3C3ONhvngVpYsNvlNFYn00UMVLwFNV')
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;