import React from 'react';
import SingleBag from '../SingleBag/SingleBag';
import './AllBags.css'
import img1 from '../images/Backpacks For Girls.jpg';
import img2 from '../images/Baggit Satchel Bags.jpg';
import img3 from '../images/DZert Panda Kids School Bag.jpg';
import img4 from '../images/DZert School Bag Backpack.jpg';
import img5 from '../images/ladis bag.jpg';
import img6 from '../images/LEATHER MARK Rexine School Bag.jpg';
import img7 from '../images/Max Bag World.jpg';
import img8 from '../images/pc bag.jpg';
import img9 from '../images/SaleBox DBLBKL SCHOOL BAG.jpg';
import img10 from '../images/spirit bag.jpg';
import img11 from '../images/trolley bag.jpg';
import img12 from '../images/work bag for womwn.jpg';

const allBags = () => {
    const allBags = [
        { id: 1, name: 'Backpacks For Girls', price: 100, img: img1 },
        { id: 2, name: 'Baggit Satchel Bags', price: 500, img: img2  },
        { id: 3, name: 'DZert Panda', price: 500, img: img3 },
        { id:4 , name: 'DZert School Bag', price: 300, img: img4 },
        { id:5 , name: 'ladis bag', price: 800, img: img5 },
        { id:6 , name: 'LEATHER MARK Rexine', price: 900, img: img6 },
        { id:7 , name: 'Max Bag World', price: 400, img: img7 },
        { id: 8, name: 'pc bag', price: 520, img: img8 },
        { id:9 , name: 'SaleBox DBLBKL', price: 300, img: img9 },
        { id:10 , name: 'spirit bag', price: 390, img: img10 },
        { id:11 , name: 'trolley bag', price: 200, img: img11 },
        { id: 12, name: 'work bag for women', price: 450, img: img12 }
    ];
    // console.log(allBags);
    return (
        <div className='main-container'>
            <div className='all-bags'>
                {
                    allBags.map(bag => <SingleBag
                        bag={bag}
                        key={bag.id}
                    > </SingleBag>)
                }
            </div>
            <div className='selected-bag'>
                <h1>selected bags</h1>
            </div>
        </div>
    );
};

export default allBags;