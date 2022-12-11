import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import logo from "../../images/logo.png";

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div className='bg-lime-100/[.25] pb-16'>
            <div className="flex justify-center pt-16">
            <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt=""
          />
            </div>
            <h2 className='text-center text-4xl font-bold mb-8 text-gray-700'>Our Products</h2>
            <p className='text-center mb-12'>Organic food, ecological food or biological food are food and drinks produced by methods complying with the standards of organic farming.</p>
            <div className="grid md:grid-cols-3 gap-8 md:w-9/12 mx-auto">
                {
                    items.map(item => <Item
                    key={item._id}
                    item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;