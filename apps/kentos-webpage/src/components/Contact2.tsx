import { useState } from 'react';
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const Contact2 = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const handleInputChange = (e) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   console.log('form data is ', JSON.stringify(formData));
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost:8000/forms/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     if (response.ok) {
  //       const responseData = await response.json();
  //       console.log('API Response:', responseData);
  //     } else {
  //       console.error('API Request failed:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error during API request:', error);
  //   }
  // };
  return (
    <div className="relative">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          src="./trees.jpg"
          alt=""
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Contact Me
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Ready to elevate your English skills? I'm here to help! Feel free
              to reach out with any questions or to schedule a session. Your
              language journey is just a message away!
            </p>
            <form action="#" method="POST" className="mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="phone"
                      className="block font-semibold text-gray-900"
                    >
                      Phone
                    </label>
                    <p id="phone-description" className="text-gray-400">
                      Optional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Message
                    </label>
                    <p id="message-description" className="text-gray-400">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                <button
                  type="submit"
                  className="rounded-md bg-emerald-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    // <section className="text-gray-600 body-font relative">
    //   <div className="container px-5 py-12 mx-auto">
    //     <div className="flex flex-col text-center w-full mb-20">
    //       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
    //         Contact Me
    //       </h1>
    //       <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
    //         Ready to elevate your English skills? I'm here to help! Feel free to
    //         reach out with any questions or to schedule a session. Your language
    //         journey is just a message away!
    //       </p>
    //     </div>
    //     <form
    //       name="contact"
    //       method="POST"
    //       className="lg:w-1/2 md:w-2/3 mx-auto"
    //       data-netlify="true"
    //       netlify-honeypot="bot-field"
    //     >
    //       <p className="hidden">
    //         <label>
    //           Don’t fill this out if you’re human: <input name="bot-field" />
    //         </label>
    //       </p>
    //       <input type="hidden" name="form-name" value="contact" />
    //       <div className="flex flex-wrap -m-2">
    //         <div className="p-2 w-full">
    //           <div className="relative">
    //             <label
    //               htmlFor="name"
    //               className="leading-7 text-sm text-gray-600"
    //             >
    //               Name
    //             </label>
    //             <input
    //               type="text"
    //               id="name"
    //               name="name"
    //               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //             />
    //           </div>
    //         </div>
    //         <div className="p-2 w-full">
    //           <div className="relative">
    //             <label
    //               htmlFor="email"
    //               className="leading-7 text-sm text-gray-600"
    //             >
    //               Email
    //             </label>
    //             <input
    //               type="email"
    //               id="email"
    //               name="email"
    //               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //             />
    //           </div>
    //         </div>
    //         <div className="p-2 w-full">
    //           <div className="relative">
    //             <label
    //               htmlFor="message"
    //               className="leading-7 text-sm text-gray-600"
    //             >
    //               Message
    //             </label>
    //             <textarea
    //               id="message"
    //               name="message"
    //               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    //             ></textarea>
    //           </div>
    //         </div>
    //         <div className="p-2 w-full">
    //           <button
    //             type="submit"
    //             className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    //           >
    //             Send Message
    //           </button>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </section>
  );
};

export default Contact2;
