/*
 * Shopping Cart Requirements:
 * - Before you start, please run `npm run start:api` to start mock API server
 * - data for mock APIs come from ./db/db.json
 * - There are 2 APIs you need to call:
 *     - http://localhost:4002/cart : this will provide a list of product-ids for current shopping cart
 *     - http://localhost:4002/products : this will provide a list of products with full details
 *
 * We want to display detail of items in shopping carts. i.e: user has added product 1001 and 1004 to the cart.
 * product 1001 is TV and product 1002 is iPad. Thus, we would like to display them in tabular format
 * inside table#shopping-cart-tbl as below:
 * ID     Item
 * 1001   TV
 * 1002   iPad
 *
 * */

import React, { useState, useEffect } from "react";
import { getCarts, getProducts } from "../../services";

type CartType = {
  id: string;
};

type ProductType = {
  id: string;
  name: string;
  link: string;
};

const ShoppingCart: React.FC = () => {
  // We save the carts into the state
  const [carts, setCarts] = useState<CartType[]>();
  // We save the products into the state
  const [products, setProducts] = useState<ProductType[]>();
  // We get the data from the API to set into the component state
  useEffect(() => {
    if (!carts) {
      getCarts().then((response: CartType[]) => setCarts(response));
    }
  }, [carts]);
  useEffect(() => {
    if (!products) {
      getProducts().then((response: ProductType[]) => setProducts(response));
    }
  }, [products]);
  /**
   * @description Get the product by id
   * @param {string} id Cart id
   * @returns {ProductType | undefined}
   */
  const getProductById = (id: string) => {
    return products?.find((product: ProductType) => product.id === id);
  };
  /**
   * @description Show all the rows from the component state
   * @returns {JSX.Element}
   */
  const showRows = () => {
    return carts?.map((cart: CartType) => {
      if (cart.id) {
        const product = getProductById(cart.id);
        return (
          <tr key={`cart-${cart.id}`}>
            <th>{product?.id}</th>
            <th>{product?.name}</th>
          </tr>
        );
      }
      return null;
    });
  };

  return (
    <div className="form-group">
      <div className="row">
        <h1 className="text-center">Shopping Cart</h1>
      </div>
      <div className="row">
        <table
          className="table table-striped table-hover"
          id="shopping-cart-tbl"
          border={1}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>{showRows()}</tbody>
        </table>
      </div>
    </div>
  );
};

export { ShoppingCart };
