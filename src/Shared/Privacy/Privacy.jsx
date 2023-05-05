import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="w-3/4 mx-auto my-10">
      <h2 className="text-2xl lg:text-4xl text-center mb-4 font-bold">
        Privacy Policy
      </h2>
      <hr />
      <div className="mt-5">
        <p className="text-base text-gray-500">
          At Arabian Delights, we value your privacy and are committed to
          protecting your personal information. This privacy policy outlines how
          we collect, use, and protect your data when you visit our website or
          use our services.
        </p>
        <div className="mt-5 flex flex-col justify-center items-start gap-3">
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">
              Information We Collect:
            </span>{" "}
            We may collect your name, email address, phone number, and
            demographic information. We may also collect payment details for
            order processing purposes.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">
              Use of Personal Information:
            </span>{" "}
            We use your personal information to process orders, send marketing
            communications, improve our products and services, and comply with
            legal requirements.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">Data Security:</span> If
            We employ industry-standard security measures to protect your
            personal information from unauthorized access, disclosure, or
            misuse.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">Data Sharing:</span> We
            do not sell or share your personal information with third parties,
            except for trusted partners involved in providing our services, such
            as payment processors or shipping companies.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">
              Marketing Communications:
            </span>{" "}
            We may send you marketing communications about our products,
            services, and events. You can opt out of these communications at any
            time.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">
              Cookies and Tracking Technologies:
            </span>{" "}
            Our website uses cookies and similar tracking technologies to
            enhance your browsing experience and collect information about your
            usage patterns.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">Your Rights:</span> You
            have the right to access, update, or delete your personal
            information. You can also request to opt out of marketing
            communications.
          </p>
          <p className="text-base text-gray-500">
            <span className="font-medium text-gray-600">Data Retention:</span>{" "}
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this privacy policy, unless a
            longer retention period is required by law.
          </p>
          <p className="mt-8 text-base text-gray-500">
            Please review our full privacy policy for more detailed information
            on how we handle your personal data and your privacy rights.
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

export default Privacy;
