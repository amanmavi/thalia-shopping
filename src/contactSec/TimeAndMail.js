import React from "react";

const TimeAndMail = () => {
  return (
    <div className="laptop:flex grid laptop:gap-28 gap-10 laptop:px-40 px-4 mt-32  laptop:justify-center">
      <div className="laptop:w-auto w-3/4">
        <p className="text-2xl font-medium pb-6">Contact Us</p>
        <p className="pb-4">
          To make requests for further informationm, contact us via our social
          media Channels.
        </p>
        <p>Weekday: 08:00 am to 18:00 pm</p>
        <p>Saturday: 10:00 am to 16:00 pm</p>
        <p>Sunday: Closed</p>
      </div>
      <div className="grid place-content-start ">
        <form className="grid place-content-start ">
          <p className="pb-4 text-xl font-medium">SEND US YOUR MESSAGE</p>
          <div className="laptop:flex laptop:justify-around pb-4 grid gap-y-2 gap-4 laptop:w-auto w-1/4">
            <input
              className="border-2 pl-6 rounded py-2"
              type="text"
              placeholder="Name"
            />
            <input
              className="border-2 pl-6 rounded  py-2"
              type="email"
              placeholder="Email"
            />
          </div>
          <textarea
            className="border-2 pl-6 rounded"
            name="sendEmail"
            id="sendEmail"
            cols="50"
            rows="8"
            placeholder="Message"
          ></textarea>
          <input
            className="px-3 py-2 w-20 my-4 bg-primary cursor-pointer rounded shadow"
            type="button"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default TimeAndMail;
