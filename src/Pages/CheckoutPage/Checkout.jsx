import React, { useState } from "react";
import CommonHero from "../../Components/Common/CommonHero";
import imgCard from "../../assets/credit-card-icons-arthurchayka.png";
import imgCardb from "../../assets/download.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Checkout = () => {
  const [selected, setSelected] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = JSON.parse(localStorage.getItem("user-token"));

  const handlePaymentSelection = (option) => {
    setSelected(selected === option ? "" : option);
  };
  function calculateTotalShipping(items) {
    return items?.reduce(
      (total, item) => total + item.quantity * (item.shipping_charge || 0),
      0
    );
  }

  const getSubTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity + 6,
      0
    );
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    const shippingAddress = {
      firstName,
      lastName,
      phoneNumber,
      address,
      city,
      state,
      zipCode,
      email,
    };
    let paymentDetails = {};
    if (selected === "credit-card") {
      paymentDetails = {
        cardType: "credit-card",
        cardNumber,
        expiryDate,
        cvc,
      };
    }
    const orderData = {
      userId: user?.user?._id,
      items: cartItems.map((item) => item._id),
      shippingAddress,
      paymentMethod: selected,
      paymentDetails,
      subTotal: getSubTotal(),
      shippingCharge: calculateTotalShipping(cartItems),
      estimatedTax: 0,
      totalPrice: getTotalPrice(),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/order/order-add",
        orderData
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Order placed successfully:", data);
      } else {
        console.error("Error placing order:", response.status);
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div>
      <CommonHero type={"checkout"} title={"CheckOut"} />
      <div className="grid grid-cols-3 gap-10 my-[100px] mx-auto w-[1220px]">
        <div className="col-span-2">
          <form onSubmit={handleCheckout}>
            <p className="uppercase tracking-[0.1rem] font-semibold text-[14px] mt-4">
              Contact Email
            </p>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              className="border border-gray-300 px-2 py-1.5 text-[14px] w-full mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="uppercase tracking-[0.1rem] font-semibold text-[14px] mt-6">
              Shipping Info
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <input
                type="text"
                placeholder="First Name"
                className="border px-2 py-1.5 text-[14px] w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border px-2 py-1.5 text-[14px] w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <input
              type="tel"
              placeholder="+88 Phone Number"
              className="border px-2 py-1.5 text-[14px] w-full mt-2"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="border px-2 py-1.5 text-[14px] w-full mt-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <div className="grid grid-cols-3 gap-4 mt-2">
              <input
                type="text"
                placeholder="City"
                className="border px-2 py-1.5 text-[14px] w-full"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="State"
                className="border px-2 py-1.5 text-[14px] w-full"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="border px-2 py-1.5 text-[14px] w-full"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </div>
            <p className="uppercase tracking-[0.1rem] font-semibold text-[14px] mt-6">
              Payment Method
            </p>
            <div
              className={`border rounded-md px-4 py-3 mt-3 transition-all duration-300 ${
                selected === "credit-card" ? "h-auto" : "h-[70px]"
              }`}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    className="radio"
                    onClick={() => handlePaymentSelection("credit-card")}
                    checked={selected === "credit-card"}
                  />
                  <p>Credit Card</p>
                </div>
                <div className="w-[300px]">
                  <img src={imgCard} alt="Credit Card" className="w-full" />
                </div>
              </div>

              {/* expand credit card */}
              {selected === "credit-card" && (
                <div className="mt-4 space-y-3">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full border p-2 rounded-md"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-1/2 border p-2 rounded-md"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="w-1/2 border p-2 rounded-md"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}
            </div>

            {selected !== "credit-card" && (
              <div
                className="border rounded-md flex justify-between items-center px-4 py-3 mt-3 cursor-pointer"
                onClick={() => handlePaymentSelection("online-payment")}>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    className="radio"
                    checked={selected === "online-payment"}
                  />
                  <p>Online Payment</p>
                </div>
                <div className="w-[150px] h-[40px]">
                  <img
                    src={imgCardb}
                    alt="Online Payment"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )}

            <button className="h-[35px] w-full bg-blue-500 text-white mt-7 rounded-sm">
              Pay & Buy
            </button>
          </form>
        </div>

        <div>
          <div className="bg-gray-100 rounded-sm p-3">
            <p className="font-semibold border-0 border-b">Cart Summary</p>
            {cartItems?.map((e, i) => {
              return (
                <div className="mt-4" key={i}>
                  <div className="border-0 border-b pb-3">
                    <p>
                      {i + 1}. {e?.product_name}
                    </p>
                    <p className="pl-3.5">Price: {e?.price}</p>
                    <p className="pl-3.5">Quantity: {e?.quantity}</p>
                  </div>
                </div>
              );
            })}
            <div className="mt-3 px-3 border-0 border-b pb-3">
              <div className="flex justify-between items-center">
                <p>SubTotal</p>
                <p>${getSubTotal().toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Shipping Charge</p>
                <p>${calculateTotalShipping(cartItems)}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Estimated Tax</p>
                <p>0</p>
              </div>
            </div>
            <div className="mt-3 px-3 pb-3">
              <div className="flex justify-between items-center">
                <p>Total</p>${getTotalPrice().toFixed(2)}
              </div>
            </div>
          </div>

          <div className="border  rounded-sm p-5 mt-7 mb-5">
            <p className="font-semibold border-0 border-b">
              100 DAY HOME TRIAL
            </p>
            <p className="mt-2">1. Try Peloton at home for 100 days.</p>
            <p className="mt-2">
              2. Explore thousands of classes, live and on-demand..
            </p>
            <p className="mt-2">
              3. Not for you? We'll refund your entire order.
            </p>
            <p className="mt-2">Limited-time offer. Terms apply.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
