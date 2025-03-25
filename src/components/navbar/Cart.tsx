import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { Breadcrumbs } from "../common/Breadcrumbs";

const Cart: React.FC = () => {
  const location = useLocation();
  const initialCartData = location.state?.cartData || null;

  const [cartItems, setCartItems] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [orderQuantity, setOrderQuantity] = useState<number>(0);

  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(cart);

      const savedTotal = JSON.parse(localStorage.getItem("total") || "0");
      const savedOrderQuantity = JSON.parse(
        localStorage.getItem("orderQuantity") || "0"
      );

      setTotal(savedTotal);
      setOrderQuantity(savedOrderQuantity);
    };
    if (initialCartData) {
      setCartItems(initialCartData.itemList || []);
      setTotal(initialCartData.total || 0);
      setOrderQuantity(
        initialCartData.itemList?.reduce(
          (acc: number, item: any) => acc + item.orderQuantity,
          0
        ) || 0
      );
    } else {
      updateCart();
    }

    updateCart();
    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  // Handle Increment & Decrement of Quantity
  const handleQuantityChange = (productId: string, delta: number) => {
    let updatedCart = cartItems.map((item) => {
      if (item.productId === productId) {
        const newQuantity = item.orderQuantity + delta;
        return newQuantity > 0 ? { ...item, orderQuantity: newQuantity } : item;
      }
      return item;
    });

    // Remove item if quantity reaches 0
    updatedCart = updatedCart.filter((item) => item.orderQuantity > 0);

    // Recalculate total price and order quantity
    const newTotal = updatedCart.reduce(
      (acc, item) => acc + item.price * item.orderQuantity,
      0
    );
    const newOrderQuantity = updatedCart.reduce(
      (acc, item) => acc + item.orderQuantity,
      0
    );

    // Update state
    setCartItems(updatedCart);
    setTotal(newTotal);
    setOrderQuantity(newOrderQuantity);

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("total", JSON.stringify(newTotal));
    localStorage.setItem("orderQuantity", JSON.stringify(newOrderQuantity));

    // Dispatch event to notify other components (like Navbar)
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <>
      <Navbar />
      <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
        <Breadcrumbs item1="Home" item2="Shop" item3="Cart" />
        <h1 className="h3 mb-4">Shopping cart</h1>
        <div className="row">
          {/* Items list */}
          <div className="col-lg-8">
            <div className="pe-lg-2 pe-xl-3 me-xl-3">
              <table className="table position-relative z-2 mb-4">
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
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-center">
                          <img src={item.image} width="110" alt={item.name} />
                          <div className="ps-2 ps-xl-3">
                            <h5>{item.name}</h5>
                          </div>
                        </div>
                      </td>
                      <td className="h6 py-3 d-none d-xl-table-cell">
                        ₹{item.price.toFixed(2)}
                      </td>
                      <td className="py-3 d-none d-md-table-cell">
                        <div className="count-input flex-shrink-0 rounded-pill d-flex align-items-center">
                          <button
                            type="button"
                            className="btn btn-icon btn-lg"
                            onClick={() =>
                              handleQuantityChange(item.productId, -1)
                            }
                            disabled={item.orderQuantity <= 1}
                            aria-label="Decrement quantity"
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
                            onClick={() =>
                              handleQuantityChange(item.productId, 1)
                            }
                            aria-label="Increment quantity"
                          >
                            <i className="ci-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td className="h6 py-3 d-none d-md-table-cell">
                        ₹{(item.price * item.orderQuantity).toFixed(2)}
                      </td>
                      <td className="text-end py-3 px-0">
                        <button
                          type="button"
                          className="btn-close fs-sm"
                          onClick={() =>
                            handleQuantityChange(
                              item.productId,
                              -item.orderQuantity
                            )
                          }
                          aria-label="Remove from cart"
                        ></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Order summary (sticky sidebar) */}
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
                <button className="btn btn-lg btn-primary w-100">
                  Proceed to checkout
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
