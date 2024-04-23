export const bookedRoom = async (booking) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(booking),
  });
  const data = await response.json();
  return data;
};

// update rooms status
export const upadateStatus = async (id, status) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/rooms/status/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    }
  );
  const data = await response.json();
  return data;
};

// get all bookings for guest
export const getBookings = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/bookings?email=${email}`
  );
  const data = await response.json();
  return data;
};

export const getBookingsManage = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/bookings/host?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

// delete a booking

export const deletebooking = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/bookings/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};
