import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { SubmitButton } from "../Button/Button";
import { toast } from "react-toastify";


export default function CommentConatctFrom() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("http://localhost/vegkourt/commentform.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        console.log("response", response);
        console.log("STATUS:", response.status);

        
        if (response.ok) {
          const data = await response.json();
          console.log("PHP RESPONSE:", data);
          if (data.status === "success") {
            setFormData({
              name: "",
              email: "",
              message: "",
            });
            toast.success("Successfully we got your info.");
          } else {
            console.error("Error:", data.message);
            toast.error(data.message);
          }
        } else {
          console.error("Error:", response.statusText);
          toast.error("An error occurred. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An error occurred. Please try again later.");
      }
    } else {
      setErrors(formErrors);
      Object.values(formErrors).forEach((error) => {
        toast.error(error);
      });
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="from-input d-flex gap-2">
        <input
          name="name"
          placeholder="Name"
          className="w-50"
          type="text"
          value={formData.name || ""}
          onChange={handleInputChange}
        />
        <input
          placeholder="Email"
          className="w-50"
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-md-12">
        <textarea
          name="message"
          rows="5"
          value={formData.message || ""}
          onChange={handleInputChange}
          className="col-12"
          placeholder="Comment text."
        />
      </div>
      <div className="ak-height-40 ak-height-lg-20"></div>

      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? "Posting..." : "Post Comment"}
      </SubmitButton>
    </form>
  );
}
