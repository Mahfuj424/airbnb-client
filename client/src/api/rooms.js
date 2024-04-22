export const postRooms = async (rooms) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
    body: JSON.stringify(rooms),
  });
  const data = await response.json();
  return data;
};

// get all rooms
export const allRooms = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });
  const data = await response.json();
  return data;
};

// get rooms for host
export const getRooms = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/rooms/${email}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

// update room
export const updateRoom = async (roomData, id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
    body: JSON.stringify(roomData),
  });
  const data = await response.json();
  return data;
};

// get single room
export const getRoom = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });
  const data = await response.json();
  return data;
};

// delete a room for host
export const deleteRoom = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });
  const data = await response.json();
  return data;
};
