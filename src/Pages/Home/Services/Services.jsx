import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services').then(res => res.json()).then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className='text-3xl'> Services {services.length}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat hic voluptates tenetur ea eum ipsum nobis culpa similique cumque molestias?</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;