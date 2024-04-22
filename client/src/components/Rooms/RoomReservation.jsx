import React, { useContext, useEffect, useState } from "react";
import Calender from "../Rooms/Calender";
import Button from "../Button/Button";
import BookingModal from "../Modal/BookingModal";
import { formatDistance } from "date-fns"; // Assuming you are using date-fns for date formatting
import { AuthContext } from "../../providers/AuthProvider";
import { bookedRoom, upadateStatus } from "../../api/booking";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RoomReservation = ({ roomData }) => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
  };

  const totalPrice =
    parseFloat(
      formatDistance(new Date(roomData.to), new Date(roomData.from)).split(
        " "
      )[0]
    ) * roomData.price;

  const [value, setValue] = useState({
    startDate: new Date(roomData?.from),
    endDate: new Date(roomData?.to),
    key: "selection",
  });


  const handleSelect = (range) => {
    setValue({
      ...value,
      startDate: range.startDate,
      endDate: range.endDate
    });
  };

  const [bookingInfo, setBookingInfo] = useState({
    guest: { name: user.displayName, email: user.email, image: user.photoURL },
    host: roomData.host.email,
    location: roomData.location,
    price: roomData.price,
    title: roomData.title,
    from: roomData.from,
    to: roomData.to,
    roomId: roomData._id,
    image: roomData.image,
  });

  // const modalHandler = () => {
  //   bookedRoom(bookingInfo).then((data) => {
  //     upadateStatus(roomData._id, true)
  //       .then((data) => {
  //         closeModal();
  //         toast.success("successfully booked room");
  //         navigate('/dashboard/my-bookings')
  //       })
  //       .catch((err) => closeModal());
  //   });
  // };

  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {roomData.price}</div>{" "}
        {/* Display roomData.price */}
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender value={value} handleSelect={handleSelect} />
      </div>

      <hr />
      <div className="p-4">
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          disabled={
            user.email === roomData.host.email ||
            roomData.booked ||
            value.endDate < new Date()
          }
          label="Reserve"
        />
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
      <BookingModal
        bookingInfo={bookingInfo}
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </div>
  );
};

export default RoomReservation;
