import React from "react";

const Step1 = ({ idWishService, value, handleChange }) => {
  return (
    <div className="mt-7 h-[320px]">
      <div>
        <div className="grid grid-cols-4 gap-6 mt-5">
          <div className="h-[120px]">
            {/* <img
              src={idWishService?.detail[0]?.img}
              alt=""
              className="w-full h-full object-fill"
            /> */}
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-2 gap-1.5">
              {/* <p className="text-[14px] font-medium border border-gray-300 px-2 py-1 rounded-none w-full mt-1">
                Service Name: <span>{idWishService?.name}</span>
              </p>{" "} */}
              <input
                type="serviceName"
                id="serviceName"
                name="serviceName"
                value={`Service Name: ${value.serviceName}`}
                className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
                readOnly
              />
              <input
                type="category"
                id="category"
                name="category"
                value={`Category: ${value?.category}`}
                className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
                readOnly
              />
              <input
                type="price"
                id="price"
                name="price"
                value={`Price: ${value?.price}`}
                className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
                readOnly
              />
              <input
                type="discount"
                id="discount"
                name="discount"
                value={`Discount: ${value?.discount}`}
                className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
                readOnly
              />
            </div>

            <input
              type="totalPrice"
              id="totalPrice"
              name="totalPrice"
              value={`Total Price: ${value?.totalPrice}`}
              className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-2 placeholder:text-[14px] "
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1.5 mt-1.5">
        <input
          type="text"
          id="name"
          name="name"
          value={value?.clientName}
          placeholder="Client Name"
          className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
          readOnly
        />
        <input
          type="email"
          id="email"
          name="email"
          value={value?.email}
          placeholder="email"
          className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
          readOnly
        />

        <input
          type="number"
          id="age"
          name="age"
          value={value.age}
          onChange={handleChange}
          placeholder="age"
          className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
          required
        />

        <input
          type="text"
          id="address"
          name="address"
          value={value.address}
          onChange={handleChange}
          placeholder="address"
          className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
          required
        />
      </div>
      <textarea
        type="text"
        id="message"
        name="message"
        value={value.message}
        onChange={handleChange}
        placeholder="message"
        className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-3 placeholder:text-[14px] h-[80px]"
        required
      />
    </div>
  );
};

export default Step1;
