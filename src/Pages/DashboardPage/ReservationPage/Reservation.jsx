import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../../Components/Common/Loader";
import Pagination from "../../../Components/Common/Pagination";
import moment from "moment";

const Reservation = () => {
  const [loading, setLoading] = useState(true);
  const [allBooking, setAllBooking] = useState([]);
  const [page, setPage] = useState(0);
  const getAllBookingData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/service/booking"
      );

      if (response.status === 200) {
        setAllBooking(response.data);
      } else {
        console.error("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllBookingData();
  }, []);
  console.log("allBooking", allBooking);
  return (
    <div className="w-[1440px] mt-4">
      <div>
        <div className="pl-4">All Reservation</div>
        {allBooking.length > 1 && (
          <Pagination
            length={allBooking.length}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
      {loading ? (
        <div className="col-span-2 bg-white m-3 rounded-md">
          <Loader />
        </div>
      ) : (
        <div className="rounded px-4 pt-6 pb-8 mb-4 mt-2">
          <div className="grid grid-cols-5 border py-2 px-3">
            <p className="font-medium text-[14px]">Service Info </p>
            <p className="font-medium text-[14px]">Client Info </p>
            <p className="font-medium text-[14px]">Total Price </p>
            <p className="font-medium text-[14px]">Appointment Date </p>
            <p className="font-medium text-[14px]">Payment System </p>
          </div>
          {allBooking?.slice(page * 9, (page + 1) * 9).map((e, i) => {
            console.log(e);
            return (
              <div key={i} className="border px-3 py-2 mt-2 ">
                <div className="grid grid-cols-5">
                  <div className="flex justify-normal items-start gap-2">
                    <div className="text-[14px] font-normal">{i + 1}. </div>
                    <div>
                      <p className="text-[14px] font-semibold">
                        {e?.serviceName}
                      </p>
                      <div className="text-[14px] font-normal">
                        <span className="font-medium text-[14px]">
                          Category:{" "}
                        </span>
                        {e.category}
                      </div>
                      <div className="text-[14px] font-normal">
                        <span className="font-medium text-[14px]">Price: </span>
                        $ {e.price}
                      </div>
                      <div className="text-[14px] font-normal">
                        <span className="font-medium text-[14px]">
                          Discount:{" "}
                        </span>
                        {e.discount} %
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[14px] font-normal">
                      <span className="font-medium text-[14px]">Name: </span>
                      {e.clientName}
                    </div>
                    <div className="text-[14px] font-normal">
                      <span className="font-medium text-[14px]">Address: </span>
                      {e.address}
                    </div>
                    <div className="text-[14px] font-normal">
                      <span className="font-medium text-[14px]">Age: </span>
                      {e.age}
                    </div>
                  </div>
                  <div className="text-[14px] font-normal">
                    $ {e.totalPrice}
                  </div>

                  <div className="text-[14px] font-normal">
                    {moment(e.appointmentDate).format("lll")}
                  </div>
                  <div className="text-[14px] font-normal">
                    {e.paymentMethod}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reservation;
