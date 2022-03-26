import React from 'react';
import './SingleBag.css';
import { BsCartCheck } from 'react-icons/bs';

const SingleBag = (props) => {
    console.log(props.bag);
    const { name, img, price } = props.bag;
    return (
        <div className='container'>
            <div className='image'>
                <img height={240} width={250} src={img} alt="" />
            </div>
            <div className='bag-info'>
                <h3> {name}</h3>
                <p>Price: ${price}</p>
            </div>

            <button className='cart-btn'>
                <p>Add to Cart</p>
                <BsCartCheck className='icon' />
            </button>

        </div>
    );
};

export default SingleBag;