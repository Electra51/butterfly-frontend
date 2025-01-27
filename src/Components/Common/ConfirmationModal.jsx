import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const ConfirmationModal = ({ visible, setVisible }) => {
  return (
    <Dialog header="" visible={visible} style={{ width: "50vw" }}>
      <p className="m-0">
        Your appointentmant is successfully booked, Congratulations!
      </p>
      <button
        className="mx-auto px-2 py-1.5 bg-green-500 flex justify-center items-center"
        onClick={setVisible(false)}>
        Okay <IoCheckmarkDoneSharp />
      </button>
    </Dialog>
  );
};

export default ConfirmationModal;
