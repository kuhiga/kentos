const Testimonials = () => {
  const hello: string = 'hi';
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col text-center w-full ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Testimonials
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Here are some testimonials from current and/or past students of
              mine.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Tomoe
                </h2>
                <p className="leading-relaxed text-base">
                  He has a clear voice. And he can speak Japanese,too. I am
                  relaxed and can take a lesson.
                </p>
              </div>
            </div>
            <div className="sm:w-1/3 text-center sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Kate
                </h2>
                <p className="leading-relaxed text-base">
                  Kent is a good teacher. His lesson makes me laugh and relax.
                  Also you will get new things from his conversation. I enjoy
                  his lesson every time.
                </p>
              </div>
            </div>
            <div className="sm:w-1/3 text-center sm:pl-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Takashi
                </h2>
                <p className="leading-relaxed text-base">
                  Kent is a caring, calm, and intelligent tutor who makes me
                  motivated. I'm grateful to meet him through Cambly because
                  he's such a great person, not only as a teacher.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
