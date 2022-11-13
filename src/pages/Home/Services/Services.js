import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'
import Service from './Service';
import ServiceInfo from './ServiceInfo';

const Services = () => {
    const services = [
      {
        id: 1,
        name: "Fluoride Treatment",
        text: "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high.",
        img: fluoride,
      },
      {
        id: 2,
        name: "Cavity Filling",
        text: "Before filling cavities, your dentist will numb your teeth, gums and surrounding skin to avoid and lessen discomfort during the procedure.",
        img: cavity,
      },
      {
        id: 3,
        name: "Teeth Whitening",
        text: "Any dentist can whiten teeth as long as they're registered with the General Dental Council. Registered dental therapists and dental.",
        img: teeth,
      },
    ];
    return (
      <div className='mt-20'>
        <h4 className="text-xl font-semibold text-primary text-center">OUR SERVICES</h4>
        <h4 className="text-4xl font-semibold text-accent text-center">
          Services We Provide
        </h4>
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
        <ServiceInfo></ServiceInfo>
      </div>
    );
};

export default Services;