import React from "react";
import CommonHero from "../../Components/Common/CommonHero";
import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../Redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Function to calculate the total price
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <CommonHero type={"cart"} title={"Your Cart"} />
      <div className="sm-container lg:w-[1220px] mx-auto mt-[125px] lg:mt-[190px] mb-[120px] lg:mb-[140px]">
        <div className="grid grid-cols-4 gap-16">
          <p className="text-[#100C08] text-[16px] font-medium px-3 border-0 border-b tracking-[1px] mb-3 col-span-3">
            Total products in Cart: {cartItems?.length}
          </p>
          <p className="pl-12 text-[#100C08] text-[16px] font-medium px-3 border-0 border-b w-[300px] tracking-[1px] mb-3">
            Order Summary
          </p>
        </div>

        <div className="grid grid-cols-4 gap-16 divide-x">
          <div className="group bg-base-100 transform group-hover:-translate-y-1 duration-300 relative col-span-3">
            {cartItems?.map((e, i) => (
              <div className="flex justify-between items-center border-0 border-b px-4 py-2">
                <div className="flex justify-normal items-center gap-2">
                  <div
                    className="w-full h-full absolute top-0 left-0 bg-[#c2a74e] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ zIndex: -2 }}></div>{" "}
                  <div>{i + 1}. </div>
                  <div className="h-[80px] w-[90px] ml-2">
                    <img
                      src={e?.img[0]?.img1st}
                      alt=""
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-[#100C08] font-medium text-[16px] px-3  tracking-[1px]">
                      {e.product_name}
                    </p>
                    <p className="text-[#100C08] text-[16px] font-normal px-3  tracking-[1px] mt-1">
                      Price: ${e.price}
                    </p>
                  </div>
                </div>
                {/* counter */}
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
              </div>
            ))}
          </div>

          <div className="pl-12">
            <div className="flex justify-between items-center">
              <p>Total Item</p>
              <p>4</p>
            </div>
            <div className="flex justify-between items-center">
              <p>SubTotal</p>
              <p>$ 6</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Shipping charge</p>
              <p>$ 6</p>
            </div>
            <div className="flex justify-between items-center mt-6 border-0 border-t">
              <p className="font-bold text-[15px]">Total Price:</p>
              <p className="font-bold text-[15px]">
                ${getTotalPrice().toFixed(2)}
              </p>
            </div>
            {/* Checkout Button */}
            <div className="mt-6 text-center">
              <button className="bg-[#c2a74e] text-white py-2 px-6  text-[14px]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
