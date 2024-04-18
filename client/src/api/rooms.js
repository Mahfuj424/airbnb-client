export const postRooms = async (rooms) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(rooms),
  });
  const data = response.json();
  return data;
};

// get all rooms

export const allRooms = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
    method: "GET",
  });
  const data = response.json();
  return data;
};



// get single room 
export const getRoom = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`);
  const data = response.json();
  return data;
};
