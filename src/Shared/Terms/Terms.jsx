import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Terms = () => {
  return (
    <div className="w-3/4 mx-auto my-10">
      <h2 className="text-2xl lg:text-4xl text-center mb-4 font-bold">
        Our Terms and Conditions
      </h2>
      <hr />
      <div className="mt-5">
        <p className="text-base text-gray-500">
          Welcome to Arabian Delights website. These terms and conditions
          outline the rules and regulations for the use of our website. By
          accessing this website, we assume you accept these terms and
          conditions in full. Do not continue to use Arabian Delights website if
          you do not agree with all of the terms and conditions stated on this
          page.
        </p>
        <div className="mt-5 flex flex-col justify-center items-start gap-3">
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">Use of Content:</span>{" "}
            The content on Arabian Delights website is protected by copyright
            and trademark laws. You may not use, reproduce, modify, or
            distribute any content without prior written consent.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">Website Usage:</span>{" "}
            You must be at least 18 years old to use this website. The
            information provided is for general purposes only, and we do not
            guarantee its accuracy or completeness.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">User Accounts:</span> If
            you create a user account, you are responsible for maintaining its
            confidentiality and ensuring accurate information. We reserve the
            right to terminate or suspend any account.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">
              User-Generated Content:
            </span>{" "}
            By submitting content, you grant Arabian Delights a license to use
            and distribute it. You are responsible for the content you submit
            and must not violate any third-party rights or laws.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">
              Third-Party Links:
            </span>{" "}
            We are not responsible for the content or practices of third-party
            websites linked on Arabian Delights.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">
              Limitation of Liability:
            </span>{" "}
            Arabian Delights, its directors, employees, or affiliates shall not
            be liable for any damages resulting from website use.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">Governing Law:</span>{" "}
            These terms and conditions are governed by the laws of Middle
            Eastern. Any disputes shall be subject to the exclusive jurisdiction
            of the courts located in Abu Dhabi.
          </p>
          <p className="mt-8 text-base text-gray-500">
            By using Arabian Delights website, you agree to these terms and
            conditions.
          </p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link to="/register">
          <button className="inline-flex items-center gap-2 rounded-lg bg-warning px-8 py-3 transition hover:scale-110 hover:shadow-xl active:bg-yellow-400">
            <FaLongArrowAltLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Go back to Register</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Terms;
