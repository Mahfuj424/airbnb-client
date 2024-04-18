import React, { useContext, useState } from "react";
import AddRoomForm from "../../components/Forms/AddRoomForm";
import { imageUpload } from "../../api/utils";
import { AuthContext } from "../../providers/AuthProvider";
import { postRooms } from "../../api/rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRooms = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSubmit = (e) => {
    setUploadButtonText("Uploading...");
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const location = form.location.value;
    const title = form.title.value;
    const from = dates?.startDate;
    const to = dates?.endDate;
    const price = form.price.value;
    const total_guest = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const category = form.category.value;
    const image = form.image.files[0];

    imageUpload(image)
      .then((res) => {
        const roomData = {
          image: res?.data?.display_url,
          location,
          title,
          from,
          to,
          price,
          total_guest,
          bedrooms,
          bathrooms,
          description,
          category,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
        };
        console.log(roomData);
        postRooms(roomData)
          .then((data) => {
            setUploadButtonText("Uploaded!");
            toast.success("Room added");
            navigate("/dashboard/my-listings");
            // Clear form data
            form.location.value = "";
            form.title.value = "";
            form.price.value = "";
            form.total_guest.value = "";
            form.bedrooms.value = "";
            form.bathrooms.value = "";
            form.description.value = "";
            form.category.value = "";
            form.image.value = null;
          })
          .catch((err) => console.log(err));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  const handleDates = (ranges) => {
    setDates(ranges.selection);
    console.log(ranges.selection);
  };

  return (
    <div>
      <AddRoomForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
        handleDates={handleDates}
        dates={dates}
      />
    </div>
  );
};

export default AddRooms;
