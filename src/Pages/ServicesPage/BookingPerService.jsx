import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommonHero from "../../Components/Common/CommonHero";
import BookingLeft from "./BookingLeft";
import axios from "axios";
import Step1 from "./Step1";
import { MdKeyboardArrowRight } from "react-icons/md";
import BookingHeader from "./BookingHeader";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import toast from "react-hot-toast";

const BookingPerService = () => {
  const { id } = useParams();
  const [idWishService, setIdWishService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(null);
  const [timeValue, setTimeValue] = useState("00:00");
  const userData = JSON.parse(localStorage.getItem("user-token"));

  //get id wish service
  const getIdWishService = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/service/service/${id}`
      );

      if (response.status === 200) {
        setIdWishService(response.data);
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
    getIdWishService();
  }, [id]);
  const [value, setValue] = useState({
    serviceName: "",
    serviceImg: "",
    category: "",
    price: "",
    discount: "",
    totalPrice: "",
    clientName: userData?.user?.name,
    email: userData?.user?.email,
    age: "",
    address: "",
    message: "",
    appointmentDate: null,
    paymentMethod: "",
  });

  useEffect(() => {
    if (idWishService) {
      setValue((prev) => ({
        ...prev,
        serviceName: idWishService?.name || "",
        serviceImg: idWishService?.detail[0]?.img || "",
        category: idWishService?.category?.name || "",
        price: idWishService?.price || "",
        discount: idWishService?.discount || "",
        totalPrice:
          idWishService?.price && idWishService?.discount
            ? (
                idWishService.price -
                (idWishService.price * idWishService.discount) / 100
              ).toFixed(2)
            : "",
      }));
    }
  }, [idWishService]);

  const handleTimeChange = (e) => {
    const time = e.target.value;
    setTimeValue(time);
    if (!selected) return;
    const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
    const newSelectedDate = new Date(selected.setHours(hours, minutes, 0, 0));
    setSelected(newSelectedDate);
    setValue((prevData) => ({
      ...prevData,
      appointmentDate: newSelectedDate,
    }));
  };

  const handleDaySelect = (date) => {
    if (!date) return;
    setSelected(date);
    setValue((prevData) => ({ ...prevData, appointmentDate: date }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("v", value);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/service/booking",
        value,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Booking this service successfully!");
        setValue({
          serviceName: "",
          serviceImg: "",
          category: "",
          price: "",
          discount: "",
          totalPrice: "",
          clientName: "",
          email: "",
          age: "",
          address: "",
          message: "",
          appointmentDate: null,
          paymentMethod: "",
        });
        setStep(1);
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Failed to book the service. Please try again!");
    }
  };

  // for step
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  console.log("idWishService", idWishService);

  return (
    <div>
      <CommonHero type={"booking"} title={"Booking Appointment"} />
      <div className="sm:container-div-sm lg:container-div container-div pt-[120px] lg:pt-[70px] px-8 pb-[100px]">
        <div className="grid grid-cols-3 gap-12 divide-x-[1px]">
          <div className="col-span-2">
            <div className="">
              <BookingHeader step={step} />

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <Step1
                    idWishService={idWishService}
                    value={value}
                    handleChange={handleChange}
                  />
                )}

                {step === 2 && (
                  <div className="mt-7 h-[320px]">
                    <div className="grid grid-cols-2 gap-12">
                      <DayPicker
                        disabled={{ dayOfWeek: [0, 6, 4] }}
                        mode="single"
                        selected={selected}
                        onSelect={handleDaySelect}
                        footer={`Selected date: ${
                          selected ? selected.toLocaleString() : "none"
                        }`}
                      />
                      <form>
                        <label className="mt-7">
                          Set the time:{" "}
                          <input
                            type="time"
                            value={timeValue}
                            onChange={handleTimeChange}
                            className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
                          />
                        </label>
                      </form>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="mt-7 h-[320px] text-[14px]">
                    <p className="mb-4">
                      Please tell us how you would like to pay:
                    </p>
                    <div className="form-control">
                      <label>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="local"
                          onChange={handleChange}
                          checked={value.paymentMethod === "local"}
                          className="mr-2"
                        />
                        I will pay locally
                      </label>
                    </div>
                    <div className="form-control mt-2">
                      <label>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="online"
                          onChange={handleChange}
                          checked={value.paymentMethod === "online"}
                          className="mr-2"
                        />
                        I will pay now online
                      </label>
                    </div>
                  </div>
                )}

                <div className="mt-2 flex justify-between">
                  {step > 1 && (
                    <div className="flex justify-start mt-2">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-3 py-1.5 bg-gray-400 text-white ml-0 text-[14px] flex justify-normal gap-1 items-center">
                        Previous
                      </button>
                    </div>
                  )}
                  {step < 3 ? (
                    <div className="flex justify-end mt-2">
                      {" "}
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-3 py-1.5 bg-blue-500 text-white mr-0 text-[14px] flex justify-end gap-1 items-center">
                        Next
                        <MdKeyboardArrowRight className="text-[18px]" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-green-500 text-white mr-0 text-[14px] flex justify-normal gap-1 items-center mt-2">
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          <BookingLeft />
        </div>
      </div>
    </div>
  );
};

export default BookingPerService;
