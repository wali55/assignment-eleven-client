import { Button, Card } from "flowbite-react";
import React from "react";

const Item = ({ item }) => {
  const { picture, name, price, quantity, description, supplierName } = item;
  return (
    <div className="max-w-sm">
      <Card imgSrc={item.picture}>
        <div className="text-center">
          <h5 className="text-2xl mb-3 font-bold tracking-tight text-gray-900 dark:text-white">
            {item.name}
          </h5>
          <p className="font-normal mb-3 text-gray-700 dark:text-gray-400">
            {item.description}
          </p>
          <p className="mb-3 font-bold text-xl  text-green-700 dark:text-gray-400">
            ${item.price}
          </p>
          <p className="font-normal mb-3 text-gray-700 dark:text-gray-400">
            <span className="pr-1 font-bold">Quantity:</span>{item.quantity}
          </p>
          <p className="font-normal mb-3 text-gray-700 dark:text-gray-400">
          <span className="pr-1 font-bold">Supplier:</span>{item.supplierName}
          </p>
          <button className="bg-lime-500 py-2 px-4 rounded text-white font-semibold hover:bg-orange-500">Update</button>
        </div>
      </Card>
    </div>
  );
};

export default Item;
