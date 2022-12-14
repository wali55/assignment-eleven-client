import { Button, Card } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const { _id, picture, name, price, quantity, description, supplierName } = item;
  const navigate = useNavigate();

  const navigateToItemDetail = (id) => {
    navigate(`/item/${id}`);
  }

  return (
    <div className="max-w-sm">
      <Card imgSrc={picture}>
        <div className="text-center">
          <h5 className="text-2xl mb-3 font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="font-normal mb-3 text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div>
            <p className="mb-3 font-bold text-xl  text-green-700 dark:text-gray-400">
              ${price}
            </p>
            <p className="font-normal mb-3 text-gray-700 dark:text-gray-400">
              <span className="pr-1 font-bold">Quantity:</span>
              {quantity}
            </p>
            <p className="font-normal mb-3 text-gray-700 dark:text-gray-400">
              <span className="pr-1 font-bold">Supplier:</span>
              {supplierName}
            </p>
          </div>
          <button onClick={() => navigateToItemDetail(_id)} className="bg-lime-500 py-2 px-4 rounded text-white font-semibold hover:bg-orange-500">
            Update
          </button>
        </div>
      </Card>
      
    </div>
  );
};

export default Item;
