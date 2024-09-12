import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFromData] = useState({
    fullname: "",
    email: "",
    amount: "",
    suggestion: "",
  });

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFromData("");
    toggleModal();
  };

  const notify = () => {
    toast.success("Form successfully submitted");
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal}>Contact Us</button>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content md:w-[600px]  md:min-h-[300px]  w-[80%] h-[600px]">
              <div className="text-black ">
                <div className=" flex justify-center items-center w-90%">
                  <form
                    onSubmit={handleSubmit}
                    className=" flex flex-col gap-8 md:h-[500px] md:w-[450px] w-full h-[550px]  p-4 m-6  border border-black rounded-lg"
                  >
                    <h1 className=" text-2xl">Do You Have Any Questions? </h1>
                    <div className="flex flex-col gap-5">
                      <div className="fields">
                        <input
                          type="text"
                          name="fullname"
                          id="name"
                          placeholder="Enter Your Name"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="fields">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Enter Email"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="fields">
                        <input
                          type="number"
                          name="amount"
                          id="amount"
                          placeholder="Enter Donation Amount"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="fields">
                        <textarea
                          type="text"
                          rows={5}
                          name="suggestion"
                          id="suggestion"
                          placeholder="Suggestions"
                          onChange={handleChange}
                        />
                      </div>
                      <button
                        onClick={notify}
                        className="w-24 p-3 rounded-lg ml-auto bg-blue-600 cursor-pointer"
                        type="submit"
                      >
                        submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <button className="close-modal text-black" onClick={toggleModal}>
                close
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="top-center" />
    </>
  );
};

export default Contact;
