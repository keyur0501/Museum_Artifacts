import React, { useState } from "react";

const Contact = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    amount: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="donate">
      <div className="container flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-10 h-[500px] w-[450px] p-10 m-12 border border-black rounded-lg"
        >
          <h1 className=" text-2xl">Do You Have Any Questions? </h1>
          <div className=" flex flex-col gap-5">
            <div className="fields">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                name="fullname"
                id="name"
                onChange={handleChange}
              />
            </div>
            <div className="fields">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="fields">
              <label htmlFor="amount">Enter Donation Amount</label>
              <input
                type="number"
                name="amount"
                id="amount"
                onChange={handleChange}
              />
            </div>
            <button
              className="w-24 p-3 rounded-lg ml-auto bg-blue-600 cursor-pointer"
              type="submit"
            >
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
