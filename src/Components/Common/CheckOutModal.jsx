import React from "react";
import { Dialog } from "primereact/dialog";

const CheckOutModal = ({ visible, setVisible }) => {
  return (
    <Dialog
      visible={visible}
      style={{ width: "50vw" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      className="bg-[#fbdf86] py-3 px-7 rounded-md">
      <div>
        <div>
          <p className="text-[16px] font-semibold">Contact Info</p>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered rounded-none w-full"
          />
        </div>
        <div>
          <p className="text-[16px] font-semibold">Shipping Information</p>
          <div>
            <label>First Name</label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered rounded-none w-full"
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered rounded-none w-full"
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered rounded-none w-full"
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered rounded-none w-full"
            />
          </div>
          <div>
            <label>State</label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered rounded-none w-full"
            />
          </div>
          <div>
            <label>Zip-Code</label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered rounded-none w-full"
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
};
export default CheckOutModal;
