import React from 'react';
import './Order.css'

const Order = ({ bag }) => {
    // console.log(bag);
    const { img, name } = bag;

    return (
        <div className='order'>
            <div className='image'>
                <img height={40} width={40} src={img} alt="" />
            </div>
            <div>
                <p>{name} </p>
            </div>
        </div>
    );
};

export default Order;