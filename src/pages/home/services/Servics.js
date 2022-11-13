import React from 'react';
import service1 from "../../../assets//images/cavity.png"
import service2 from "../../../assets/images/whitening.png"
import service3  from "../../../assets/images/fluoride.png"
import Service from './Service';
const Servics = () => {

    const ServiceInfo = [
      {
        id: 1,

        title: "Fluoride Treatment",
        img: service1,
        describe: "lorem ipsum dolor sit amet, consectetur adip"
      },
      {
        id: 2,
        title: "Cavity Filling",
          describe: "lorem ipsum dolor sit amet, consectetur adip",
          img: service2,
            
        },
        {
            id: 3,
            title: "white teath",
            describe: "lorem ipsum dolor sit amet, consectetur adip",
           img:service3,
      }
    ];
    return (
      <div className='my-14 '>
            <h4 className='text-xl text-red-600  mx-auto text-center font-bold '>OUR SERVICES</h4>
            <h2 className='text-3xl font-bold text-center mx-auto'>sevice we provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3  mt-4 md:grid-cols-2 gap-4'>
                {

                    
                    ServiceInfo.map(service=><Service key={service.id} service={service}></Service>)
                    
                    
                }
            </div>
      </div>
    );
};

export default Servics;