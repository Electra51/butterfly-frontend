import React, { useState } from "react";
import CommonHero from "../../Components/Common/CommonHero";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../Redux/cartSlice";
import CheckOutModal from "../../Components/Common/CheckOutModal";
import { Link } from "react-router-dom";
const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [visible, setVisible] = useState(false);

  // Function to calculate the total price
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity + 6,
      0
    );
  };
  // Calculate SubTotal (Sum of all item prices * quantity)
  const getSubTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Calculate Total Items (Total number of unique items)
  const getTotalItems = () => {
    return cartItems.length;
  };

  // Calculate Total Products (Sum of all item quantities)
  const getTotalProducts = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  const shippingCharge = 6;
  return (
    <div>
      <CommonHero type={"cart"} title={"Your Cart"} />
      <div className="sm-container lg:w-[1220px] mx-auto mt-[125px] lg:mt-[120px] mb-[120px] lg:mb-[120px]">
        <div className="grid grid-cols-4 gap-16">
          <p className="text-[#100C08] text-[16px] font-medium px-3 border-0 border-b tracking-[1px] mb-3 col-span-3">
            Total products in Cart: {cartItems?.length}
          </p>
          <p className="pl-12 text-[#100C08] text-[16px] font-medium px-3 border-0 border-b w-[300px] tracking-[1px] mb-3">
            Order Summary
          </p>
        </div>

        <div className="grid grid-cols-4 gap-16 divide-x">
          <div className="col-span-3">
            {cartItems?.map((e, i) => (
              <div className="group bg-base-100 transform group-hover:-translate-y-1 duration-300 relative pr-6">
                <div
                  className="w-full h-full absolute top-0 left-0 bg-[#c2a74e] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ zIndex: -2 }}></div>{" "}
                <div className="justify-between items-center border-0 border-b px-4 py-2 grid grid-cols-5 gap-20">
                  <div className="col-span-4 flex justify-normal items-start">
                    <div>{i + 1}. </div>
                    <div className="h-[80px] w-[90px] ml-2">
                      <img
                        src={e?.img[0]?.img1st}
                        alt=""
                        className="object-contain w-full h-full"
                      />
                    </div>{" "}
                    <div>
                      <p className="text-[#100C08] font-medium text-[16px] px-3  tracking-[1px]">
                        {e.product_name}
                      </p>
                      <p className="text-[#100C08] text-[16px] font-normal px-3  tracking-[1px] mt-1">
                        Price: ${e.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-10">
                    <div className="flex justify-normal items-center gap-2">
                      <button
                        className="text-xl px-3 rounded-sm border border-[#C2A74E]"
                        onClick={() => dispatch(incrementQuantity(e._id))}>
                        +
                      </button>{" "}
                      <span className="text-[#100C08] text-[14px] font-normal text-center px-2 tracking-[1px]">
                        {e.quantity}
                      </span>{" "}
                      <button
                        className="text-xl px-3 rounded-sm border border-[#C2A74E]"
                        onClick={() => dispatch(decrementQuantity(e._id))}
                        disabled={e.quantity === 1}>
                        -
                      </button>
                    </div>
                    <div>
                      <svg
                        onClick={() => dispatch(removeFromCart(e._id))}
                        fill="#000000"
                        height="10px"
                        width="10px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 490 490"
                        xml:space="preserve">
                        <polygon
                          points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pl-12">
            <div className="flex justify-between items-center">
              <p>SubTotal</p>
              <p>${getSubTotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Shipping charge</p>
              <p>${shippingCharge}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Total Item</p>
              <p>{getTotalItems()}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Total Product</p>
              <p>{getTotalProducts()}</p>
            </div>
            <div className="flex justify-between items-center mt-6 border-0 border-t">
              <p className="font-bold text-[15px]">Total Price:</p>
              <p className="font-bold text-[15px]">
                ${getTotalPrice().toFixed(2)}
              </p>
            </div>

            <div className="mt-6 text-center">
              <Link to={"/checkout"}>
                <button
                  className="bg-[#c2a74e] text-white py-2 px-6  text-[14px]"
                  // onClick={() => setVisible(true)}
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CheckOutModal visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default CartPage;
