import React from 'react';

const Tesmoniya = ({ info}) => {
    
    const { name, describe, img, city } = info;
    


    return (
      <div className="card bg-slate-600 text-white ">
            <p className='p-7 text-center'>{ describe}</p>
            <div className="card-body flex lg:flex-row justify-start ">
                <img className='w-10 h-10 rounded-xl border rounded-xl  bottom-1 border-dotted' src={img} alt="" />
                <div >
                    <h2 className='text-white'>{name}</h2>
                    <p>{ city}</p>
                </div>
          
        </div>
      </div>
    );
};

export default Tesmoniya;