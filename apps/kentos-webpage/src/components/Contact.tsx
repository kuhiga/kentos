import { useTranslations } from '../i18n/utils';
import { useCallback, useState } from 'react';
import { SuccessModal } from './SuccessModal';

const Contact = ({ lang }: { lang: string }) => {
  const t = useTranslations(lang as any);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const [formSent, setFormSent] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);
  const handleSubmit = async (e) => {
    setFormSent(true);
    console.log('form data is ', JSON.stringify(formData));
    e.preventDefault();
    try {
      const response = await fetch(
        'https://kentos-server.deno.dev/forms/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        console.log('API Response:', responseData);
        setModalOpen(true);
      } else {
        console.error('API Request failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during API request:', error);
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
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-3xl font-thin tracking-tight text-gray-900 sm:text-4xl">
            {t('contact.header')}
          </p>
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
          {/* <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <input type="hidden" name="form-name" value="contact" required /> */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {t('contact.firstName')}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  name="firstName"
                  id="first-name"
                  autoComplete="given-name"
                  className="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {t('contact.lastName')}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  name="lastName"
                  id="last-name"
                  autoComplete="family-name"
                  className="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {t('contact.email')}
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  id="email"
                  autoComplete="email"
                  className="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {t('contact.message')}
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  id="message"
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
              disabled={formSent}
            >
              {formSent ? t('contact.submitted') : t('contact.submit')}
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
