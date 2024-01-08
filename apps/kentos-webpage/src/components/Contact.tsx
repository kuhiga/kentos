import { useTranslations } from "../i18n/utils";
import { useCallback, useState } from "react";
import { SuccessModal } from "./SuccessModal";

const Contact = ({ lang }: { lang: string }) => {
  const t = useTranslations(lang as any);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [fakeFormData, setFakeFormData] = useState({
    name: "",
    email: "",
  });
  const handleFakeFormInputChange = (e) => {
    setFakeFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name.replace("123lmp", "")]: e.target.value,
    }));
  };
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (fakeFormData.email !== "" || fakeFormData.name !== "") {
        return;
      }
      const response = await fetch(
        "https://kentos-server.deno.dev/forms/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      if (response.ok) {
        setModalOpen(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        //console.error('API Request failed:', response.statusText);
      }
    } catch (error) {
      //console.error('Error during API request:', error);
    }
  };
  return (
    <div className="bg-white">
      <SuccessModal lang={lang} open={modalOpen} onClose={handleModalClose} />
      <div className="isolate bg-white px-6 pt-44 pb-12 sm:pb-24 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#60a5fa opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mt-2 text-3xl font-thin tracking-tight text-gray-900 sm:text-4xl">
            {t("contact.header")}
          </h1>
          {/* <p className="mt-2 text-lg leading-8 text-gray-600">
      Ready to elevate your English skills? I'm here to help! Feel free to reach
      out with any questions or to schedule a session. Your language journey is
      just a message away!
    </p>  */}
        </div>
        <form
          name="contact"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          {/* H o n e y p o t  */}
          <label
            className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-10"
            aria-hidden="true"
            tabIndex={-1}
            htmlFor="name"
          ></label>
          <input
            className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-10"
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
            type="text"
            id="name"
            name="name"
            placeholder="Your name here"
            value={fakeFormData.name}
            onChange={handleFakeFormInputChange}
          />
          <label
            className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-10"
            aria-hidden="true"
            tabIndex={-1}
            htmlFor="email"
          ></label>
          <input
            className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-10"
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
            type="email"
            id="email"
            name="email"
            placeholder="Your e-mail here"
            value={fakeFormData.email}
            onChange={handleFakeFormInputChange}
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* Real fields  */}
            <div>
              <label
                htmlFor="firstName123lmp"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {lang === "ja" ? t("contact.lastName") : t("contact.firstName")}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  name="firstName123lmp"
                  id="firstName123lmp"
                  autoComplete={lang === "ja" ? "family-name" : "given-name"}
                  className="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName123lmp"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {lang === "ja" ? t("contact.firstName") : t("contact.lastName")}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  name="lastName123lmp"
                  id="lastName123lmp"
                  autoComplete={lang === "ja" ? "given-name" : "family-name"}
                  className="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email123lmp"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {t("contact.email")}
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email123lmp"
                  value={formData.email}
                  onChange={handleInputChange}
                  id="email123lmp"
                  autoComplete="email"
                  className="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message123lmp"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {t("contact.message")}
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message123lmp"
                  value={formData.message}
                  onChange={handleInputChange}
                  id="message123lmp"
                  rows={4}
                  className="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full disabled:bg-blue-800 rounded-md bg-blue-400  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t("contact.submit")}
            </button>
          </div>
        </form>
      </div>
      {/* Image section */}
      <div className="bg-white xl:mx-auto xl:max-w-7xl px-6 pb-12 lg:px-32">
        <img
          src="/mountains.png"
          alt=""
          className="w-full object-cover xl:rounded-3xl"
        />
      </div>
    </div>
  );
};
export default Contact;
