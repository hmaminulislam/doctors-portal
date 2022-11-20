import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardsBody = [
      {
        id: 1,
        name: "Opening Hours",
        icon: clock,
        text: "Our office 06:00 to 09:00 everyday",
        bgColor: "bg-gradient-to-r from-primary to-secondary",
      },
      {
        id: 2,
        name: "Visit our location",
        icon: marker,
        text: "Koiralatie 8978 621, Uus-Anterosaari",
        bgColor: "bg-accent"
      },
      {
        id: 3,
        name: "Contact us now",
        icon: phone,
        text: "+358 18 550 5686",
        bgColor: "bg-gradient-to-r from-primary to-secondary",
      },
    ];
    return (
        <div className='grid gap-6 mt-32 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardsBody.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;