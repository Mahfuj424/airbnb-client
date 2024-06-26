export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
  };

  fetch(`${import.meta.env.VITE_API_URL}/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// set user role

export const becomeHost = async (email) => {
  const currentUser = {
    role: "host",
  };

  return fetch(`${import.meta.env.VITE_API_URL}/user/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};

// get user role
export const getRole = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/user/${email}`
  );
  const data = await response.json();
  return data?.role;
};
