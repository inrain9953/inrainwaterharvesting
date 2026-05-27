import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Quote = ({ toggleContactForm }) => {
  return (
    <div className="bg-green-200 md:bg-green-100 pl-2 pr-2 p-0.5">
      <div className="flex justify-between items-center">
        <div className="flex items-center md:gap-5">
          <div className="md:flex hidden items-center">
            <div>
              <EmailIcon fontSize="small" />
            </div>
            <a
              className="text-[12px] font-semibold cursor-pointer hover:text-sky-700"
              href="mailto:sales@inrainwaterharvesting.com"
            >
              sales@inrainwaterharvesting.com
            </a>
          </div>
          <div className="flex items-center">
            <div>
              <PhoneIcon fontSize="small" />
            </div>
            <div className="flex items-center gap-2">
              <a
                className="text-[12px] font-semibold cursor-pointer hover:text-sky-700"
                href="tel:+919910220794"
              >
                +91-9910220794
              </a>
              <p>|</p>
              <a
                className="text-[12px] font-semibold cursor-pointer hover:text-sky-700"
                href="tel:011-35823511"
              >
                011-35823511
              </a>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={toggleContactForm}
            className="bg-sky-500 hover:bg-sky-700 cursor-pointer text-[14px] text-white font-bold px-2 rounded"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
