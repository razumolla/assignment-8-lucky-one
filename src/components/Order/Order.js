import React from 'react';

const Order = (props) => {
    console.log(props.bag);
    const { name } = props.bag;

    return (
        <div>

            <div>
                <p>name:{name} </p>
            </div>
            
        </div>
    );
};

export default Order;