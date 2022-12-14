import { Card } from "flowbite-react";
import React from "react";
import { useParams } from "react-router-dom";
import useItemDetail from "../../hooks/useItemDetail";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useItemDetail(itemId);
  const { _id, picture, name, price, quantity, description, supplierName } =
    item;
  return (
    <div className="flex justify-center my-12">
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
            <button className="bg-lime-500 py-2 px-4 rounded text-white font-semibold hover:bg-orange-500 mr-3">
              Shipped
            </button>
            <button className="bg-lime-700 py-2 px-4 rounded text-white font-semibold hover:bg-orange-500">
              Restock
            </button>
          </div>
        </Card>
        <div className="flex justify-center mt-12">
          <button className="bg-green-700 py-2 px-4 text-white font-semibold hover:bg-orange-500">
            Manage Inventory
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
