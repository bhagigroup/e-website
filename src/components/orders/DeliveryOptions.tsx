import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Navbar from "../navbar/Navbar";

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
  id: string;
}
interface FormData {
  FirstName: string;
  LastName: string;
  Email: string;
  password: string;
  phonenumber: string;
  Address: string;
  Apartment?: string;
  City: string;
  State: string;
  Pincode: string;
  deliverySlot: string;
  deliverySlotId: string;
}

interface DeliverySlot {
  id: string;
  slot: string;
}

interface APIResponse {
  date: string;
  deliverySlots: DeliverySlot[];
}

interface SubmitFormProps {
  handleClose: () => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const DeliveryOptions: React.FC<SubmitFormProps> = ({ handleClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartData = location.state?.cartData as CartData | undefined;

  useEffect(() => {}, [cartData]);

  const [slots, setSlots] = useState<DeliverySlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [deliveryDate, setDeliveryDate] = useState<string | null>(null);

  const orderQuantity =
    cartData?.itemList.reduce((sum, item) => sum + item.orderQuantity, 0) || 0;
  const total = cartData?.total || 0;
  const cartId = cartData?.id || "";
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    getValues,
  } = useForm<FormData>();

  useEffect(() => {
    const fetchDeliverySlots = async () => {
      try {
        const response = await axios.get(
          "http://49.207.5.51:7000/cms/api/v1/order/get-delivery-slots"
        );
        setSlots(response.data.deliverySlots);
        setDeliveryDate(response.data.date);
      } catch (error) {
        console.error("Error fetching delivery slots:", error);
      }
    };

    fetchDeliverySlots();
  }, []);

  const handleSlotSelect = (slot: string, slotId: string) => {
    setSelectedSlot(slot);
    setValue("deliverySlot", slot);
    setValue("deliverySlotId", slotId);
  };

  const handleProceedToCheckout = async () => {
    try {
      const {
        FirstName,
        LastName,
        Address,
        Apartment,
        City,
        State,
        Pincode,
        phonenumber,
        deliverySlot,
        deliverySlotId,
      } = getValues();

      // Fetch Razorpay order ID
      const razorpayOrder = await fetch(
        "http://49.207.5.51:7000/cms/api/v1/order/create-order?amount=1000&currency=INR",
        {
          method: "POST",
        }
      ).then((response) => response.json());

      const options = {
        key: "rzp_test_IbLXsFqHioZSwO",
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        name: "Your Company",
        description: "Test Transaction",
        order_id: razorpayOrder.id,
        handler: function (response: any) {
          alert(
            "Payment Successful! Payment ID: " + response.razorpay_payment_id
          );
          // navigate("/account-orders");
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      const payload = {
        cartId: cartId,
        userId: "674b61875b09ec4b3c05bd68",
        address: {
          firstName: FirstName,
          lastName: LastName,
          apartment: Apartment,
          city: City,
          pincode: Pincode,
          mobile: phonenumber,
        },
        paymentMode: "COD",
        deliverySlot: {
          id: deliverySlotId,
          slot: deliverySlot,
        },
        deliveryDate: deliveryDate,
        paymentTransactionId: "",
      };

      const response = await axios.post(
        "http://49.207.5.51:7000/cms/api/v1/order/place-order",
        payload
      );

      if (response?.status === 200) {
        navigate("/account-orders");
      }
    } catch (err: any) {
      console.log("Failed to place order", err?.message);
    }
  };

  return (
    <>
      <Navbar />
      <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
        <h1 className="h3 mb-4">Delivery</h1>
        {deliveryDate && (
          <div className="mb-3">
            <h5>
              Available Slots for:{" "}
              <span className="text-primary">{deliveryDate}</span>
            </h5>
          </div>
        )}
        <div className="mb-4">
          <h6>Select Delivery Slot</h6>
          <div className="d-flex gap-3 flex-wrap">
            {slots.length > 0 ? (
              slots.map((slot) => (
                <div
                  key={slot.id}
                  className={`delivery-slot-box ${
                    selectedSlot === slot.slot ? "selected" : ""
                  }`}
                  onClick={() => handleSlotSelect(slot.slot, slot.id)}
                >
                  {slot.slot}
                </div>
              ))
            ) : (
              <p>Loading available slots...</p>
            )}
          </div>
          {errors.deliverySlot && (
            <p className="text-danger">Please select a delivery slot.</p>
          )}
        </div>

        <div className="row">
          <div className="col-lg-8">
            <form>
              <input
                type="hidden"
                {...register("deliverySlot", { required: true })}
              />

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ width: "300px" }}
                      placeholder="Enter First Name"
                      {...register("FirstName", { required: true })}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ width: "300px" }}
                      placeholder="Enter Last Name"
                      {...register("LastName", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "740px" }}
                  placeholder="Enter Address"
                  {...register("Address", { required: true })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Apartment</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "740px" }}
                  placeholder="Enter Apartment (optional)"
                  {...register("Apartment")}
                />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ width: "150px" }}
                      placeholder="Enter City"
                      {...register("City", { required: true })}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ width: "150px" }}
                      placeholder="Enter State"
                      {...register("State", { required: true })}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">Pincode</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ width: "150px" }}
                      placeholder="Enter Pincode"
                      {...register("Pincode", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  style={{ width: "740px" }}
                  placeholder="Enter Phone Number"
                  {...register("phonenumber", { required: true })}
                />
              </div>
            </form>
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
                  onClick={handleProceedToCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <style>
        {`
          .delivery-slot-box {
            padding: 10px 20px;
            border: 2px solid #ccc;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            font-weight: 500;
            background-color: #f8f9fa;
          }

          .delivery-slot-box:hover {
            background-color: #e9ecef;
          }

          .selected {
            border-color: #007bff;
            background-color: #007bff;
            color: white;
          }
        `}
      </style>
    </>
  );
};

export default DeliveryOptions;
