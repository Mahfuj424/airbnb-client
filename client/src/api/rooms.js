export const postRooms = async (rooms) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
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
  });
  const data = await response.json();
  return data;
};

// get rooms for host
export const getRooms = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/rooms/${email}`
  );
  const data = await response.json();
  return data;
};

// get single room
export const getRoom = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`);
  const data = await response.json();
  return data;
};

// delete a room for host
export const deleteRoom = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
