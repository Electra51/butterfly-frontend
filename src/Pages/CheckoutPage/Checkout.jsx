// import React, { useState } from "react";
// import CommonHero from "../../Components/Common/CommonHero";
// import imgCard from "../../assets/credit-card-icons-arthurchayka.png";
// import imgCardb from "../../assets/download.png";
// const Checkout = () => {
//   const [selected, setSelected] = useState("");
//   const handleCheckout = () => {
//     console.log("chckout");
//   };
//   return (
//     <div>
//       <CommonHero type={"checkout"} title={"CheckOut"} />
//       <div className="grid grid-cols-3 gap-10 my-[100px] mx-auto w-[1220px]">
//         <div className="col-span-2">
//           <form onSubmit={handleCheckout}>
//             <p className="uppercase tracking-[0.1rem] font-semibold text-[14px] mt-4">
//               Contact Email
//             </p>

//             <input
//               type="text"
//               placeholder="Email"
//               id="email"
//               name="email"
//               className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-2 placeholder:text-[14px]"
//             />

//             <div>
//               <p className="uppercase tracking-[0.1rem] font-semibold text-[14px] mt-6">
//                 Shipping Info
//               </p>
//               <div className="grid grid-cols-2 gap-4 mt-2">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   id="first_name"
//                   name="first_name"
//                   className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   id="last_name"
//                   name="last_name"
//                   className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
//                 />
//               </div>
//               <div className="form-control mt-2">
//                 <input
//                   type="text"
//                   placeholder="+88 Phone Number"
//                   id="phone"
//                   name="phone"
//                   className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
//                 />
//               </div>
//               <div className="form-control mt-2">
//                 <input
//                   type="text"
//                   placeholder="Address"
//                   id="address"
//                   name="address"
//                   className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
//                 />
//               </div>
//               <div className="grid grid-cols-3 gap-4 mt-2">
//                 <input
//                   type="text"
//                   placeholder="City"
//                   id="city"
//                   name="city"
//                   className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
//                 />

//                 <input
//                   type="text"
//                   placeholder="state"
//                   id="state"
//                   name="state"
//                   className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Zip Code"
//                   id="zip-code"
//                   name="zip-code"
//                   className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
//                 />
//               </div>
//             </div>

//             <div>
//               <p className="uppercase tracking-[0.1rem] font-semibold text-[14px] mt-6">
//                 Payment Method
//               </p>

//               {/* <div className="border rounded-md flex justify-between items-center px-4 py-3 mt-3">
//                 <div className="flex justify-center items-center gap-3">
//                   <input type="radio" name="radio-1" className="radio" />
//                   <p>Credit Card</p>
//                 </div>
//                 <div className="w-[300px]">
//                   <img src={imgCard} alt="" className="w-full " />
//                 </div>
//               </div> */}
//               <div className="mt-5">
//                 {/* Credit Card Option */}
//                 <div
//                   className={`border rounded-md px-4 py-3 mt-3 transition-all duration-300 ${
//                     selected === "credit-card" ? "h-auto" : "h-[70px]"
//                   }`}>
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center gap-3">
//                       <input
//                         type="radio"
//                         name="payment"
//                         className="radio"
//                         onChange={() => setSelected("credit-card")}
//                         checked={selected === "credit-card"}
//                       />
//                       <p>Credit Card</p>
//                     </div>

//                     <div className="w-[300px]">
//                       <img src={imgCard} alt="" className="w-full " />
//                     </div>
//                   </div>

//                   {/* Expandable Credit Card Form */}
//                   {selected === "credit-card" && (
//                     <div className="mt-4 space-y-3">
//                       <input
//                         type="text"
//                         placeholder="Card Number"
//                         className="w-full border p-2 rounded-md"
//                       />
//                       <div className="flex gap-3">
//                         <input
//                           type="text"
//                           placeholder="MM/YY"
//                           className="w-1/2 border p-2 rounded-md"
//                         />
//                         <input
//                           type="text"
//                           placeholder="CVC"
//                           className="w-1/2 border p-2 rounded-md"
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div className="border rounded-md flex justify-between items-center px-4 py-3 mt-3">
//                 <div className="flex justify-center items-center gap-3">
//                   <input type="radio" name="radio-1" className="radio" />
//                   <p>Online Payment</p>
//                 </div>

//                 <div className="w-[150px] h-[40px]">
//                   <img
//                     src={imgCardb}
//                     alt=""
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//             <button className="h-[35px] !w-[384px] b3 mt-7" type="submit">
//               Pay & Buy
//             </button>
//           </form>
//         </div>
//         <div>
//           <div className="bg-base-200 rounded-sm p-3">
//             <p className="font-semibold">Cart Summary</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

import React, { useState } from "react";
import CommonHero from "../../Components/Common/CommonHero";
import imgCard from "../../assets/credit-card-icons-arthurchayka.png";
import imgCardb from "../../assets/download.png";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const handlePaymentSelection = (option) => {
    setSelected(selected === option ? "" : option); // Toggle selection
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    console.log("Checkout");
  };
  console.log("cartProducts", cartItems);
  return (
    <div>
      <CommonHero type={"checkout"} title={"CheckOut"} />
      <div className="grid grid-cols-3 gap-10 my-[100px] mx-auto w-[1220px]">
        <div className="col-span-2">
          <form onSubmit={handleCheckout}>
            {/* Contact Email */}
            <p className="uppercase tracking-[0.1rem] font-semibold text-[14px] mt-4">
              Contact Email
            </p>
            <input
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              className="border border-gray-300 px-2 py-1.5 text-[14px] w-full mt-2"
            />

            {/* Shipping Info */}
            <p className="uppercase tracking-[0.1rem] font-semibold text-[14px] mt-6">
              Shipping Info
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <input
                type="text"
                placeholder="First Name"
                className="border px-2 py-1.5 text-[14px] w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border px-2 py-1.5 text-[14px] w-full"
              />
            </div>

            <input
              type="text"
              placeholder="+88 Phone Number"
              className="border px-2 py-1.5 text-[14px] w-full mt-2"
            />
            <input
              type="text"
              placeholder="Address"
              className="border px-2 py-1.5 text-[14px] w-full mt-2"
            />
            <div className="grid grid-cols-3 gap-4 mt-2">
              <input
                type="text"
                placeholder="City"
                className="border px-2 py-1.5 text-[14px] w-full"
              />
              <input
                type="text"
                placeholder="State"
                className="border px-2 py-1.5 text-[14px] w-full"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="border px-2 py-1.5 text-[14px] w-full"
              />
            </div>

            {/* Payment Method */}
            <p className="uppercase tracking-[0.1rem] font-semibold text-[14px] mt-6">
              Payment Method
            </p>

            {/* Credit Card Option */}
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

              {/* Expandable Credit Card Form */}
              {selected === "credit-card" && (
                <div className="mt-4 space-y-3">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full border p-2 rounded-md"
                  />
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-1/2 border p-2 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="w-1/2 border p-2 rounded-md"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Online Payment Option (Hidden when Credit Card is selected) */}
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

            {/* Submit Button */}
            <button className="h-[35px] w-full bg-blue-500 text-white mt-7 rounded-md">
              Pay & Buy
            </button>
          </form>
        </div>

        {/* Cart Summary */}
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
                <p>$56</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Shipping Charge</p>
                <p>5</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Estimated Tax</p>
                <p>0</p>
              </div>
            </div>
            <div className="mt-3 px-3 pb-3">
              <div className="flex justify-between items-center">
                <p>Total</p>
                <p>$56</p>
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
