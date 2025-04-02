import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Breadcrumbs } from "../common/Breadcrumbs";

interface CartItem {
  productName: string;
  productId: string;
  image: {
    fileUrl: string;
  };
  variant: {
    mrp: number;
    inventory: number;
  };
  variantId: string;
  subTotal: number;
  orderQuantity: number;
}

interface CartData {
  itemList: CartItem[];
  total: number;
}

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cartData, setCartData] = useState<CartData | undefined>(
    location.state?.cartData as CartData | undefined
  );

  useEffect(() => {
    console.log("Cart Data:", cartData);
  }, [cartData]);

  const handleIncrement = (productId: string, variantId: string) => {
    setCartData((prevCartData) => {
      if (!prevCartData) return prevCartData;

      const updatedItemList = prevCartData.itemList.map((item) => {
        if (
          item.productId === productId &&
          item.variantId === variantId &&
          item.orderQuantity < item.variant.inventory
        ) {
          return {
            ...item,
            orderQuantity: item.orderQuantity + 1,
            subTotal: item.variant.mrp * (item.orderQuantity + 1),
          };
        }
        return item;
      });

      const updatedTotal = updatedItemList.reduce(
        (sum, item) => sum + item.subTotal,
        0
      );

      return {
        ...prevCartData,
        itemList: updatedItemList,
        total: updatedTotal,
      };
    });
  };

  const handleDecrement = (productId: string, variantId: string) => {
    setCartData((prevCartData) => {
      if (!prevCartData) return prevCartData;

      const updatedItemList = prevCartData.itemList.map((item) => {
        if (
          item.productId === productId &&
          item.variantId === variantId &&
          item.orderQuantity >= 0
        ) {
          return {
            ...item,
            orderQuantity: Math.max(0, item.orderQuantity - 1), // Ensure quantity doesn't go below 0
            subTotal: item.variant.mrp * Math.max(0, item.orderQuantity - 1),
          };
        }
        return item;
      });

      const updatedTotal = updatedItemList.reduce(
        (sum, item) => sum + item.subTotal,
        0
      );

      return {
        ...prevCartData,
        itemList: updatedItemList,
        total: updatedTotal,
      };
    });
  };

  const total = cartData?.total || 0;
  const orderQuantity =
    cartData?.itemList.reduce((sum, item) => sum + item.orderQuantity, 0) || 0;
  //handle proceed to checkout
  const handleProceedToAddDeliveryOptions = () => {
    navigate("/delivery-options", { state: { cartData } });
  };
  return (
    <>
      <Navbar />
      <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
        <Breadcrumbs item1="Home" item2="Shop" item3="Cart" />
        <h1 className="h3 mb-4">Shopping cart</h1>
        <div className="row">
          <div className="col-lg-8">
            <div className="pe-lg-2 pe-xl-3 me-xl-3">
              <p className="fs-sm">
                Buy <span className="text-dark-emphasis fw-semibold">$183</span>{" "}
                more to get{" "}
                <span className="text-dark-emphasis fw-semibold">
                  Free Shipping
                </span>
              </p>
              <div
                className="progress-bar bg-warning rounded-pill position-relative overflow-visible"
                style={{ width: "75%", height: "4px" }}
              >
                <div
                  className="position-absolute top-50 end-0 d-flex align-items-center justify-content-center translate-middle-y bg-body border border-warning rounded-circle me-n1"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  <i className="ci-star-filled text-warning"></i>
                </div>
              </div>
              <table className="table position-relative z-2 mb-4 mt-3">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col" className="d-none d-xl-table-cell">
                      Price
                    </th>
                    <th scope="col" className="d-none d-md-table-cell">
                      Quantity
                    </th>
                    <th scope="col" className="d-none d-md-table-cell">
                      Total
                    </th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {cartData && cartData.itemList.length > 0 ? (
                    cartData.itemList.map((item: CartItem) => (
                      <tr key={item.productId + item.variantId}>
                        <td className="py-3 ps-0">
                          <div className="d-flex align-items-center">
                            <img
                              src={item.image.fileUrl}
                              width="110"
                              alt={item.productName}
                            />
                            <div className="ps-2 ps-xl-3">
                              <h5>{item.productName}</h5>
                            </div>
                          </div>
                        </td>
                        <td className="d-none d-xl-table-cell">
                          ₹{item.variant.mrp}
                        </td>
                        <td className="py-3 d-none d-md-table-cell">
                          <div className="count-input flex-shrink-0 rounded-pill d-flex align-items-center">
                            <button
                              type="button"
                              className="btn btn-icon btn-lg"
                              aria-label="Decrement quantity"
                              onClick={() =>
                                handleDecrement(item.productId, item.variantId)
                              }
                            >
                              <i className="ci-minus"></i>
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-lg text-center"
                              value={item.orderQuantity}
                              readOnly
                            />
                            <button
                              type="button"
                              className="btn btn-icon btn-lg"
                              aria-label="Increment quantity"
                              onClick={() =>
                                handleIncrement(item.productId, item.variantId)
                              }
                            >
                              <i className="ci-plus"></i>
                            </button>
                          </div>
                        </td>
                        <td className="d-none d-md-table-cell">
                          ₹{item.subTotal}
                        </td>
                        <td className="text-end py-3 px-0">
                          <button
                            type="button"
                            className="btn-close fs-sm"
                            aria-label="Remove from cart"
                          ></button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="text-center">
                        Your cart is empty.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="col-lg-4">
            <div className="bg-body-tertiary rounded-5 p-4">
              <h5 className="border-bottom pb-4 mb-4">Order summary</h5>
              <ul className="list-unstyled fs-sm gap-3 mb-0">
                <li className="d-flex justify-content-between">
                  Subtotal ({orderQuantity} items):
                  <span className="text-dark-emphasis fw-medium">
                    ₹{total.toFixed(2)}
                  </span>
                </li>
                <li className="d-flex justify-content-between">
                  Saving:
                  <span className="text-danger fw-medium">-₹110.00</span>
                </li>
                <li className="d-flex justify-content-between">
                  Tax collected:
                  <span className="text-dark-emphasis fw-medium">₹73.40</span>
                </li>
                <li className="d-flex justify-content-between">
                  Shipping:
                  <span className="text-dark-emphasis fw-medium">
                    Calculated at checkout
                  </span>
                </li>
              </ul>
              <div className="border-top pt-4 mt-4">
                <div className="d-flex justify-content-between mb-3">
                  <span className="fs-sm">Estimated total:</span>
                  <span className="h5 mb-0">₹{total.toFixed(2)}</span>
                </div>
                <button
                  className="btn btn-lg btn-primary w-100"
                  onClick={handleProceedToAddDeliveryOptions}
                >
                  Proceed
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Cart;
