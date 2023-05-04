import React from "react";

const Blog = () => {
  return (
    <div className="w-3/4 lg:w-1/2 mx-auto my-10">
      <h2 className="text-xl lg:text-4xl text-center mb-3 font-bold">
        Frequently Asked Questions
      </h2>
      <hr />
      <div className="space-y-4 mt-8">
        <details
          className="group border-s-4 border-warning bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              What is the difference between uncontrolled and controlled
              components?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-500">
            Uncontrolled components manage their own state internally and rely
            on DOM manipulation for data access. Controlled components have
            their state controlled by React using value props and onChange event
            handlers. React manages and updates the state, making it easier to
            access and manipulate the data.
          </p>
        </details>

        <details className="group border-s-4 border-warning bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              How to validate React props using PropTypes?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-500 whitespace-pre-line">
            To validate React props using PropTypes we need to follow some
            steps:{"\n"}
            1. Install the prop-types package.{"\n"}
            2. Import the <span className="font-medium">'PropTypes'</span>{" "}
            module in your component file.{"\n"}
            3. Define the expected prop types using the{" "}
            <span className="font-medium">'propTypes'</span> static property.
            {"\n"}
            4. PropTypes provide various validators like{" "}
            <span className="font-medium">'string'</span>,{" "}
            <span className="font-medium">'number'</span>,{" "}
            <span className="font-medium">'bool'</span>,
            <span className="font-medium">'array'</span>, etc. Use them to
            specify the expected type of each prop.
            {"\n"}
            5. Add <span className="font-medium">'.isRequired'</span> to make a
            prop mandatory.{"\n"}
            6. PropTypes will validate the props and provide warnings in the
            console if the validation fails.
          </p>
        </details>

        <details className="group border-s-4 border-warning bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              What is the difference between node.js and express.js?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-500 whitespace-pre-line">
            Node.js is a runtime environment that allows executing JavaScript
            code outside of a web browser, enabling server-side development.
            {"\n"}
            Express.js is a web application framework built on top of Node.js.
            It simplifies the process of creating web applications and APIs by
            providing a set of features and utilities. Express.js is often used
            in conjunction with Node.js for web development.
          </p>
        </details>

        <details className="group border-s-4 border-warning bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              What is a custom hook, and why will we create a custom hook?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-500 whitespace-pre-line">
            A custom hook is a JavaScript function in React that allows us to
            reuse logic across different components.
            {"\n"}
            We create a custom hook to encapsulate reusable logic and make it
            shareable between components, promoting code reuse and
            modularization. It helps keep our components clean and focused on
            their specific responsibilities.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Blog;
