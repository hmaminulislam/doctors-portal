import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData()
    const { theetment, appointmentDate, slot, price } = booking;
    return (
      <div>
        <h2 className="text-3xl font-semibold">Payment for {theetment}</h2>
        <p>
          Please pay <strong>${price}</strong> for your appointment on{" "}
          {appointmentDate} {slot}
        </p>
        <div className='w-80 mt-5'>
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>
        </div>
      </div>
    );
};

export default Payment;